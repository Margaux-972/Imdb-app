import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "#393939", height: 50, padding: 10 }}>
          <FontAwesome6 name="imdb" size={30} color="white" />
        </View>
        <View style={{ backgroundColor: "#212121" }}>
          <Text style={{ color: "white", padding: 10 }}>Interstellar</Text>
          <Text style={{ color: "#AAAAAA", padding: 10 }}>
            2014 PG-13 2h49min Adventure, Drama, Sci-Fi
          </Text>
          <View style={{ flexDirection: "row", padding: 10, gap: 10 }}>
            <Image
              source={require("./assets/imgs/movie.jpg")}
              style={{ height: 150, width: 100 }}
              resizeMode="cover"
            />
            <View
              style={{
                flex: 1,
                gap: 15,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", lineHeight: 20 }}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <Pressable
                style={{
                  borderRadius: 5,
                  width: "95%",
                  backgroundColor: "#0277BD",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>+ ADD TO WATCHLIST</Text>
              </Pressable>
            </View>
          </View>
          {/* Ici on aura la view en display row pour les icones  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 10,
            }}
          >
            <View style={{ alignItems: "center", flex: 1 }}>
              <AntDesign name="star" size={24} color="#E6B91E" />
              <Text style={{ color: "white" }}>8.6/10</Text>
              <Text style={{ color: "#AAAAAA" }}>1.1M</Text>
            </View>
            <View style={{ alignItems: "center", flex: 1 }}>
              <FontAwesome name="star-o" size={24} color="white" />
              <Text style={{ color: "white" }}>RATE THIS</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <AntDesign name="check-square" size={24} color="green" />
              <Text style={{ color: "white" }}>Metascore</Text>
              <Text style={{ color: "#AAAAAA" }}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View
          style={{ backgroundColor: "#212121", marginTop: 20, padding: 10 }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Top Billed Cast</Text>
            <Text style={{ color: "#0277BD" }}>SEE ALL</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <ScrollView horizontal={true} contentContainerStyle={{ gap: 10 }}>
              <View style={{ backgroundColor: "#2A2A2A", borderRadius: 5 }}>
                <Image
                  source={require("./assets/imgs/matthew.jpg")}
                  style={{ height: 180, width: 130 }}
                  resizeMode="cover"
                />
                <Text style={{ color: "white", padding: 5 }}>
                  Matthew McConaughey
                </Text>
                <Text style={{ color: "#AAAAAA", padding: 5 }}>Cooper</Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A", borderRadius: 5 }}>
                <Image
                  source={require("./assets/imgs/anne.jpg")}
                  style={{ height: 180, width: 130 }}
                  resizeMode="cover"
                />
                <Text style={{ color: "white", padding: 5 }}>
                  Anne Hathaway
                </Text>
                <Text style={{ color: "#AAAAAA", padding: 5 }}>Brand</Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A", borderRadius: 5 }}>
                <Image
                  source={require("./assets/imgs/jessica.jpg")}
                  style={{ height: 180, width: 130 }}
                  resizeMode="cover"
                />
                <Text style={{ color: "white", padding: 5 }}>
                  Jessica Chastain
                </Text>
                <Text style={{ color: "#AAAAAA", padding: 5 }}>Murph</Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A", borderRadius: 5 }}>
                <Image
                  source={require("./assets/imgs/ellen.jpg")}
                  style={{ height: 180, width: 130 }}
                  resizeMode="cover"
                />
                <Text style={{ color: "white", padding: 5 }}>
                  Ellen Burstyn
                </Text>
                <Text style={{ color: "#AAAAAA", padding: 5 }}>Murph</Text>
              </View>
            </ScrollView>
          </View>
          <Text style={{ color: "white", marginTop: 10 }}>Director</Text>
          <Text style={{ color: "#AAAAAA", marginTop: 5 }}>
            Christopher Nolan
          </Text>
          <Text style={{ color: "white", marginTop: 10 }}>Writers</Text>
          <Text style={{ color: "#AAAAAA", marginTop: 5 }}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </ScrollView>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
});
