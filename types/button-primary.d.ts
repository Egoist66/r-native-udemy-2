export type PrimaryButtonProps = {
    text?: string;
    textColor?: string;
    style?: StyleProp<ViewStyle>;
    events?: {
      onPress?: (event: GestureResponderEvent) => void;
      onPressIn?: (event: GestureResponderEvent) => void;
      onPressOut?: (event: GestureResponderEvent) => void;
      onLongPress?: (event: GestureResponderEvent) => void;
      onLayout?: (event: LayoutChangeEvent) => void;
      onAccessibilityAction?: (event: AccessibilityActionEvent) => void;
      onAccessibilityEscape?: (event: AccessibilityActionEvent) => void;
      onAccessibilityTap?: (event: AccessibilityActionEvent) => void;
      onMagicTap?: (event: GestureResponderEvent) => void;
      onMoveShouldSetResponder?: (event: GestureResponderEvent) => boolean;
      onMoveShouldSetResponderCapture?: (event: GestureResponderEvent) => boolean;
      onResponderEnd?: (event: GestureResponderEvent) => void;
      onResponderGrant?: (event: GestureResponderEvent) => void;
      onResponderMove?: (event: GestureResponderEvent) => void;
      onResponderReject?: (event: GestureResponderEvent) => void;
      onResponderRelease?: (event: GestureResponderEvent) => void;
      onResponderStart?: (event: GestureResponderEvent) => void;
      onResponderTerminate?: (event: GestureResponderEvent) => void;
      onResponderTerminationRequest?: (event: GestureResponderEvent) => boolean;
      onStartShouldSetResponder?: (event: GestureResponderEvent) => boolean;
      onStartShouldSetResponderCapture?: (
        event: GestureResponderEvent
      ) => boolean;
      onTouchCancel?: (event: GestureResponderEvent) => void;
      onTouchEnd?: (event: GestureResponderEvent) => void;
      onTouchEndCapture?: (event: GestureResponderEvent) => void;
      onTouchMove?: (event: GestureResponderEvent) => void;
      onTouchStart?: (event: GestureResponderEvent) => void;
    };
  };