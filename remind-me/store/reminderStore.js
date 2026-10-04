import {create} from "zustand";

const useReminderStore = create((set) => ({
  reminders: [],
  addReminder: (reminder) =>
    set((state) => ({ reminders: [reminder, ...state.reminders] })),
  toggleReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, completed: !reminder.completed }
          : reminder,
      ),
    })),
}));

export default useReminderStore;