import {ReactNode} from "react";
import {View} from "react-native";
import {styles} from "./styles";

interface IScreenLayout {
  children: ReactNode;
}

export default function ScreenLayout({children}: IScreenLayout) {
  return <View style={styles.PageLayout}>{children}</View>;
}