import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  ComposedChart,
  Line
} from 'recharts';
import { reportsData } from '../data/mockData';
import { Download } from 'lucide-react';

export function ReportsView() {
  const totalRevenue = reportsData.reduce((sum, day) => sum + day.revenue, 0);
  const totalTickets = reportsData.reduce((sum, day) => sum + day.tickets, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Reports & Analytics
        </h2>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button className="inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Download className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">30-Day Revenue</dt>
          <dd className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">${totalRevenue.toLocaleString()}</dd>
        </div>
        <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">30-Day Tickets Sold</dt>
          <dd className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{totalTickets.toLocaleString()}</dd>
        </div>
      </div>

      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-6">Daily Sales & Revenue (Last 30 Days)</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={reportsData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.2} vertical={false} />
              <XAxis dataKey="date" stroke="#9ca3af" tick={{ fontSize: 12 }} tickMargin={10} />
              <YAxis yAxisId="left" stroke="#9ca3af" tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
                itemStyle={{ color: '#e5e7eb' }}
              />
              <Legend verticalAlign="top" height={36} />
              <Bar yAxisId="right" dataKey="tickets" name="Tickets Sold" fill="#10b981" radius={[4, 4, 0, 0]} opacity={0.8} />
              <Line yAxisId="left" type="monotone" dataKey="revenue" name="Revenue ($)" stroke="#3b82f6" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
