import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import ImcResult from "./ImcResult/ImcResult";

export default function Form() {

  //States do formulário
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [messageImc, setMessageImc] = useState();
  const [imc, setImc] = useState();
  const [textbutton, setTextButton] = useState();

  //Cálculo do IMC
  function imcCalculator() {
    return setImc((weight / height ** 2).toFixed(2));
  }

  //Validação de dados
  function validationImc() {

    if (!height || !weight) {
      Alert.alert(
        "Preencha os dados!",
        "campos vazios",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          { text: "OK" },
        ],
        { cancelable: false }
      );

      setTextButton("Calcular");
      setMessageImc("Preencha os dados acima");

    } else {
      imcCalculator();

      //Reseta os valores
      setWeight(null);
      setHeight(null);

      //Mensagem de retorno
      setMessageImc(`Seu IMC é igual:`);
      setTextButton("Calcular novamente");
    }
  }


  return (
    <View>

      <View>
        <Text>Altura</Text>

        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Insira a altura"
          keyboardType="numeric"
          style={styles.inputForm}
        />

        <Text>Peso</Text>

        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Insira o peso"
          keyboardType="numeric"
          style={styles.inputForm}
        />

        <TouchableOpacity style={styles.button} onPress={validationImc} activeOpacity={0.7}>
          <Text style={styles.imcLabel}>Calcular IMC</Text>
        </TouchableOpacity>
      </View>

      <ImcResult messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}


const styles = StyleSheet.create( {
    button: {
        marginTop: 16,
        padding: 6,
        backgroundColor: 'rgb(93, 198, 0)',
        borderRadius: 6,
        display: "flex",
        alignItems: 'center'
    },

    imcLabel: {
        color: '#fff'
    },

    inputForm: {
        marginTop: 4,
        paddingHorizontal: 12,
        backgroundColor: '#dcdcdc',
        borderRadius: 6
        
    }
})