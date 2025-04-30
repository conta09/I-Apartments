// app/page.jsx
"use client";
import { useState } from 'react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [weeklyBudget] = useState(500);
  const [currentSpending] = useState(327);
  const [savings] = useState(2450);
  
  const expenses = [
    { id: 1, name: 'Groceries', amount: 75, date: '2023-08-15' },
    { id: 2, name: 'Fuel', amount: 45, date: '2023-08-14' },
    { id: 3, name: 'Dining', amount: 60, date: '2023-08-13' },
  ];

  // SVG Icons
  const MenuIcons = {
    budget: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    expenses: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75V17.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    analytics: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    menu: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
    close: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <button
        className="lg:hidden fixed top-4 right-4 p-2 z-50 bg-purple-600 rounded-lg text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? MenuIcons.close : MenuIcons.menu}
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out z-40`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-600">FiscaFlow</h1>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                {MenuIcons.budget}
                <span>Budget Overview</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                {MenuIcons.expenses}
                <span>Expenses</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                {MenuIcons.analytics}
                <span>Analytics</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Weekly Budget Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium">Weekly Budget</h3>
            <div className="mt-4">
              <span className="text-3xl font-bold text-purple-600">${weeklyBudget}</span>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-purple-600 rounded-full"
                  style={{ width: `${(currentSpending / weeklyBudget) * 100}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">${weeklyBudget - currentSpending} remaining</p>
            </div>
          </div>

          {/* Savings Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium">Total Savings</h3>
            <div className="mt-4">
              <span className="text-3xl font-bold text-green-600">${savings}</span>
              <p className="mt-2 text-sm text-gray-500">+12% from last month</p>
            </div>
          </div>

          {/* Recent Expenses Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2 lg:col-span-1">
            <h3 className="text-gray-500 text-sm font-medium">Recent Expenses</h3>
            <div className="mt-4 space-y-4">
              {expenses.map((expense) => (
                <div key={expense.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{expense.name}</p>
                    <p className="text-sm text-gray-500">{expense.date}</p>
                  </div>
                  <span className="text-red-600 font-medium">-${expense.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spending Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium mb-4">Weekly Spending</h3>
          <div className="h-64 bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-center h-full text-gray-400">
              Spending chart placeholder
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}