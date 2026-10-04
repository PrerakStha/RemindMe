import { Link, useOutletContext } from "react-router-dom";
import ReminderCard from "../components/ReminderCard";

const HomePage = () => {
  const { reminders, toggleReminder } = useOutletContext();

  return (
    <main className="mx-auto max-w-5xl">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-wide text-violet-600">YOUR DAY, AT A GLANCE</p>
          <h1 className="m-0 text-3xl font-bold tracking-tight text-slate-900">Today</h1>
          <p className="mb-0 mt-2 text-slate-500">
            {reminders.length === 0
              ? "A little reminder can make your day easier."
              : `${reminders.length} ${reminders.length === 1 ? "reminder" : "reminders"} to keep in mind.`}
          </p>
        </div>
        <Link
          className="rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white no-underline transition hover:bg-violet-700"
          to="/add"
        >
          + New reminder
        </Link>
      </div>

      {reminders.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {reminders.map((reminder) => (
            <ReminderCard
              key={reminder.id}
              {...reminder}
              onToggleComplete={() => toggleReminder(reminder.id)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-violet-200 bg-white px-6 py-14 text-center">
          <div aria-hidden="true" className="mb-3 text-3xl">✦</div>
          <h2 className="m-0 text-lg font-semibold text-slate-800">Nothing on your list yet</h2>
          <p className="mb-5 mt-2 text-sm text-slate-500">Add your first reminder and it’ll show up here.</p>
          <Link className="font-semibold text-violet-700 underline-offset-4 hover:underline" to="/add">
            Create a reminder
          </Link>
        </div>
      )}
    </main>
  );
};

export default HomePage;
