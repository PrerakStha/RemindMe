import {create} from "zustand";

const useReminderStore = create((set) => ({
  reminders: [],
  addReminder: (reminder) =>
    set((state) => ({ reminders: [reminder, ...state.reminders] })),
  updateReminder: (id, updates) =>
    set((state) => ({
      reminders: state.reminders.map((reminder) =>
        reminder.id === id ? { ...reminder, ...updates } : reminder,
      ),
    })),
  deleteReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.filter((reminder) => reminder.id !== id),
    })),
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