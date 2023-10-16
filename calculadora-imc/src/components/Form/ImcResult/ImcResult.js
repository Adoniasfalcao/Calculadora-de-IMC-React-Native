import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ImcResult({ messageResultImc = "", resultImc }) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.info}>{messageResultImc}</Text>
      <Text style={styles.resultNumber}>{resultImc}</Text>
    </View>
  );
}
