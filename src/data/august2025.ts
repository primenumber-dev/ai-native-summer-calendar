// Calendar data for August 2025
import type { CalendarMonth } from '../types/calendar';

export const august2025: CalendarMonth = {
  year: 2025,
  month: 8,
  monthName: 'August',
  stats: {
    totalArticles: 24,
    totalAuthors: 18,
    emptyDays: 7
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
        { title: 'AIアルゴリズムで解く夏の最適化', author: '山田 花子' },
        { title: '機械学習の冷却システム', author: '田中 太郎' }
      ]
    },
    {
      date: 2, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: [
        { title: '深層学習モデルの軽量化テクニック', author: '佐藤 次郎' }
      ]
    },
    {
      date: 3, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: []
    },
    {
      date: 4, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '自然言語処理の最新トレンド', author: '伊藤 美咲' }
      ]
    },
    {
      date: 5, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'AIエージェントのマルチモーダル', author: '鈴木 一郎' },
        { title: '強化学習の実践ガイド', author: '高橋 花子' }
      ]
    },
    {
      date: 6, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 7, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'エッジAIの省電力設計', author: '木村 健' }
      ]
    },
    {
      date: 8, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 9, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: [
        { title: '生成AIのプロンプトエンジニアリング', author: '渡辺 太一' }
      ]
    },
    {
      date: 10, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: []
    },
    {
      date: 11, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'AIセキュリティの最前線', author: '中村 美穂' }
      ]
    },
    {
      date: 12, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '機械学習パイプラインの自動化', author: '小林 翔' },
        { title: 'AIモデルの解釈可能性', author: '山本 花子' }
      ]
    },
    {
      date: 13, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 14, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '量子機械学習の基礎', author: '斎藤 健一' }
      ]
    },
    {
      date: 15, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'AIによる異常検知システム', author: '加藤 美咲' }
      ]
    },
    {
      date: 16, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: []
    },
    {
      date: 17, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: [
        { title: '週末に学ぶAI開発環境構築', author: '松田 太郎' }
      ]
    },
    {
      date: 18, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'コンピュータビジョンの応用', author: '石井 花子' }
      ]
    },
    {
      date: 19, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 20, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'AIチップの最新動向', author: '橋本 健' },
        { title: '分散学習フレームワーク', author: '森 美穂' }
      ]
    },
    {
      date: 21, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'AIエシックスと夏の開発', author: '清水 一郎' }
      ]
    },
    {
      date: 22, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '時系列予測モデルの実装', author: '福田 花子' }
      ]
    },
    {
      date: 23, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: [
        { title: '休日に読むAI論文まとめ', author: '吉田 太郎' }
      ]
    },
    {
      date: 24, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: []
    },
    {
      date: 25, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'AIプロダクト開発の実践', author: '岡田 美咲' }
      ]
    },
    {
      date: 26, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 27, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: '機械学習のデバッグ手法', author: '藤井 健一' }
      ]
    },
    {
      date: 28, month: 8, year: 2025, isCurrentMonth: true,
      articles: []
    },
    {
      date: 29, month: 8, year: 2025, isCurrentMonth: true,
      articles: [
        { title: 'AIシステムのスケーリング', author: '西村 花子' }
      ]
    },
    {
      date: 30, month: 8, year: 2025, isCurrentMonth: true, isSaturday: true,
      articles: [
        { title: '夏のAIハッカソン振り返り', author: '川口 太郎' }
      ]
    },
    {
      date: 31, month: 8, year: 2025, isCurrentMonth: true, isSunday: true,
      articles: [
        { title: '8月のAI技術総まとめ', author: '村田 美穂' },
        { title: '次世代AIへの展望', author: '安藤 健' }
      ]
    }
  ]
};