import "./ReminderCard.css";

const formatDate = (date) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;

  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const ReminderCard = ({
  title = "Untitled reminder",
  date,
  time,
  note,
  category = "Personal",
  completed = false,
  onToggleComplete,
}) => {
  return (
    <article className={`reminder-card${completed ? " is-completed" : ""}`}>
      <div className="reminder-card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="4.5" y="6" width="15" height="14" rx="3" />
          <path d="M8 4v4M16 4v4M4.5 10h15M8 14h3" />
        </svg>
      </div>

      <div className="reminder-card-content">
        <div className="reminder-card-topline">
          <span className="reminder-card-category">{category}</span>
          {onToggleComplete ? (
            <button
              className="reminder-card-complete"
              type="button"
              onClick={onToggleComplete}
              aria-label={completed ? "Mark reminder incomplete" : "Mark reminder complete"}
              aria-pressed={completed}
            >
              {completed && (
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="m3.5 8 3 3 6-6" />
                </svg>
              )}
            </button>
          ) : (
            <span className="reminder-card-status-dot" aria-hidden="true" />
          )}
        </div>

        <h2 className="reminder-card-title">{title}</h2>
        {note && <p className="reminder-card-note">{note}</p>}

        {(date || time) && (
          <div className="reminder-card-details">
            {date && (
              <span className="reminder-card-detail">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="2.5" y="3.5" width="11" height="10" rx="2" />
                  <path d="M5.5 2v3M10.5 2v3M2.5 6.5h11" />
                </svg>
                {formatDate(date)}
              </span>
            )}
            {time && (
              <span className="reminder-card-detail">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="5.5" />
                  <path d="M8 4.5V8l2.5 1.5" />
                </svg>
                {time}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ReminderCard;
