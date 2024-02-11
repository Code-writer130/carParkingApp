import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

const image = {
  uri: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.2.1352751250.1707565346&semt=sph",
};
export default function App() {
  return (
    <SafeAreaView className="m-3">
      {/* Top section starts */}
      <View className="flex-row justify-between items-center gap-2">
        {/* Child one view */}
        <View className="flex-row">
          {/* Icon section */}
          <View>
            <FontAwesome name="map-marker" size={29} color="black" />
          </View>
          {/* text section */}
          <View className="px-2">
            <Text>Location</Text>
            <Text className="font-bold">Los Angeles, California,USA</Text>
          </View>
        </View>
        {/* Child two view */}
        <View>
          <FontAwesome name="bell" size={26} color="black" />
        </View>
      </View>
      {/* Second section which includes the image */}
      <View className="pt-4">
        <ImageBackground borderRadius={13} source={image}>
          <View className="pt-16 pl-5 pb-4">
            <Text className="text-white text-xl font-thin">Hello Nana</Text>
            <Text className="text-white text-4xl font-medium">
              Fresh start your journey
            </Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView horizontal>
        {/* The chips section */}
        <View className="pt-4 flex-row items-center gap-2">
          {/* Container for car*/}
          <View className="p-3 bg-black rounded-md ">
            {/* Car chip */}
            <View className="flex-row gap-2 items-center ">
              <AntDesign name="car" size={28} color="white" />
              <Text className="text-white ">Car</Text>
            </View>
          </View>
          {/* Container end */}
          {/* Container for bus */}
          <View className="p-3 bg-gray-100 rounded-md ">
            {/* Bus chip */}
            <View className="flex-row gap-2 items-center ">
              <FontAwesome5 name="bus" size={24} color="black" />
              <Text>Bus</Text>
            </View>
          </View>
          {/* Gas chip */}
          {/* Container for gas */}
          <View className="p-3 bg-gray-100 rounded-md ">
            <View className="flex-row gap-2 items-center ">
              <FontAwesome6 name="gas-pump" size={24} color="black" />
              <Text>Gas</Text>
            </View>
          </View>
          {/* Container end */}
          {/* Container for boat */}
          <View className="p-3 bg-gray-100 rounded-md ">
            {/* Boat chip */}
            <View className="flex-row gap-2 items-center ">
              <Ionicons name="boat" size={24} color="black" />
              <Text>Boat</Text>
            </View>
          </View>
          {/* Container end */}
        </View>
      </ScrollView>
      {/* Icons chip section end */}
      {/* Text section */}
      <View className="pt-5 flex-row justify-between items-center ">
        <Text className="pt-2 font-bold text-lg">Recent Place</Text>
        <Text className="pt-2 font-thin">See More</Text>
      </View>
      {/* Images section */}
      <View>
        {/* first Container view */}
        <View>
          {/* first Image and text view */}
          <View className="pt-6">
            <Image
              style={{
                height: 150,
                width: 250,
                borderRadius: 12,
              }}
              source={{
                uri: "https://img.freepik.com/free-photo/hallway-building_23-2149397551.jpg?size=626&ext=jpg",
              }}
            ></Image>
            <View className="flex-row">
            <Text>USM Parking Place</Text>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}
