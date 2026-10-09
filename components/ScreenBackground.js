import { View, Image, StyleSheet } from "react-native";
import { spacing } from "../constants/Spacing";
export default function ScreenBackground({ children }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/decoration-top.png")}
        style={styles.top}
        accessible={false}
        importantForAccessibility="no"
      />

      <View style={styles.content}>{children}</View>

      <Image
        source={require("../assets/images/decoration-bottom.png")}
        style={styles.bottom}
        accessible={false}
        importantForAccessibility="no"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF1D2",
  },

  content: {
    flex: 1,
  },

  top: {
    width: "100%",
    height: 75,
    resizeMode: "contain",
    marginTop: 30,
  },

  bottom: {
    width: "100%",
    height: 75,
    resizeMode: "contain",
    marginBottom: 30,
  },
});
