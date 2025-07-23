// Calendar data for August 2025
import type { CalendarMonth } from '../types/calendar';

export const august2025: CalendarMonth = {
  year: 2025,
  month: 8,
  monthName: 'August',
  stats: {
    totalArticles: 12,
    totalAuthors: 7,
    emptyDays: 19
  },
  days: [
    // Previous month days (July)
    { date: 27, month: 7, year: 2025, articles: [], isCurrentMonth: false, isSunday: true },
    { date: 28, month: 7, year: 2025, articles: [], isCurrentMonth: false },
    { date: 29, month: 7, year: 2025, articles: [], isCurrentMonth: false },
    { date: 30, month: 7, year: 2025, articles: [], isCurrentMonth: false },
    { date: 31, month: 7, year: 2025, articles: [], isCurrentMonth: false },
    
    // August days
    {
      date: 1, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '告知記事出すよ', author: 'yamakan' }
      ]
    },
    {
      date: 2, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: []
    },
    {
      date: 3, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: []
    },
    {
      date: 4, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'プロダクト開発の AI Native 推進のこれまで（仮）', author: 'kekekenta' }
      ]
    },
    {
      date: 5, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '改めてマネジメントとしてのブレスト活用(?)', author: 'yamakan' }
      ]
    },
    {
      date: 6, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 7, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'ヘルプドキュメント周りの何か', author: 'akamine' }
      ]
    },
    {
      date: 8, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 9, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: []
    },
    {
      date: 10, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: []
    },
    {
      date: 11, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 12, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 13, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 14, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '情シスのAI Nativeの取り組みを書く予定', author: 'kekekenta' }
      ]
    },
    {
      date: 15, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 16, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: []
    },
    {
      date: 17, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: []
    },
    {
      date: 18, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'BDD + RGBC with Claude Codeで開発のススメ', author: 'kkatamot' }
      ]
    },
    {
      date: 19, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '何か', author: 'yatsu' }
      ]
    },
    {
      date: 20, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'メモリファイル拡充で過去のインシデントをレビューで指摘できるようにした話', author: 'kekekenta' }
      ]
    },
    {
      date: 21, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'マルチエージェントの何か', author: 'akamine' }
      ]
    },
    {
      date: 22, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'Claude Code Action の権限周りの話', author: 'otsuki' }
      ]
    },
    {
      date: 23, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: []
    },
    {
      date: 24, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: []
    },
    {
      date: 25, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 26, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 27, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'marpの話（他に書く人いたら譲ります）', author: 'kekekenta' }
      ]
    },
    {
      date: 28, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 29, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 30, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: []
    },
    {
      date: 31, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: [
        { title: '空いたところにCloud Sec JPで話したLiteLLMの話を書きます (書けます)', author: 'tktk' }
      ]
    }
  ]
};