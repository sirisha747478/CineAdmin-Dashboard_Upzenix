export const revenueData = [
  { name: 'Mon', revenue: 4000, tickets: 240 },
  { name: 'Tue', revenue: 3000, tickets: 139 },
  { name: 'Wed', revenue: 2000, tickets: 980 },
  { name: 'Thu', revenue: 2780, tickets: 390 },
  { name: 'Fri', revenue: 1890, tickets: 480 },
  { name: 'Sat', revenue: 2390, tickets: 380 },
  { name: 'Sun', revenue: 3490, tickets: 430 },
];

export const reportsData = Array.from({ length: 30 }).map((_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return {
    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    revenue: Math.floor(Math.random() * 5000) + 1000,
    tickets: Math.floor(Math.random() * 500) + 100,
  };
});

export const movieData = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', ticketsSold: 12500, status: 'Showing', rating: 8.8 },
  { id: 2, title: 'The Dark Knight', genre: 'Action', ticketsSold: 25000, status: 'Showing', rating: 9.0 },
  { id: 3, title: 'Interstellar', genre: 'Sci-Fi', ticketsSold: 18000, status: 'Ended', rating: 8.6 },
  { id: 4, title: 'Dune: Part Two', genre: 'Sci-Fi', ticketsSold: 15400, status: 'Showing', rating: 8.9 },
  { id: 5, title: 'Avatar: The Way of Water', genre: 'Sci-Fi', ticketsSold: 22000, status: 'Ended', rating: 7.6 },
  { id: 6, title: 'Oppenheimer', genre: 'Drama', ticketsSold: 19500, status: 'Ended', rating: 8.4 },
  { id: 7, title: 'Deadpool & Wolverine', genre: 'Action', ticketsSold: 10200, status: 'Upcoming', rating: 0 },
  { id: 8, title: 'Inside Out 2', genre: 'Animation', ticketsSold: 14000, status: 'Showing', rating: 8.2 },
];

export const initialKanbanData = {
  columns: {
    'todo': { id: 'todo', title: 'Upcoming Releases', taskIds: ['task-1', 'task-2', 'task-3'] },
    'in-progress': { id: 'in-progress', title: 'Now Showing', taskIds: ['task-4', 'task-5'] },
    'done': { id: 'done', title: 'Ended', taskIds: ['task-6'] },
  },
  tasks: {
    'task-1': { id: 'task-1', content: 'Deadpool & Wolverine Premiere Prep' },
    'task-2': { id: 'task-2', content: 'Update posters for Joker: Folie à Deux' },
    'task-3': { id: 'task-3', content: 'Gladiator II Marketing Campaign' },
    'task-4': { id: 'task-4', content: 'Dune: Part Two IMAX scheduling' },
    'task-5': { id: 'task-5', content: 'Inside Out 2 Family Promos' },
    'task-6': { id: 'task-6', content: 'Oppenheimer Final Run' },
  },
  columnOrder: ['todo', 'in-progress', 'done'],
};
