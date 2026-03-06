
import type { JournalEntry } from "../../types/journal";
import JournalItem from "./JournalItem";
import "./JournalList.css";

interface Props {
  entries: JournalEntry[];
}

export default function JournalList({ entries }: Props) {
  return (
    <div className="journal-list">
      {entries.length === 0 && (
        <div className="empty-state">
          No journals yet. Start writing your thoughts ✨
        </div>
      )}

      {entries.map((entry, index) => (
        <div
          key={entry.entryId}
          className="journal-item-wrapper"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <JournalItem entry={entry} />
        </div>
      ))}
    </div>
  );
}