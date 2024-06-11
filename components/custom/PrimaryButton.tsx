import { FC, ReactNode } from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

import { PrimaryButtonProps } from "../../types/button-primary";

export const PrimaryButton: FC<
  PrimaryButtonProps & { children?: ReactNode }
> = ({
  text = "Primary Button",
  events,
  textColor = "#000",
  style,
  children,
}) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#640233" }}
        onPress={events?.onPress}
        onPressIn={events?.onPressIn}
        onPressOut={events?.onPressOut}
        onLongPress={events?.onLongPress}
        onLayout={events?.onLayout}
        style={Platform.OS === "android" ? styles.container : styles.pressed}
      >
        <Text style={[style, { fontSize: 18 }]}>{children || text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 12,
        marginVertical: 10,
        overflow: "hidden",


    },
    container: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    pressed: {
        opacity: 0.75,
    }
});
