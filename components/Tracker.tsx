import { TrackerData } from "@/types/TrackerData";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export type TrackerProps = {
  data: TrackerData;
};

const Tracker = ({ data }: TrackerProps) => {
  const [current, setCurrent] = useState<string>(data.current.toString());
  const [maximum, setMaximum] = useState<string | undefined>(
    data.maximum?.toString()
  );
  const [label, setLabel] = useState<string>(data.label);

  return (
    <View>
      <Text>{label}</Text>
      <View className="flex-row">
        <TextInput
          className="flex-1"
          value={current.toString()}
          onChangeText={setCurrent}
        />
        {maximum && (
          <>
            <Text>/</Text>
            <TextInput
              className="flex-1"
              value={maximum.toString()}
              onChangeText={setMaximum}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Tracker;
