import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

// --- DATA PENGGUNA ---
const userData = {
  name: "M Abdul Nizham N",
  nim: "243303621284",
  major: "SISTEM INFORMASI",
  quote: "Teruslah belajar, karena hidup tak pernah berhenti mengajar.",
};
// ---------------------

const { width, height } = Dimensions.get("window");

export default function Index() {
  // Setup Animasi Background
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Membuat animasi berulang (membesar dan mengecil secara halus)
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1, // Membesar 10%
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Kembali ke ukuran normal
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [scaleAnim]);

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e2e" />

      {/* Background dengan Animasi */}
      <Animated.View
        style={[styles.headerBackground, { transform: [{ scale: scaleAnim }] }]}
      />

      {/* Membungkus konten dengan ScrollView */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.profileImageContainer}>
            {/* 
              MEMANGGIL FOTO LOKAL:
              Pastikan file fotoid.jpg ada di dalam folder: assets/images/
              Jika path folder Anda berbeda, sesuaikan letak titik-titiknya (../)
            */}
            <Image
              source={require("../../assets/images/fotoid.jpg")}
              style={styles.profilePic}
            />
            <View style={styles.profileImageAccent} />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.name}>{userData.name}</Text>
            <View style={styles.divider} />

            <Text style={styles.label}>NIM</Text>
            <Text style={styles.detailText}>{userData.nim}</Text>

            <Text style={styles.label}>JURUSAN</Text>
            <Text style={styles.detailText}>{userData.major}</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.quote}>"{userData.quote}"</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f2f2f6",
  },
  headerBackground: {
    position: "absolute",
    top: -50,
    left: -50,
    right: -50,
    height: height * 0.45,
    backgroundColor: "#1e1e2e",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50, // Memberikan ruang agar bisa discroll dengan nyaman
  },
  card: {
    width: width * 0.9,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    shadowColor: "#1e1e2e",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
    position: "relative",
    marginTop: "20%",
    marginBottom: 40, // Jarak bawah agar aman saat di-scroll
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#ffffff",
    zIndex: 1,
  },
  profileImageAccent: {
    position: "absolute",
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#3a86ff",
    zIndex: 0,
  },
  infoContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e1e2e",
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  divider: {
    height: 3,
    width: 60,
    backgroundColor: "#3a86ff",
    borderRadius: 1.5,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginTop: 15,
  },
  detailText: {
    fontSize: 18,
    color: "#444",
    fontWeight: "500",
    textAlign: "center",
  },
  footer: {
    width: "100%",
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 15,
    lineHeight: 22,
  },
});
