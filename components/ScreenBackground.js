import { View, Image, StyleSheet } from "react-native";

export default function ScreenBackground({ children }) {
  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/images/decoration-top.png")}
        style={styles.top}
      />

      <View style={styles.content}>
        {children}
      </View>

      <Image
        source={require("../assets/images/decoration-bottom.png")}
        style={styles.bottom}
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
  },

  bottom: {
    width: "100%",
    height: 75,
    resizeMode: "contain",
  },
});