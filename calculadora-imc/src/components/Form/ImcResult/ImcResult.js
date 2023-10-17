import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ImcResult({ messageResultImc = "", resultImc }) {
  
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu imc hoje é: ${resultImc}`,
    });
  };

  return (
    <View style={styles.resultImc}>
      <Text style={styles.info}>{messageResultImc}</Text>
      <Text style={styles.resultNumber}>{resultImc}</Text>

      <View>
        <TouchableOpacity
          style={styles.buttonShare}
          onPress={onShare}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonShareText}>Compartilhar</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}
