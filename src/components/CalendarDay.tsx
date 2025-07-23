// Calendar day cell component
import type { CalendarDay as CalendarDayType } from '../types/calendar';
import styles from './CalendarDay.module.css';

interface CalendarDayProps {
  day: CalendarDayType;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day }) => {
  const maxVisibleArticles = 2;
  const visibleArticles = day.articles.slice(0, maxVisibleArticles);
  const remainingCount = day.articles.length - maxVisibleArticles;

  const dayClasses = [
    styles.calendarDay,
    !day.isCurrentMonth && styles.otherMonth,
    day.isSunday && styles.sunday,
    day.isSaturday && styles.saturday,
  ].filter(Boolean).join(' ');

  return (
    <div className={dayClasses}>
      <div className={styles.dayNumber}>{day.date}</div>
      
      {day.articles.length > 0 ? (
        <div className={styles.articleList}>
          {visibleArticles.map((article, index) => (
            <div key={index} className={styles.articleItem}>
              {article.title}
              <div className={styles.articleAuthor}>{article.author}</div>
            </div>
          ))}
          {remainingCount > 0 && (
            <div className={styles.moreArticles}>
              他{remainingCount}件
            </div>
          )}
        </div>
      ) : (
        day.isCurrentMonth && <div className={styles.emptyIndicator}></div>
      )}
    </div>
  );
};

export default CalendarDay;