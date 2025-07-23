import { useEffect, useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'
import { august2025Static } from './data/august2025Static'
import { loadCalendarData } from './utils/calendarDataLoader'
import type { CalendarMonth } from './types/calendar'

function App() {
  const [calendarData, setCalendarData] = useState<CalendarMonth>(august2025Static);

  useEffect(() => {
    // Load data from YAML
    loadCalendarData('/ai-native-summer-calendar/data/august2025.yaml')
      .then(data => {
        setCalendarData(data);
      })
      .catch(error => {
        console.error('Failed to load YAML data, using static data:', error);
      });
  }, []);

  return (
    <>
      <div className="summer-gradient"></div>
      <Calendar data={calendarData} />
    </>
  )
}

export default App
