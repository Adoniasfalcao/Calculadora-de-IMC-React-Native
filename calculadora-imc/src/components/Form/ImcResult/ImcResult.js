import React from "react";
import { View, Text } from "react-native";

export default function ImcResult({ messageResultImc = "", resultImc }) {
  return (
    <View>
      <Text>{messageResultImc}</Text>
      <Text>{resultImc}</Text>
    </View>
  );
}
