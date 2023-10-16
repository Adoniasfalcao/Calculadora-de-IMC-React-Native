import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import ImcResult from "./ImcResult/ImcResult";
import styles from "./style";

export default function Form() {
  
  //States do formulário
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [messageImc, setMessageImc] = useState();
  const [imc, setImc] = useState();
  const [textbutton, setTextButton] = useState("Calcular");

  //Cálculo do IMC
  function imcCalculator() {
    return setImc((weight / height ** 2).toFixed(2));
  }

  //Validação de dados
  function validationImc() {
    
    //Caso Nulo,Vazio etc
    if (!height || !weight) {
      Alert.alert(
        "Atenção!",
        "Dados inválidos ou vazios",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          { text: "OK" },
        ],
        { cancelable: false }
      );

    } else {
      imcCalculator();

      //Reseta os valores
      setWeight(null);
      setHeight(null);

      //Mensagem de retorno
      setMessageImc(`Seu IMC é igual:`);
      setTextButton("Calcular novamente");

      return;
    }

    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha os dados acima!");
  }

  return (

    <View style={styles.formContext}>

      <View style={styles.form}>

        <Text style={styles.formLabel}>Altura</Text>

        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Insira a altura"
          keyboardType="numeric"
          style={styles.formInput}
        />

        <Text style={styles.formLabel}>Peso</Text>

        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Insira o peso"
          keyboardType="numeric"
          style={styles.formInput}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={validationImc}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}> {textbutton} </Text>

        </TouchableOpacity>

      </View>
      <ImcResult messageResultImc={messageImc} resultImc={imc} />

    </View>
  );
}
