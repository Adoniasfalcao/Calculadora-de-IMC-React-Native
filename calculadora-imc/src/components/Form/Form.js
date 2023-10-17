import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Vibration,
} from "react-native";
import ImcResult from "./ImcResult/ImcResult";
import styles from "./style";

export default function Form() {

  //States do formulário
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [messageImc, setMessageImc] = useState();
  const [imc, setImc] = useState();
  const [textbutton, setTextButton] = useState("Calcular");
  const [loading, setLoading] = useState(false);

  //Cálculo do IMC
  function imcCalculator() {
    return setImc((weight / height ** 2).toFixed(2));
  }

  //Validação de dados
  function validationImc() {
    //Declaração de exception
    const errorException = {
      cod: 1,
      message: "Campos vazios!",
    };

    try {
      //Campo vazio
      if (!weight || !height) {
        throw errorException;
      }

      setLoading(true);
      imcCalculator();

      //Reseta os valores
      setWeight(null);
      setHeight(null);

      setMessageImc("Seu IMC é igual a:");
      setTextButton("Calcular novamente");

      return;

    } catch (err) {
      //Erro
      Alert.alert("Atenção!", `${err.message}`, [{ text: "OK" }], {
        cancelable: false,
      });
      Vibration.vibrate();

      setImc(null);
      setMessageImc("Preencha os campos acima!");
      setTextButton("Calcular");

    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
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

      <ActivityIndicator size={60} color="#FF0043" animating={loading} />

      {!loading && imc && (
        <ImcResult messageResultImc={messageImc} resultImc={imc} />
      )}
      
    </View>
  );
}
