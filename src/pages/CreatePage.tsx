
import { useState } from "react";
import { journalService } from "../services/journalService";
import ProfileForm from "../components/profile/ProfileForm";
import "./CreatePage.css";

export default function CreatePage() {
  const [message, setMessage] = useState("");
  const [isLifeChanging, setIsLifeChanging] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await journalService.createEntry({
      message,
      isLifeChanging,
    });
    setMessage("");
    // alert("Journal Created!");
  };

  return (
    <div className="create-page">
      <div className="create-container">
        <h2 className="create-title">Whine here now!</h2>

        <form onSubmit={handleSubmit} className="journal-form">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          />

          <div className="checkbox-row">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={isLifeChanging}
                onChange={(e) => setIsLifeChanging(e.target.checked)}
              />
              <span className="checkmark"></span>
              <span className="checkbox-text">Life Changing</span>
            </label>
          </div>

          <button type="submit">Save Journal</button>
        </form>

        <div className="divider"></div>

        <div className="profile-section">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}