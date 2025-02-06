import Tracker from "@/components/Tracker";
import { useSheetContext } from "@/hooks/useSheetContext";
import { useLocalStorage } from "@/hooks/useStoredData";
import { useEffect } from "react";
import { Button, ScrollView, View } from "react-native";

export default function Index() {
  const { getData, storeData } = useLocalStorage("character-sheet");
  const { state, dispatch } = useSheetContext();

  useEffect(() => {
    getData().then((value) => dispatch({ type: "Set State", payload: value }));
  }, []);

  useEffect(() => {
    storeData(state);
  }, [state]);

  return (
    <ScrollView className="flex-1">
      {state.trackers.map((tracker) => (
        <Tracker data={tracker} key={tracker.id} />
      ))}
      <Button
        title="Add tracker!"
        onPress={() => dispatch({ type: "Add Tracker" })}
      />
    </ScrollView>
  );
}
