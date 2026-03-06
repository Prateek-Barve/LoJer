
import { useState } from "react";
import { profileService } from "../../services/profileService";
import "./ProfileForm.css";

export default function ProfileForm() {
  const [lifeStatusDescription, setLifeStatusDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await profileService.saveProfile({
      lifeStatusDescription,
      location,
      dateOfBirth,
    });
    alert("Profile Updated!");
  };

  return (
    <div className="profile-form-wrapper">
      <h3 className="profile-title">Update Profile</h3>

      <form onSubmit={handleSubmit} className="profile-form">
        <input
          placeholder="Life Status"
          value={lifeStatusDescription}
          onChange={(e) => setLifeStatusDescription(e.target.value)}
          required
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          type="datetime-local"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}