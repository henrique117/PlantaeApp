import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Alert } from "react-native";
import { EditarPerfilTypes } from "../../types/Screen.types";
import styles from "./styles";
import ButtonTransparente from "../../components/ButtonOpacity";
import { useAuth } from "../../hook/auth";
import { useMap, IMap } from "../../hook/map";
import colors from "../../styles/colors";
import { INutri, INutriField } from "../../interfaces/Nutrientes.interface";
import { apiNutri } from "../../services/data";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";
import { ButtonComp, LoadingComp } from "../../components";

export default function Perfil({ navigation }: EditarPerfilTypes) {
  const { user } = useAuth();
  const map = useMap();
  const [coord, setCoord] = useState<IMap | null>();
  const [data, setData] = useState<INutriField>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    map.then((response) => {
      setCoord(response)
    })
    async function loadNutri() {
      const response = await apiNutri.index()
      setData(response.data.data)
    }
    loadNutri()
  }, []);

  async function handleSubmit() {
    try {
      setIsLoading(true);
      if (data?.N && data.P && data.K && data.Ca && data.Mg && data.S) {
        const response = await apiNutri.create(data);
        console.log(response.data)
      } else {
        Alert.alert("Preencha todos os campos!");
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IResponse;
      let message = "";
      console.log(data)
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  function handleSair() {
    navigation.navigate("Sair");
  }

  function handleChange(item: INutriField) {
    setData({ ...data, ...item });
  }

  return (

    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <View style={styles.container}>
          <View style={styles.row}>
            <Image source={require("../../assets/userpfp.png")} style={styles.img} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.titlebold}>{user?.name}</Text>
              <Text style={styles.subtitle}>Apresente-se aos outros usuários</Text>
              <ButtonTransparente title="Sair" type="primary" onPress={handleSair} />
            </View>
          </View>
          <View style={styles.container2}>
            <Text style={styles.textlocal}>Latitude:  {coord?.long} </Text>
            <Text style={styles.textlocal}>Longitude:  {coord?.lat}</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.nutriente}>
              <Text style={styles.nutrientetext} >N: </Text>
              <TextInput
                onChangeText={(i) => handleChange({ N: i })}
                keyboardType="numeric"
                maxLength={3}
                defaultValue={data?.N as unknown as string}
              />
            </View>
            <View style={styles.nutriente}>
              <Text style={styles.nutrientetext}>P:</Text>
              <TextInput style={styles.nutrientetext}
                onChangeText={(i) => handleChange({ P: i })}
                keyboardType="numeric"
                maxLength={3}
                defaultValue={data?.P as unknown as string}
              />
            </View>
            <View style={styles.nutriente}>
              <Text style={styles.nutrientetext} >K: </Text>
              <TextInput style={styles.nutrientetext}
                onChangeText={(i) => handleChange({ K: i })}
                keyboardType="numeric"
                maxLength={3}
                defaultValue={data?.K as unknown as string}
              />
            </View>
            <View style={styles.nutriente}>
              <Text style={styles.nutrientetext} >Ca: </Text>
              <TextInput style={styles.nutrientetext}
                onChangeText={(i) => handleChange({ Ca: i })}
                keyboardType="numeric"
                maxLength={3}
                defaultValue={data?.Ca as unknown as string}
              />
            </View>
            <View style={styles.nutriente}>
              <Text style={styles.nutrientetext} >Mg: </Text>
              <TextInput style={styles.nutrientetext}
                onChangeText={(i) => handleChange({ Mg: i })}
                keyboardType="numeric"
                maxLength={3}
                defaultValue={data?.Mg as unknown as string}
              />
            </View>
            <View style={styles.nutriente}>
              <Text style={styles.nutrientetext} >S: </Text>
              <TextInput style={styles.nutrientetext}
                onChangeText={(i) => handleChange({ S: i })}
                keyboardType="numeric"
                maxLength={3}
                defaultValue={data?.S as unknown as string}
              />
            </View>

          </View>
          <ButtonComp title="Enviar" type="secondary" onPress={handleSubmit}></ButtonComp>
        </View>
      )}
    </>

  );
}