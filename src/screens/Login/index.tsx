import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";
import { useAuth } from "../../hook/auth";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";
import { LoadingComp } from "../../components";

export default function Login({ navigation }: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }

  async function handleSignIn() {
    try {
      setIsLoading(true);
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!");
        setIsLoading(false);
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (

    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <View style={styles.container}>
          <KeyboardAvoidingView>
            <Text style={styles.title}>Login</Text>
            <View style={styles.text2}>
              <Text>Não tem uma conta? </Text>
              <TouchableOpacity
                onPress={handleCadastrar} >
                <Text style={styles.signupText}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formRow}>
              <MaterialIcons name="email" style={styles.icon} />
              <TextInput
                placeholderTextColor='#6b6b6b'
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(i) => handleChange({ email: i })}
              />
            </View>
            <View style={styles.formRow}>
              <Entypo name="key" style={styles.icon} />
              <TextInput
                placeholderTextColor='#6b6b6b'
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(i) => handleChange({ password: i })}
              />
            </View>
            <Button title="Login" type="secondary" onPress={handleSignIn} />
          </KeyboardAvoidingView>
          <StatusBar style="dark" />
        </View>
      )}
    </>
  );
}