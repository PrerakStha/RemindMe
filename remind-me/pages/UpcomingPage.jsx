import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ReminderCard from "../components/ReminderCard";

const getTodayValue = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
};

const UpcomingPage = () => {
  const { reminders, toggleReminder } = useOutletContext();
  const [todayValue] = useState(getTodayValue);
  const upcomingReminders = reminders.filter((reminder) => reminder.date > todayValue);

  return (
    <main className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold tracking-wide text-violet-600">PLAN AHEAD</p>
        <h1 className="m-0 text-3xl font-bold tracking-tight text-slate-900">Upcoming</h1>
        <p className="mb-0 mt-2 text-slate-500">Your reminders for the days ahead.</p>
      </div>

      {upcomingReminders.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {upcomingReminders.map((reminder) => (
            <ReminderCard
              key={reminder.id}
              {...reminder}
              onToggleComplete={() => toggleReminder(reminder.id)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-violet-200 bg-white px-6 py-14 text-center">
          <div aria-hidden="true" className="mb-3 text-3xl">☀</div>
          <h2 className="m-0 text-lg font-semibold text-slate-800">No upcoming reminders</h2>
          <p className="mb-5 mt-2 text-sm text-slate-500">Anything dated after today will appear here.</p>
          <Link className="font-semibold text-violet-700 underline-offset-4 hover:underline" to="/add">
            Add a reminder
          </Link>
        </div>
      )}
    </main>
  );
};

export default UpcomingPage;
