// Main calendar component
import type { CalendarMonth } from "../types/calendar";
import styles from "./Calendar.module.css";
import CalendarDay from "./CalendarDay";
import CalendarList from "./CalendarList";
import MobileStats from "./MobileStats";

interface CalendarProps {
  data: CalendarMonth;
}

const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <img 
          src="/ai-native-summer-calendar/images/logo_full.png" 
          alt="AI-Native Logo" 
          className={styles.logo}
        />
        <h1 className={styles.mainTitle}>
          AI-Native
          <br />
          <span className={styles.accent}>Summer Calendar</span>
          <br />
          {data.year}
        </h1>
      </div>

      {/* Mobile stats */}
      <MobileStats 
        totalArticles={data.stats.totalArticles}
        totalAuthors={data.stats.totalAuthors}
        emptyDays={data.stats.emptyDays}
      />

      <div className={styles.calendarHeader}>
        <h2 className={styles.monthYear}>
          <span className={styles.month}>{data.monthName}</span> {data.year}
        </h2>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{data.stats.totalArticles}</span>
            <span>記事</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{data.stats.totalAuthors}</span>
            <span>投稿者</span>
          </div>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {/* Weekday headers */}
        {weekDays.map((day, index) => (
          <div
            key={day}
            className={`${styles.weekdayHeader} ${
              index === 0 ? styles.sunday : ""
            } ${index === 6 ? styles.saturday : ""}`}
          >
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {data.days.map((day) => (
          <CalendarDay key={`${day.month}-${day.date}`} day={day} />
        ))}
      </div>
      
      {/* Mobile list view */}
      <CalendarList data={data} />
    </div>
  );
};

export default Calendar;
