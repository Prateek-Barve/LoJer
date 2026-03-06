import axiosClient from "./axiosClient";
import type { Profile } from "../types/profile";

export const profileService = {
  getProfile: async () => {
    const response = await axiosClient.get("/profile");
    return response.data as Profile;
  },

  saveProfile: async (profile: Profile) => {
    const response = await axiosClient.post("/profile", profile);
    return response.data;
  },
};