import axiosClient from "./axiosClient";
import type { JournalEntry } from "../types/journal";

export const journalService = {
  createEntry: async (data: {
    message: string;
    isLifeChanging: boolean;
  }) => {
    const response = await axiosClient.post("/journal", data);
    return response.data;
  },

  getAll: async (limit: number) => {
    const response = await axiosClient.get(
      `/journal?limit=${limit}`
    );
    return response.data as JournalEntry[];
  },

  getByYear: async (year: number, limit: number) => {
    const response = await axiosClient.get(
      `/journal/year/${year}?limit=${limit}`
    );
    return response.data as JournalEntry[];
  },
};