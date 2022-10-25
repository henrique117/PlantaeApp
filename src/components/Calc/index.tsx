import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { CultivosProps } from "../../interfaces/Cultivos.interface";
import { INutriField } from "../../interfaces/Nutrientes.interface";
import styles from "./styles";
import { cafe, ranking } from "../../calc/calculadora";
import Button from "../Button";
import { apiNutri } from "../../services/data";

export default function Calc({...rest}: CultivosProps){

    const [data, setData] = useState<INutriField>()
    const [retorno, setRetorno] = useState()

    useEffect(() => {
        async function loadNutri() {
          const response = await apiNutri.index()
          setData(response.data.data)
        }
        loadNutri()
    }, [])

    function calc() {
        const rankRet = ranking(data)
        setRetorno(rankRet)
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
