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

const InfoQuelonio = [
  {
    title: "Tortuga de orejas rojas o Galápago de Florida (Trachemys scripta elegans)",
    img: "https://t1.ea.ltmcdn.com/es/posts/9/5/1/cuidados_de_la_tortuga_acuatica_de_orejas_rojas_23159_orig.jpg",
    text: "La jicotea elegante​ (Trachemys scripta elegans), también conocida como galápago de Florida,​ o tortuga de orejas rojas, es una subespecie de tortuga semiacuática perteneciente a la familia Emydidae.",
  },
  {
    title: "Tortuga de orejas amarillas (Trachemys scriptas scripta)",
    img: "https://misanimales.com/wp-content/uploads/2021/03/tortuga-orejas-amarillas-cabeza-1024x683.jpg",
    text: "Cuando hablamos de la tortuga de orejas amarillas nos referimos a una especie en concreto cuya denominación es Trachemys scripta scripta. Su nombre popular es debido a su apariencia, al tratarse de una tortuga que presenta una coloración oscura pero que posee líneas amarillas en la cola, las patas y la cara.",
  },
  {
    title: 'Falsa tortuga mapa (Graptemys pseudogeographica)',
    img: 'https://dereptil.online/wp-content/uploads/2021/06/tortuga-mapa.jpg',
    text:'Su nombre científico es Graptemys pseudogeographica y pertenece al género Graptemys que cuenta con 12 especies. Tiene una coloración de joven que la hace poder confundirse con la especie Graptemys geographica. Comúnmente se le llama falta tortuga mapa para diferenciarse de la otra tortuga mapa.'
  }
];

export default function Quelonios() {
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
      <Header name={"Quelonios"} />
      <View style={style.info}>
        <TouchableOpacity style={style.TouOp1} onPress={handleRest}>
          <AntDesign name="left" size={50} color="black" />
        </TouchableOpacity>
        <View style={style.contInfo}>
          <Text style={style.textTitle}>{InfoQuelonio[state].title}</Text>
          <Image source={{ uri: InfoQuelonio[state].img }} style={{ width:300, height:300, resizeMode:'conteiner'}}></Image>
          <Text style={style.textCont}>{InfoQuelonio[state].text}</Text>
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