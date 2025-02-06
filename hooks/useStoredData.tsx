import { SheetState } from "@/types/SheetContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const empty = { trackers: [] };

export const useLocalStorage = (key: string) => {
  const getData = async (): Promise<SheetState> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : empty;
    } catch (e) {
      // error reading value
      return empty;
    }
  };

  const storeData = async (value: SheetState) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return { getData, storeData };
};
