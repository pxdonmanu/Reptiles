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

const InfoCocodrile = [
  {
    title: "Cocodrilos gaviales (Gavialidae)",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Indian_Gharial_Crocodile_Digon3.JPG/200px-Indian_Gharial_Crocodile_Digon3.JPG",
    text: "Los gaviálidos son grandes reptiles semiacuáticos, que recuerdan a los cocodrilos, pero con un hocico mucho más delgado. El largo hocico se utiliza para atrapar peces, pues los gaviálidos carecen de la fuerza en las mandíbulas para capturar presas grandes, como hacen los cocodrilos y los caimanes de tamaño similar.a",
  },
  {
    title: "Caimanes o aligátores (Alligatoridae)",
    img: "https://static.nationalgeographic.es/files/styles/image_3200/public/4.600x450.jpg?w=1900&h=1425",
    text: "Los caimanes, también conocidos como yacarés o lagartos negros, son reptiles semiacuáticos de gran tamaño que se parecen a los cocodrilos. De las seis especies de caimán conocidas, solo existen tres en la actualidad: el caimán de anteojos, el caimán negro y el caimán colorado. Están distribuidos en América del Norte y América del Sur, desde México hasta la región noreste de Argentina.",
  },
  {
    title: 'Cocodrilos verdaderos (Crocodylidae)',
    img: 'https://cdn0.ecologiaverde.com/es/posts/2/9/1/caracteristicas_del_cocodrilo_2192_1_600.jpg',
    text:'Crocodylidae (castellanizado como crocodílidos o cocodrílidos) es una familia de saurópsidos, arcosaurios comúnmente conocidos como cocodrilos. Incluye a catorce especies actuales. Se trata de grandes reptiles semiacuáticos que viven en las regiones tropicales de África, Asia, América y Australia. Aparecieron por primera vez durante el Eoceno, hace unos cincuenta y cinco millones de años.'
  }
];

export default function Cocodrilos() {
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
      <Header name={"Cocodrilos"} />
      <View style={style.info}>
        <TouchableOpacity style={style.TouOp1} onPress={handleRest}>
          <AntDesign name="left" size={50} color="black" />
        </TouchableOpacity>
        <View style={style.contInfo}>
          <Text style={style.textTitle}>{InfoCocodrile[state].title}</Text>
          <Image source={{ uri: InfoCocodrile[state].img }} style={{ width:300, height:300, resizeMode:'conteiner'}}></Image>
          <Text style={style.textCont}>{InfoCocodrile[state].text}</Text>
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
