import { Navigate, useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import useReminderStore from "../store/reminderStore";
import "./AddPage.css";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const reminder = useReminderStore((state) =>
    state.reminders.find((item) => item.id === id),
  );
  const updateReminder = useReminderStore((state) => state.updateReminder);

  if (!reminder) return <Navigate to="/" replace />;

  const handleSubmit = (values) => {
    updateReminder(id, values);
    navigate("/");
  };

  return (
    <main className="add-reminder-page">
      <div className="add-reminder-heading">
        <span className="add-reminder-eyebrow">MAKE IT HAPPEN</span>
        <h1>Edit reminder</h1>
        <p>Update the details whenever plans change.</p>
      </div>
      <Form
        key={reminder.id}
        defaultValues={reminder}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/")}
        submitLabel="Save changes"
      />
    </main>
  );
};

export default EditPage;