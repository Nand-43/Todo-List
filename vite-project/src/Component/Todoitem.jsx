import styles from "../Component/form.module.css"

export default function TodoItem({ index, item, onDelete, onToggleDone }) {
  return (
    <div
      style={{
        backgroundColor: item.done ? "#90EE90" : "#FF6961", // green if done, red if pending
        width: "40%",
        borderRadius: "10px",
        border: "1px solid white",
        margin: "10px auto",
        listStyle: "none",
        padding: "10px",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "left"
      }}
    >
      <span
        style={{
          textDecoration: item.done ? "line-through" : "none",
        }}
      >
        {index + 1}. {item.text}
      </span>

      <div>
        <button 
        className={styles.done}
        onClick={() => onToggleDone(index)}>
          {item.done ? "Undo" : "Done"}
        </button>
        <button
        className={styles.delete}
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
