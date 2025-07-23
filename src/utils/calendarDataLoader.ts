// Utility to load and parse calendar data from YAML
import type { CalendarMonth, Article } from '../types/calendar';

interface YamlArticle {
  date: number;
  title: string;
  author: string;
  link?: string;
}

interface YamlData {
  year: number;
  month: number;
  monthName: string;
  articles: YamlArticle[];
}

export async function loadCalendarData(yamlUrl: string): Promise<CalendarMonth> {
  try {
    const response = await fetch(yamlUrl);
    const yamlText = await response.text();
    
    // Simple YAML parser for our specific format
    const data = parseSimpleYaml(yamlText);
    
    // Generate calendar data
    return generateCalendarMonth(data);
  } catch (error) {
    console.error('Error loading calendar data:', error);
    throw error;
  }
}

function parseSimpleYaml(yamlText: string): YamlData {
  const lines = yamlText.split('\n');
  const data: YamlData = {
    year: 0,
    month: 0,
    monthName: '',
    articles: []
  };
  
  let currentArticle: YamlArticle | null = null;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    
    if (trimmed.startsWith('year:')) {
      data.year = parseInt(trimmed.split(':')[1].trim());
    } else if (trimmed.startsWith('month:')) {
      data.month = parseInt(trimmed.split(':')[1].trim());
    } else if (trimmed.startsWith('monthName:')) {
      data.monthName = trimmed.split(':')[1].trim();
    } else if (trimmed === '- date:' || trimmed.startsWith('- date:')) {
      if (currentArticle) {
        data.articles.push(currentArticle);
      }
      const dateMatch = trimmed.match(/- date:\s*(\d+)/);
      currentArticle = {
        date: dateMatch ? parseInt(dateMatch[1]) : 0,
        title: '',
        author: '',
        link: ''
      };
    } else if (currentArticle) {
      if (trimmed.startsWith('title:')) {
        currentArticle.title = trimmed.split(':').slice(1).join(':').trim().replace(/^["']|["']$/g, '');
      } else if (trimmed.startsWith('author:')) {
        currentArticle.author = trimmed.split(':').slice(1).join(':').trim().replace(/^["']|["']$/g, '');
      } else if (trimmed.startsWith('link:')) {
        currentArticle.link = trimmed.split(':').slice(1).join(':').trim().replace(/^["']|["']$/g, '');
      }
    }
  }
  
  if (currentArticle) {
    data.articles.push(currentArticle);
  }
  
  return data;
}

function generateCalendarMonth(data: YamlData): CalendarMonth {
  const { year, month, monthName, articles } = data;
  
  // Create a map of articles by date
  const articlesByDate = new Map<number, Article[]>();
  articles.forEach(article => {
    if (!articlesByDate.has(article.date)) {
      articlesByDate.set(article.date, []);
    }
    articlesByDate.get(article.date)!.push({
      title: article.title,
      author: article.author,
      link: article.link
    });
  });
  
  // Generate calendar days
  const days = [];
  
  // Get first day of month
  const firstDay = new Date(year, month - 1, 1);
  const firstDayOfWeek = firstDay.getDay();
  
  // Add previous month days
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();
  
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      month: prevMonth,
      year: prevYear,
      articles: [],
      isCurrentMonth: false,
      isSunday: days.length % 7 === 0,
      isSaturday: days.length % 7 === 6
    });
  }
  
  // Add current month days
  const daysInMonth = new Date(year, month, 0).getDate();
  for (let date = 1; date <= daysInMonth; date++) {
    const currentDayOfWeek: number = days.length % 7;
    days.push({
      date,
      month,
      year,
      articles: articlesByDate.get(date) || [],
      isCurrentMonth: true,
      isSunday: currentDayOfWeek === 0,
      isSaturday: currentDayOfWeek === 6
    });
  }
  
  // Calculate statistics
  const allArticles = Array.from(articlesByDate.values()).flat();
  const uniqueAuthors = new Set(allArticles.map(a => a.author));
  const emptyDays = daysInMonth - articlesByDate.size;
  
  return {
    year,
    month,
    monthName,
    days,
    stats: {
      totalArticles: allArticles.length,
      totalAuthors: uniqueAuthors.size,
      emptyDays
    }
  };
}