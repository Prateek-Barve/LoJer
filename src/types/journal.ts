export interface JournalEntry {
  userId: string;
  createdAt: string;
  entryId: string;
  message: string;
  isLifeChanging: boolean;
  lifeStatusDescription: string;
  location: string;
  ageAtTimeOfPost: number;
}