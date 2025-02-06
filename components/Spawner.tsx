import { Pressable, Text } from "react-native";

type PropType = {
  [x: string]: any;
};

export const Spawner = (props: PropType) => {
  return (
    <Pressable {...props} className="p-32">
      <Text className="text-center">Add a tracker!</Text>
    </Pressable>
  );
};
