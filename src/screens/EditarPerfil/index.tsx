import React from "react";
import { View, Text} from "react-native";
import styles from "./styles"
import { AntDesign } from "@expo/vector-icons";
import { EditarPerfilTypes } from "../../types/Screen.types";


export default function EditarPerfil ({ navigation }: EditarPerfilTypes) {
    function handleVoltar() {
        navigation.navigate("Perfil");
    }

    function handleSair() {
        navigation.navigate("Sair");
    }

  return (
    <View>
        <AntDesign style={styles.voltar} name="arrowleft" size={24} color="black" onPress={handleVoltar}/>
        <Text style={styles.texto} onPress={handleSair}>Sair</Text>
    </View>
  );
}