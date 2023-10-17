import React, {useState} from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ImcResult({ messageResultImc = "", resultImc }) {

  const [imcCategory, setImcCategory] = useState();
  const [color, setColor] = useState();

  function imcClassifier() {
    if (resultImc <= 18.5) {
      setImcCategory("Abaixo do peso ideal");
      setColor("#EDED00")

    } else if (resultImc >= 18.5 && resultImc <= 24.9) {
      setImcCategory("Peso ideal");
      setColor("#93bf85")

    } else if (resultImc >= 25 && resultImc <= 29.9) {
      setImcCategory("Acima do peso ideal");
      setColor("#FFC900")

    } else if (resultImc >= 30) {
      setImcCategory("Obeso");
      setColor('#F00000')

    }
  }

  const onShare = async () => {
    const result = await Share.share({
      message: `Meu imc hoje é: ${resultImc} - ${imcCategory}`,
    });
  };


  return (
    <View style={styles.resultImc}>
      <Text style={styles.info}>{messageResultImc}</Text>
      <Text style={[styles.resultNumber, {color: color}]}>{resultImc}</Text>
      <Text style={styles.category} onLayout={imcClassifier}>{imcCategory}</Text>

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
