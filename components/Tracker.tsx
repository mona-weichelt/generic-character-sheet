import { View, Text } from "react-native";

export type TrackerData = {
  current: number;
  maximum?: number;
  label: string;
};

export type TrackerProps = {
  data: TrackerData;
};

const Tracker = ({ data }: TrackerProps) => {
  const { current, maximum, label } = data;

  return (
    <View>
      <Text>{label}</Text>
      <Text>{current}</Text>
      <Text>{maximum}</Text>
    </View>
  );
};

export default Tracker;
