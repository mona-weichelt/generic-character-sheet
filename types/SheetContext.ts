import { TrackerData } from "./TrackerData";

export type SheetState = {
  trackers: TrackerData[];
};

export type SheetAction =
  | { type: "Set State"; payload: SheetState }
  | { type: "Add Tracker" }
  | { type: "Delete Tracker"; payload: number }
  | {
      type: "Update Tracker";
      payload: { index: number; value: Partial<TrackerData> };
    };
