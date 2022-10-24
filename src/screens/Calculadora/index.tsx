import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";

import { CalcComp } from "../../components"

export default function Calculadora() {
  return (
      <View style={styles.container}>
          <ScrollView>
            <CalcComp/>
          </ScrollView>

      </View>
  );
}