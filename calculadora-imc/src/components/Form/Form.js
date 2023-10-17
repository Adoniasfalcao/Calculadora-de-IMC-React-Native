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
  Keyboard,
  FlatList,
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
  const [imcList, setImcList] = useState([]);


  //Provisório!
  function formInit() {
    setImc(null);
  }

  //Cálculo do IMC
  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    let totalImc = (weightFormat / heightFormat ** 2).toFixed(2);

    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
    setImc(totalImc);
  }

  //Validação de dados
  function validationImc() {
    //Declaração de exception
    const errorException = {
      cod: 1,
      message: "Campos vazios!",
    };

    console.log(imcList);

    try {
      //Campo vazio
      if (!weight || !height) {
        throw errorException;
      }

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
      }, 1000);

      //Reseta os valores
      setWeight(null);
      setHeight(null);
      setFocusHeight(false);
      setFocusWeight(false);
    }
  }

  return (
    <View style={styles.formContext}>

      {imc ? (
        <View style={styles.exibitionResultImc}>

          <ActivityIndicator size={60} color="#FF0043" animating={loading} />
          <ImcResult messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            style={styles.button}
            onPress={formInit}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}> {textbutton} </Text>
          </TouchableOpacity>

          <FlatList
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({ item }) => {
              return (
                <Text style={styles.resultImcItem}>
                  <Text style={styles.textResultItemList}>
                    Resultado IMC = {item.imc}{" "}
                  </Text>
                </Text>
              );
            }}
            keyExtractor={(item) => {
              item.id;
            }}
          ></FlatList>
          
        </View>

      ) : (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>

          <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder="Insira a altura (m)"
            keyboardType="numeric"
            style={focusHeight ? styles.formInputFocusHeight : styles.formInput}
            onFocus={() => setFocusHeight(true)}
            onBlur={() => setFocusHeight(false)}
          />

          <Text style={styles.formLabel}>Peso</Text>

          <TextInput
            onChangeText={setWeight}
            value={weight}
            placeholder="Insira o peso (kg)"
            keyboardType="numeric"
            style={focusWeight ? styles.formInputFocusHeight : styles.formInput}
            onFocus={() => setFocusWeight(true)}
            onBlur={() => setFocusWeight(false)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={validationImc}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}> {textbutton} </Text>
          </TouchableOpacity>
        </Pressable>
      )}
    </View>
  );
}
