import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView className="m-4">
     {/* Top section starts */}
     <View className="flex-row justify-between items-center gap-2">
     {/* Child one view */}
     <View className="flex-row">
      {/* Icon section */}
      <View><FontAwesome name="map-marker" size={29} color="black" /></View>
      {/* text section */}
      <View className="px-2">
        <Text>Location</Text>
        <Text className="font-bold">
          Los Angeles, California,USA
          </Text>
      </View>

     </View>
     {/* Child two view */}
     <View>
     <FontAwesome name="bell" size={26} color="black" />
     </View>

     </View>
    </SafeAreaView>
  );
}


