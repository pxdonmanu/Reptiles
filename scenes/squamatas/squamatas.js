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

const InfoSquamatas = [
  {
    title: "Dibamia",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Anelytropsis.jpg",
    text: "Los dibámidos (Dibamidae) son una familia de saurópsidos (reptiles) escamosos. Se distribuyen por Asia, Nueva Guinea y México. Filogenéticamente constituye el grupo más basal de los escamosos.",
  },
  {
    title: "Gekkota",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoXpcC90W16LwjKU9Dnt56mZ-ctT0T9C4aAiC1vNJfwPubaAupCSAm2hpgNjS95SbwfI&usqp=CAU",
    text: "}Gekkota es un suborden de saurópsidos escamosos comúnmente conocidos como geckos o gecos. Se compone de más de 1500 especies clasificadas en unos 120 géneros y 7 familias. Se distribuyen en todas las zonas cálidas del mundo, donde viven en una variedad de hábitats diferentes, desde selvas muy densas hasta zonas desérticas. Los geckos no pueden sobrevivir en regiones templadas, como el norte de Europa, pero en el sur de Europa algunas especies son muy comunes.",
  },
  {
    title: 'Serpientes',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlzSWExJ-5bYTKRaN4EOilKuusbiyCzdcBXCUmneX&s',
    text:'Las serpientes (Serpentes) u ofidios (Ophidia) son un suborden de saurópsidos (reptiles) diápsidos pertenecientes al orden Squamata, del superorden Lepidosauria, caracterizado por la ausencia de patas (la pitón mantiene diminutas extremidades vestigiales, herencia de su pasado evolutivo)​ y el cuerpo muy alargado. Se originaron en el período Cretácico.'
  }
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
        <TouchableOpacity style={style.TouOp1} onPress={handleRest}>
          <AntDesign name="left" size={50} color="black" />
        </TouchableOpacity>
        <View style={style.contInfo}>
          <Text style={style.textTitle}>{InfoSquamatas[state].title}</Text>
          <Image source={{ uri: InfoSquamatas[state].img }} style={{ width:300, height:300, resizeMode:'conteiner'}}></Image>
          <Text style={style.textCont}>{InfoSquamatas[state].text}</Text>
        </View>
        <TouchableOpacity style={style.TouOp2} onPress={handleSum}>
          <AntDesign name="right" size={50} color="black" />
        </TouchableOpacity>
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