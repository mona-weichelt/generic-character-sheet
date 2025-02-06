import { Spawner } from "@/components/Spawner";
import Tracker from "@/components/Tracker";
import { useSheetContext } from "@/hooks/useSheetContext";
import { useLocalStorage } from "@/hooks/useStoredData";
import { useEffect } from "react";
import { Button, ScrollView, View, Text } from "react-native";

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
    <ScrollView
      className="flex-1"
      stickyHeaderIndices={[0]}
      contentContainerClassName="gap-8"
    >
      <View className="bg-green-400 p-8">
        <Text>Header</Text>
      </View>
      {state.trackers.map((tracker, index) => (
        <Tracker
          className="mx-8 pb-2 border-b"
          data={tracker}
          index={index}
          key={tracker.id}
        />
      ))}
      <Spawner onPress={() => dispatch({ type: "Add Tracker" })} />
    </ScrollView>
  );
}
