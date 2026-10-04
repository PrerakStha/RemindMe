import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./AddPage.css";

const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const AddPage = () => {
  const { addReminder } = useOutletContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(getToday);
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleSubmit = (event) => {
    event.preventDefault();

    addReminder({
      id: crypto.randomUUID(),
      title: title.trim(),
      date,
      time,
      note: note.trim(),
      category,
      completed: false,
    });
    navigate("/");
  };

  return (
    <main className="add-reminder-page">
      <div className="add-reminder-heading">
        <span className="add-reminder-eyebrow">MAKE IT HAPPEN</span>
        <h1>Add a reminder</h1>
        <p>Give yourself a nudge at just the right time.</p>
      </div>

      <form className="add-reminder-form" onSubmit={handleSubmit}>
        <label className="add-reminder-field add-reminder-field-wide">
          <span>What do you need to remember?</span>
          <input
            autoFocus
            required
            maxLength={100}
            type="text"
            placeholder="e.g. Pick up groceries"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <div className="add-reminder-fields-row">
          <label className="add-reminder-field">
            <span>Date</span>
            <input
              required
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>

          <label className="add-reminder-field">
            <span>Time <span className="add-reminder-optional">(optional)</span></span>
            <input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </label>
        </div>

        <div className="add-reminder-fields-row">
          <label className="add-reminder-field">
            <span>Category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option>Personal</option>
              <option>Work</option>
              <option>Health</option>
              <option>Other</option>
            </select>
          </label>

          <label className="add-reminder-field">
            <span>Note <span className="add-reminder-optional">(optional)</span></span>
            <input
              maxLength={160}
              type="text"
              placeholder="Add a little detail"
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </label>
        </div>

        <div className="add-reminder-actions">
          <button className="add-reminder-submit" type="submit">
            <span aria-hidden="true">＋</span>
            Add reminder
          </button>
          <button className="add-reminder-cancel" type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddPage;
