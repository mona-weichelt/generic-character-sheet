import Tracker, { TrackerData } from "@/components/Tracker";
import { View } from "react-native";

const sampleData: TrackerData[] = [
  { current: 3, label: "victories" },
  { current: 1, maximum: 20, label: "recoveries" },
  { current: 0, maximum: 2, label: "heroic ability" },
];

export default function Index() {
  return (
    <View className="flex-1">
      {sampleData.map((data) => (
        <Tracker data={data} />
      ))}
    </View>
  );
}
