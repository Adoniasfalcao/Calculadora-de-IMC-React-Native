import React from "react";
import { View, Text } from "react-native";

export default function Title() {
  return (
    <View>
      <Text
        onPress={() => {
          alert("Easter Egg");
        }}
      >
        CÁLCULO DE IMC
      </Text>
    </View>
  );
}
