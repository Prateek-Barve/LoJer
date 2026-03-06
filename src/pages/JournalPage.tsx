
import { useEffect, useState } from "react";
import { journalService } from "../services/journalService";
import type { JournalEntry } from "../types/journal";
import JournalList from "../components/journal/JournalList";
import "./JournalPage.css";

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);

  const loadEntries = async (currentLimit: number) => {
    setLoading(true);
    const data = await journalService.getAll(currentLimit);
    setEntries(data);
    setLoading(false);
  };

  useEffect(() => {
    loadEntries(limit);
  }, [limit]);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 5);
  };

  return (
    <div className="journal-page">
      <div className="journal-container">
        <h2 className="journal-title">NPP's Whining Logs</h2>

        <JournalList entries={entries} />

        <div className="pagination-section">
          <button
            className="load-more-btn"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
}