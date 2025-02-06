import { TrackerData } from "./TrackerData";

export type SheetState = {
  trackers: TrackerData[];
};

export type SheetAction =
  | { type: "Set State"; payload: SheetState }
  | { type: "Add Tracker" };
