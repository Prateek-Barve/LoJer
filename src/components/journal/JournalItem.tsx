
import type { JournalEntry } from "../../types/journal";
import "./JournalItem.css";

interface Props {
  entry: JournalEntry;
}

export default function JournalItem({ entry }: Props) {
  return (
    <div className="journal-card">
      <div className="journal-timestamp">
        {new Date(entry.createdAt).toLocaleString()}
      </div>

      <div className="journal-message">
        {entry.message}
      </div>

      {entry.isLifeChanging && (
        <div className="life-badge">
          ✨ Life Changing
        </div>
      )}
    </div>
  );
}