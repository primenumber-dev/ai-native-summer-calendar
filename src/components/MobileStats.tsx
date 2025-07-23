// Mobile stats component
import styles from './MobileStats.module.css';

interface MobileStatsProps {
  totalArticles: number;
  totalAuthors: number;
  emptyDays: number;
}

const MobileStats: React.FC<MobileStatsProps> = ({ totalArticles, totalAuthors }) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <span className={styles.statValue}>{totalArticles}</span>
        <span className={styles.statLabel}>記事</span>
      </div>
      <div className={styles.statCard}>
        <span className={styles.statValue}>{totalAuthors}</span>
        <span className={styles.statLabel}>投稿者</span>
      </div>
    </div>
  );
};

export default MobileStats;