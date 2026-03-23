import { attorneys } from "@/data/attorneys";

export function getAttorneyById(attorneyId: string) {
  console.log("attorneyId", attorneyId);
  return attorneys.find((attorney) => attorney._id === attorneyId);
}
