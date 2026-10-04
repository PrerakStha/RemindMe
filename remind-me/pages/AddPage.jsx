import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import useReminderStore from "../store/reminderStore";
import "./AddPage.css";

const AddPage = () => {
  const addReminder = useReminderStore((state) => state.addReminder);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    addReminder({
      id: crypto.randomUUID(),
      ...values,
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
      <Form onSubmit={handleSubmit} onCancel={() => navigate("/")} />
    </main>
  );
};

export default AddPage;
