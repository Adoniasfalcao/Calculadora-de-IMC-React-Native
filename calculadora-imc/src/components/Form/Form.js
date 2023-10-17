import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Vibration,
  Pressable,
  Keyboard
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
  const [focusHeight, setFocusHeight] = useState(false);
  const [focusWeight, setFocusWeight] = useState(false);


  //Cálculo do IMC
  function imcCalculator() {
    let heightFormat = height.replace(",",".")
    let weightFormat = weight.replace(",",".")

    return setImc((weightFormat / heightFormat ** 2).toFixed(2));
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

      setImc(null);
      setLoading(true);
      imcCalculator();

      setMessageImc("Seu IMC é igual a:");
      setTextButton("Calcular novamente");

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

      //Reseta os valores
      setWeight(null);
      setHeight(null);
      setFocusHeight(false);
      setFocusWeight(false);
    }
  }

  return (

    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>

        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Insira a altura (m)"
          keyboardType="numeric"
          style={ focusHeight ? styles.formInputFocusHeight : styles.formInput}
          onFocus={ () => setFocusHeight(true)}
          onBlur={ () => setFocusHeight(false)}
        />

        <Text style={styles.formLabel}>Peso</Text>

        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Insira o peso (kg)"
          keyboardType="numeric"
          style={ focusWeight ? styles.formInputFocusHeight : styles.formInput}
          onFocus={ () => setFocusWeight(true)}
          onBlur={ () => setFocusWeight(false)}
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

    </Pressable>
  );
}
