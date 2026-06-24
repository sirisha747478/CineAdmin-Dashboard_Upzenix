import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: 'Inception - Screen 1',
    start: new Date(new Date().setHours(10, 0, 0, 0)),
    end: new Date(new Date().setHours(12, 30, 0, 0)),
    type: 'showing'
  },
  {
    id: 2,
    title: 'Dune: Part Two - IMAX',
    start: new Date(new Date().setHours(14, 0, 0, 0)),
    end: new Date(new Date().setHours(17, 0, 0, 0)),
    type: 'showing'
  },
  {
    id: 3,
    title: 'Deadpool & Wolverine - Premiere',
    start: new Date(new Date().setDate(new Date().getDate() + 2)),
    end: new Date(new Date().setDate(new Date().getDate() + 2)),
    allDay: true,
    type: 'premiere'
  },
  {
    id: 4,
    title: 'Maintenance - Screen 3',
    start: new Date(new Date().setHours(8, 0, 0, 0)),
    end: new Date(new Date().setHours(12, 0, 0, 0)),
    type: 'maintenance'
  }
];

export function CalendarView() {
  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());

  const eventStyleGetter = (event: any) => {
    let backgroundColor = '#3b82f6'; // default blue
    if (event.type === 'premiere') backgroundColor = '#8b5cf6'; // purple
    if (event.type === 'maintenance') backgroundColor = '#ef4444'; // red

    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        opacity: 0.9,
        color: 'white',
        border: 'none',
        display: 'block'
      }
    };
  };

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Schedule & Events
        </h2>
      </div>

      <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 overflow-hidden flex flex-col min-h-[500px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ flex: 1 }}
          eventPropGetter={eventStyleGetter}
          views={['month', 'week', 'day']}
          className="dark:text-gray-200"
        />
      </div>
    </div>
  );
}
