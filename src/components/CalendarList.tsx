// Mobile list view component
import type { CalendarMonth } from '../types/calendar';
import styles from './CalendarList.module.css';

interface CalendarListProps {
  data: CalendarMonth;
}

const CalendarList: React.FC<CalendarListProps> = ({ data }) => {
  const getDayOfWeek = (day: number, month: number, year: number): string => {
    const date = new Date(year, month - 1, day);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  };

  const getWeekdayClass = (day: number, month: number, year: number): string => {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return styles.sunday;
    if (dayOfWeek === 6) return styles.saturday;
    return '';
  };

  // Filter only current month days with articles
  const currentMonthDays = data.days.filter(day => day.isCurrentMonth && day.articles.length > 0);

  return (
    <div className={styles.listContainer}>
      <div className={styles.monthSection}>
        <h2 className={styles.monthHeader}>
          <span className={styles.monthName}>{data.monthName}</span> {data.year}
        </h2>
        
        {currentMonthDays.map((day) => {
          const weekdayClass = getWeekdayClass(day.date, day.month, day.year);
          
          return (
            <div 
              key={`${day.month}-${day.date}`} 
              className={styles.dayItem}
            >
              <div className={styles.dayHeader}>
                <div className={`${styles.dateInfo} ${weekdayClass}`}>
                  <span className={styles.dayNumber}>{day.date}</span>
                  <span className={styles.dayOfWeek}>
                    {getDayOfWeek(day.date, day.month, day.year)}
                  </span>
                </div>
                <span className={styles.articleCount}>
                  {day.articles.length}件
                </span>
              </div>
              
              <div className={styles.articlesList}>
                {day.articles.map((article, index) => (
                  <div key={index} className={styles.articleItem}>
                    <div className={styles.articleTitle}>{article.title}</div>
                    <div className={styles.articleAuthor}>{article.author}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarList;