import { View, Text, Pressable, StyleSheet, ScrollView, Linking, Platform, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/Color";
import { openingHours, contactInfo } from "../data/Data";

const contactRows = [
  { icon: "location", text: contactInfo.address, onPress: openMap },
  { icon: "call", text: contactInfo.phone },
  { icon: "mail", text: contactInfo.email },
];
  function openMap() {
   const latitude = contactInfo.latitude;
   const longitude= contactInfo.longitude;

   const url = Platform.select({
    ios:
        `maps:0,0?q=${latitude},${longitude}`,

    android:
        `geo:${latitude},${longitude}`

   });
   Alert.alert(
    "Hitta till Abuelita",
    "Vill du öppna adressen i kartappen?",
    [
      { text: "Avbryt", style: "cancel"},
      { text: "Öppna karta", onPress: () => Linking.openURL(url) },
    ]
   );
  }

export default function AboutUs() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Öppettider</Text>

      <View style={styles.card}>
        {openingHours.map((item, index) => {
          const isLast = index === openingHours.length - 1;

          return (
            <View
              key={item.day}
              style={[styles.row, !isLast && styles.divider]}>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={[styles.hours, !item.hours && styles.closed]}>
                {item.hours ?? "Stängt"}
              </Text>
            </View>
          );
        })}
      </View>

      <Text style={[styles.title, styles.sectionTitle]}>Kontakt</Text>

      <View style={styles.card}>
        {contactRows.map((item, index) => {
          const isLast = index === contactRows.length - 1;

          return (
            <Pressable
              key={item.icon}
              onPress={item.onPress}
              style={[styles.contactRow, !isLast && styles.divider]}>
              <Ionicons name={item.icon} size={22} color={colors.pink} />
              <Text style={styles.contactText}>{item.text}</Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.cream,
  },

  container: {
    padding: 24,
    marginTop: 24,
  },

  title: {
    color: colors.turquoise,
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 24,
  },

  sectionTitle: {
    marginTop: 40,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },

  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.turquoise,
  },

  day: {
    color: colors.darkGreen,
    fontSize: 17,
    fontWeight: "600",
  },

  hours: {
    color: colors.turquoise,
    fontSize: 17,
    fontWeight: "bold",
  },

  closed: {
    color: colors.red,
    fontWeight: "700",
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },

  contactText: {
    flex: 1,
    color: colors.darkGreen,
    fontSize: 17,
  },
});
