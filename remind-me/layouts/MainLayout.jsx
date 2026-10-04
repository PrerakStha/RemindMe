import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders((currentReminders) => [reminder, ...currentReminders]);
  };

  const toggleReminder = (id) => {
    setReminders((currentReminders) =>
      currentReminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, completed: !reminder.completed }
          : reminder,
      ),
    );
  };

  return (
    <>
      <Header />
      <section className="py-24 container mx-auto px-4">
        <Outlet context={{ reminders, addReminder, toggleReminder }} />
      </section>
    </>
  );
};

export default MainLayout;