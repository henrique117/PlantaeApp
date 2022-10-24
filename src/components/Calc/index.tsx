import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CultivosProps } from "../../interfaces/Cultivos.interface";
import styles from "./styles";
import { cafe, ranking } from "../../calc/calculadora";
import Button from "../Button";

export default function Calc({...rest}: CultivosProps){

    const [retorno, setRetorno] = useState()

    function calc() {
        setRetorno(ranking())
    }

    return (
        <View style={styles.container}>
            <View> 
                <Button onPress={calc} title="Calcular" type="secondary" />
                <View>
                    {retorno && retorno.map((i) => {
                        return (
                            <ScrollView style={styles.rankView}>
                                <Text key={i} style={styles.rank}>{i}</Text>
                            </ScrollView>
                        )
                    })}
                </View>
            </View>
        </View>
    );
}
