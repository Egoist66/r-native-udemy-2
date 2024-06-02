import { FC, ReactNode } from "react";
import { View, Text, GestureResponderHandlers } from "react-native";

type PrimaryButtonProps = {
  text?: string;
  events?: any 
};


export const PrimaryButton: FC<PrimaryButtonProps & {children?: ReactNode}> = ({
  text = "Primary Button",
  events,
  children
}) => {
    
  return (
    <View>
      <Text {...events}>{children || text}</Text>
    </View>
  );
};
