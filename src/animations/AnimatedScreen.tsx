import { Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function AnimatedScreen({ children }: any) {
    const opacity = useRef(new Animated.Value(0)).current;
    const translate = useRef(new Animated.Value(20)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(translate, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <Animated.View
            style={{
                flex: 1,
                opacity,
                transform: [{ translateY: translate }],
            }}
        >
            {children}
        </Animated.View>
    );
}