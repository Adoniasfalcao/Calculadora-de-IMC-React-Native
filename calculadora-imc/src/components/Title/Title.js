import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
  const [contador, setContador] = useState(0)

  function Iterar(){
    setContador(+1)
  }

  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle} onPress={() => setContador(contador + 1)}>CÁLCULO DE IMC</Text>
      {contador === 4 && 
      <Text>MODO DESENVOLVEDOR ATIVADO</Text>}
    </View>
  );
  
}
