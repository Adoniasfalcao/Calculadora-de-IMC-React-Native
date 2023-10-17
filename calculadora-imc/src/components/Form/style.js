import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 40,
    paddingTop: 15,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 20,
    padding: 10,
  },

  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },

  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },

  formInputFocusWeight: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
    height: 40,
    margin: 12,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#FF0043"
  },

  formInputFocusHeight: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
    height: 40,
    margin: 12,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#FF0043"
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },  

  button: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF0043",
    borderRadius: 50,
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 20,
    marginTop: 30,
  },

  exibitionResultImc: {
    width: "100%",
    height: "80%",
  },

  listImcs: {
    marginTop: 40,
  },

  resultImcItem: {
    color: "red",
    width: "100%",
    marginLeft: 140,
    fontSize: 18

  },

  textResultItemList: {
    fontSize: 26
  }
});

export default styles;
