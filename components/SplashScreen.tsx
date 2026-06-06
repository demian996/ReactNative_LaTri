import LottieView from "lottie-react-native";

import LaTri from "../assets/lottie/LaTri.json";

interface SplashScreenProps {
    onAnimationFinish?: () => void;
}

export default function SplashScreen({ onAnimationFinish }: SplashScreenProps) {
    return (
        <LottieView
            source={LaTri}
            autoPlay
            resizeMode="cover"
            loop={false}
            onAnimationFinish={onAnimationFinish}
            style={{
                flex: 1,
                width: "100%",
                height: "100%"
            }}
        />
    );
}
