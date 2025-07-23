// Types for calendar data structure
export interface Article {
  title: string;
  author: string;
  link?: string;
}

export interface CalendarDay {
  date: number;
  month: number;
  year: number;
  articles: Article[];
  isCurrentMonth: boolean;
  isWeekend?: boolean;
  isSunday?: boolean;
  isSaturday?: boolean;
}

export interface CalendarMonth {
  year: number;
  month: number;
  monthName: string;
  days: CalendarDay[];
  stats: {
    totalArticles: number;
    totalAuthors: number;
    emptyDays: number;
  };
}