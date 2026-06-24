import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { MoviesTable } from './pages/MoviesTable';
import { ReportsView } from './pages/ReportsView';
import { CalendarView } from './pages/CalendarView';
import { KanbanView } from './pages/KanbanView';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="movies" element={<MoviesTable />} />
            <Route path="reports" element={<ReportsView />} />
            <Route path="calendar" element={<CalendarView />} />
            <Route path="kanban" element={<KanbanView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
