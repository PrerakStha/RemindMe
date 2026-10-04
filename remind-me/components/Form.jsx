import { useForm } from "react-hook-form";

const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const Form = ({
  defaultValues,
  onSubmit,
  onCancel,
  submitLabel = "Add reminder",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues ?? {
      title: "",
      date: getToday(),
      time: "",
      category: "Personal",
      note: "",
    },
  });

  const submitForm = (values) => {
    return onSubmit({
      ...values,
      title: values.title.trim(),
      note: values.note.trim(),
    });
  };

  return (
    <form className="add-reminder-form" onSubmit={handleSubmit(submitForm)} noValidate>
      <label className="add-reminder-field add-reminder-field-wide">
        <span>What do you need to remember?</span>
        <input
          autoFocus
          type="text"
          placeholder="e.g. Pick up groceries"
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? "reminder-title-error" : undefined}
          {...register("title", {
            required: "Enter a reminder title.",
            validate: (value) => value.trim().length > 0 || "Enter a reminder title.",
            maxLength: {
              value: 100,
              message: "Use 100 characters or fewer.",
            },
          })}
        />
        {errors.title && (
          <span className="add-reminder-error" id="reminder-title-error" role="alert">
            {errors.title.message}
          </span>
        )}
      </label>

      <div className="add-reminder-fields-row">
        <label className="add-reminder-field">
          <span>Date</span>
          <input
            type="date"
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "reminder-date-error" : undefined}
            {...register("date", { required: "Choose a date." })}
          />
          {errors.date && (
            <span className="add-reminder-error" id="reminder-date-error" role="alert">
              {errors.date.message}
            </span>
          )}
        </label>

        <label className="add-reminder-field">
          <span>
            Time <span className="add-reminder-optional">(optional)</span>
          </span>
          <input type="time" {...register("time")} />
        </label>
      </div>

      <div className="add-reminder-fields-row">
        <label className="add-reminder-field">
          <span>Category</span>
          <select {...register("category")}>
            <option>Personal</option>
            <option>Work</option>
            <option>Health</option>
            <option>Other</option>
          </select>
        </label>

        <label className="add-reminder-field">
          <span>
            Note <span className="add-reminder-optional">(optional)</span>
          </span>
          <input
            type="text"
            placeholder="Add a little detail"
            {...register("note", {
              maxLength: {
                value: 160,
                message: "Use 160 characters or fewer.",
              },
            })}
          />
          {errors.note && (
            <span className="add-reminder-error" role="alert">
              {errors.note.message}
            </span>
          )}
        </label>
      </div>

      <div className="add-reminder-actions">
        <button className="add-reminder-submit" type="submit" disabled={isSubmitting}>
          {submitLabel === "Add reminder" && <span aria-hidden="true">＋</span>}
          {submitLabel}
        </button>
        <button className="add-reminder-cancel" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;