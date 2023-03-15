import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import Header from "../../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";

const InfoRenocefalos = [
  {
    title: "Esfenodontos",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tuatera.JPG/250px-Tuatera.JPG",
    text: "Los esfenodontos (Sphenodontia) o rincocéfalos (Rhynchocephalia) son un orden de saurópsidos (reptiles) lepidosaurios que incluye un solo género actual, Sphenodon, con una sola especies (Sphenodon punctatus), conocidas con el nombre común de tuátaras, limitadas a Nueva Zelanda.",
  },
];

export default function Squamatas() {
  const [state, setState] = useState(0);

  const handleSum = () => {
    if (state == 2) {
      setState(0);
    } else {
      setState(state + 1);
    }
  };

  const handleRest = () => {
    if (state == 0) {
      setState(2);
    } else {
      setState(state - 1);
    }
  };

  return (
    <View style={style.conteinerC}>
      <Header name={"Squamatas"} />
      <View style={style.info}>
        
        <View style={style.contInfo}>
          <Text style={style.textTitle}>{InfoRenocefalos[state].title}</Text>
          <Image source={{ uri: InfoRenocefalos[state].img }} style={{ width:300, height:300, resizeMode:'conteiner'}}></Image>
          <Text style={style.textCont}>{InfoRenocefalos[state].text}</Text>
        </View>
        
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  conteinerC: {
    width: "100%",
    height: "100%",
  },
  info: {
    width: "100%",
    height: "85%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#E6FFCF",
  },
  TouOp1: {
    width: "11%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  TouOp2: {
    width: "11%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  contInfo: {
    width: "78%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56ab2f",
    borderRadius: "35vh",
  },
  textCont: {
    marginTop:'5%',
    marginLeft:'5%',
    marginRight:'5%',
    textAlign: 'justify'
  },
  textTitle:{
    textAlign: 'center',
    marginBottom:'5%',
    fontSize:20,
    fontWeight: 'bold'
  }
});
