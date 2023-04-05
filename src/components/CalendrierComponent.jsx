import { useState } from 'react';
import Calendar from 'react-calendar';
import '../../src/styles/calendrier.css';

function CalendrierComponent() {
  const [date, setDate] = useState(new Date());

  const events = [
    { date: '2023-04-07', type: 'registration', name: 'Course A' },
    { date: '2023-04-20', type: 'start', name: 'Course A' },
    { date: '2023-06-15', type: 'end', name: 'Course A' },
    { date: '2023-06-18', type: 'exam', name: 'Course A' },
    { date: '2023-05-01', type: 'registration', name: 'Course B' },
    { date: '2023-05-15', type: 'start', name: 'Course B' },
    { date: '2023-08-01', type: 'end', name: 'Course B' },
    { date: '2023-08-05', type: 'exam', name: 'Course B' },
  ];

  const tileClassName = ({ date }) => {
    const event = events.find((event) => event.date === date.toISOString().slice(0, 10));

    if (event) {
      switch (event.type) {
        case 'registration':
          return 'registration-event';
        case 'start':
          return 'start-event';
        case 'end':
          return 'end-event';
        case 'exam':
          return 'exam-event';
        default:
          return null;
      }
    }

    return null;
  };

const tileContent = ({ date, view }) => {
  if (view === 'month') {
    const event = events.find((event) => event.date === date.toISOString().slice(0, 10));

    if (event) {
      return (
        <div className={`${event.type}-event-content event-content`}>
          {event.name}
        </div>
      );
    }
  }
};

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} tileClassName={tileClassName} tileContent={tileContent} />
      </div>
    </div>
  );
}

export default CalendrierComponent;

