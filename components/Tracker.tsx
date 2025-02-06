import { useSheetContext } from "@/hooks/useSheetContext";
import { TrackerData } from "@/types/TrackerData";
import { Button, Text, TextInput, View } from "react-native";

export type TrackerProps = {
  data: TrackerData;
  index: number;
  [x: string]: any;
};

const Tracker = (props: TrackerProps) => {
  const { data, index } = props;
  const { dispatch } = useSheetContext();
  return (
    <View {...props}>
      <View className="flex-row justify-between">
        <Text>{data.label}</Text>
        <Button
          title="X"
          onPress={() => dispatch({ type: "Delete Tracker", payload: index })}
        />
      </View>
      <View className="flex-row">
        <TextInput
          className="flex-1"
          value={data.current.toString()}
          keyboardType="number-pad"
          onChangeText={(text) =>
            dispatch({
              type: "Update Tracker",
              payload: { index, value: { current: parseInt(text) } },
            })
          }
        />
        {data.maximum && (
          <>
            <Text>/</Text>
            <TextInput
              className="flex-1"
              value={data.maximum.toString()}
              keyboardType="number-pad"
              onChangeText={(text) =>
                dispatch({
                  type: "Update Tracker",
                  payload: { index, value: { maximum: parseInt(text) } },
                })
              }
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Tracker;
