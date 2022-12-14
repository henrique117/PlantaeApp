import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text
} from "react-native";
import styles from "./styles";
import CardCultivos from "../../components/CardCultivos";
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { cafe, soja, milho, feijao, sorgo, tomate, capim, cana, alho, laranja } from "../../calc/calculadora"
import { INutriField } from "../../interfaces/Nutrientes.interface";
import { apiNutri } from "../../services/data";

// const cafeS = cafe()
// const sojaS = soja()
// const milhoS = milho()
// const feijaoS = feijao()
// const sorgoS = sorgo()
// const tomateS = tomate()
// const capimS = capim()
// const canaS = cana()
// const alhoS = alho()
// const laranjaS = laranja()

export default function Cultivo() {
  const [data, setData] = useState<INutriField>();
  const [retornoCafe, setRetornoCafe] = useState()
  const [retornoSoja, setRetornoSoja] = useState()
  const [retornoMilho, setRetornoMilho] = useState()
  const [retornoFeijao, setRetornoFeijao] = useState()
  const [retornoSorgo, setRetornoSorgo] = useState()
  const [retornoTomate, setRetornoTomate] = useState()
  const [retornoCapim, setRetornoCapim] = useState()
  const [retornoCana, setRetornoCana] = useState()
  const [retornoAlho, setRetornoAlho] = useState()
  const [retornoLaranja, setRetornoLaranja] = useState()

  useEffect(() => {
    async function loadNutri() {
      const response = await apiNutri.index()
      setData(response.data.data)
    }
    loadNutri()
  }, [])


  function SCafe() {
    if (data) {
      const cafeSa = cafe(data)
      setRetornoCafe(cafeSa[1])
    }
  }

  function SSoja() {
    if (data) {
      const sojaSa = soja(data)
      setRetornoSoja(sojaSa[1])
    }
  }

  function SMilho() {
    const milhoSa = milho(data)
    setRetornoMilho(milhoSa[1])
  }

  function SFeijao() {
    const feijaoSa = feijao(data)
    setRetornoFeijao(feijaoSa[1])
  }

  function SSorgo() {
    const sorgoSa = sorgo(data)
    setRetornoSorgo(sorgoSa[1])
  }

  function STomate() {
    const tomateSa = tomate(data)
    setRetornoTomate(tomateSa[1])
  }

  function SCapim() {
    const capimSa = capim(data)
    setRetornoCapim(capimSa[1])
  }

  function SCana() {
    const canaSa = cana(data)
    setRetornoCana(canaSa[1])
  }

  function SAlho() {
    const alhoSa = alho(data)
    setRetornoAlho(alhoSa[1])
  }

  function SLaranja() {
    const laranjaSa = laranja(data)
    setRetornoLaranja(laranjaSa[1])
  }

  return (

    <ScrollView style={styles.container}>
      <View style={styles.borderbox}>
        <View style={styles.rowSearch}>
          <FontAwesome5 name="search" style={styles.icon} />
          <TextInput placeholder="Pesquisar cultivo" placeholderTextColor='#808080' />
        </View>
      </View>

      <CardCultivos
        nome="Soja"
        descricao="A soja ?? uma oleaginosa, pertencente ?? fam??lia Fabaceae, que abrange tamb??m plantas como
            o feij??o, a lentilha e a ervilha. A cultura desse gr??o ?? uma das mais importantes para a
            economia mundial, devido ??s suas v??rias possibilidades de aplica????o. Na ind??stria
            aliment??cia, por exemplo, ela ?? usada como mat??ria-prima na produ????o de massas,
            chocolates, ??leos, margarinas e maioneses, al??m de diversos outros alimentos."
        onPress={SSoja}
      />
      <View style={[styles.configNutri, { marginTop: 10 }]}>
        <Text style={styles.nutriFal}>N</Text>
        <Text style={styles.nutriFal}>P</Text>
        <Text style={styles.nutriFal}>K</Text>
        <Text style={styles.nutriFal}>Ca</Text>
        <Text style={styles.nutriFal}>Mg</Text>
        <Text style={styles.nutriFal}>S</Text>
      </View>
      <View style={[styles.configNutri, { marginBottom: 10 }]}>
        {retornoSoja && retornoSoja.map((i) => {
          return (
            <View key={i}>
              <Text key={i} style={[styles.nutriFal, styles.nutriFalText]}>{i}</Text>
            </View>
          )
        })}
      </View>

      <CardCultivos
        nome="Caf??"
        descricao="Al??m da sua import??ncia no desenvolvimento econ??mico do Brasil, ele trouxe uma
        contribui????o pol??tica e social significativa. O caf?? proporcionou a sustenta????o do
        aparelho pol??tico-administrativo e forneceu recursos para a instala????o do parque
        industrial nacional"
        onPress={SCafe}
      />
      <View style={[styles.configNutri, { marginTop: 10 }]}>
        <Text style={styles.nutriFal}>N</Text>
        <Text style={styles.nutriFal}>P</Text>
        <Text style={styles.nutriFal}>K</Text>
        <Text style={styles.nutriFal}>Ca</Text>
        <Text style={styles.nutriFal}>Mg</Text>
        <Text style={styles.nutriFal}>S</Text>
      </View>
      <View style={[styles.configNutri, { marginBottom: 10 }]}>
        {retornoCafe && retornoCafe.map((i) => {
          return (
            <View key={i}>
              <Text key={i} style={[styles.nutriFal, styles.nutriFalText]}>{i}</Text>
            </View>
          )
        })}
      </View>

      <CardCultivos
        nome="Laranja"
        descricao="A laranja ?? uma das frutas mais populares e consumidas da fam??lia Rutaceae (fam??lia dos
          c??tricos). Al??m disso, tamb??m podemos usar folhas e flores para extra????o de ??leos essenciais que
          s??o muito utilizados na medicina natural e perfumarias."
        onPress={SLaranja}
      />
      <View style={[styles.configNutri, { marginTop: 10 }]}>
        <Text style={styles.nutriFal}>N</Text>
        <Text style={styles.nutriFal}>P</Text>
        <Text style={styles.nutriFal}>K</Text>
        <Text style={styles.nutriFal}>Ca</Text>
        <Text style={styles.nutriFal}>Mg</Text>
        <Text style={styles.nutriFal}>S</Text>
      </View>
      <View style={[styles.configNutri, { marginBottom: 10 }]}>
        {retornoLaranja && retornoLaranja.map((i) => {
          return (
            <View key={i}>
              <Text key={i} style={[styles.nutriFal, styles.nutriFalText]}>{i}</Text>
            </View>
          )
        })}
      </View>

      <CardCultivos
        nome="Milho"
        descricao="O milho pertence ?? fam??lia Poaceae, ao g??nero Zea e sua esp??cie ??nica recebe o nome de
        Zea mays. ?? um cereal de alto valor nutricional e por isso mesmo est?? sendo largamente
        utilizado na composi????o de ra????es animais e outros alimentos humanos.
        ?? um dos gr??os mais assistidos de tecnologias de plantio e colheita, ?? cosmopolita e sua
        produ????o em 2004 chegou 600 milh??es de toneladas em todo o mundo."
        onPress={SMilho}
      />
      <View style={[styles.configNutri, { marginTop: 10 }]}>
        <Text style={styles.nutriFal}>N</Text>
        <Text style={styles.nutriFal}>P</Text>
        <Text style={styles.nutriFal}>K</Text>
        <Text style={styles.nutriFal}>Ca</Text>
        <Text style={styles.nutriFal}>Mg</Text>
        <Text style={styles.nutriFal}>S</Text>
      </View>
      <View style={[styles.configNutri, { marginBottom: 10 }]}>
        {retornoMilho && retornoMilho.map((i) => {
          return (
            <View key={i}>
              <Text key={i} style={[styles.nutriFal, styles.nutriFalText]}>{i}</Text>
            </View>
          )
        })}
      </View>

      <CardCultivos
        nome="Alho"
        descricao="O alho ?? considerado um tempero natural de grande utilidade na culin??ria. ?? usado no
        preparo de diversos pratos e alimentos. Sempre foi utilizado no tratamento e preven????o de v??rias doen??as. Hoje sabe-se de sua
        grande import??ncia no combate a problemas relacionados ao cora????o, c??ncer e infec????es."
        onPress={SAlho}
      />
      <View style={[styles.configNutri, { marginTop: 10 }]}>
        <Text style={styles.nutriFal}>N</Text>
        <Text style={styles.nutriFal}>P</Text>
        <Text style={styles.nutriFal}>K</Text>
        <Text style={styles.nutriFal}>Ca</Text>
        <Text style={styles.nutriFal}>Mg</Text>
        <Text style={styles.nutriFal}>S</Text>
      </View>
      <View style={[styles.configNutri, { marginBottom: 10 }]}>
        {retornoAlho && retornoAlho.map((i) => {
          return (
            <View key={i}>
              <Text key={i} style={[styles.nutriFal, styles.nutriFalText]}>{i}</Text>
            </View>
          )
        })}
      </View>

      <CardCultivos
        nome="Feij??o"
        descricao="Altamente nutritivo, o feij??o se destaca por sua versatilidade na cozinha, sendo a base
        para pratos tradicionais como a feijoada, dobradinha e tropeiro. A leguminosa ?? rica em prote??nas, ferro, c??lcio, vitaminas do complexo B, entre outros."
        onPress={SFeijao}
      />
      <View style={[styles.configNutri, { marginTop: 10 }]}>
        <Text style={styles.nutriFal}>N</Text>
        <Text style={styles.nutriFal}>P</Text>
        <Text style={styles.nutriFal}>K</Text>
        <Text style={styles.nutriFal}>Ca</Text>
        <Text style={styles.nutriFal}>Mg</Text>
        <Text style={styles.nutriFal}>S</Text>
      </View>
      <View style={[styles.configNutri, { marginBottom: 10 }]}>
        {retornoFeijao && retornoFeijao.map((i) => {
          return (
            <View key={i}>
              <Text key={i} style={[styles.nutriFal, styles.nutriFalText]}>{i}</Text>
            </View>
          )
        })}
      </View>

      <CardCultivos
        nome="Tomate"
        descricao="O tomate est?? entre as hortali??as mais consumidas no mundo. ?? uma fonte importante de
        vitaminas A e C. Destaca-se entre as hortali??as como fonte de vitamina B1. Tamb??m
        fornece pequenas quantidades de sais minerais, como mangan??s e pot??ssio."
        onPress={STomate}
      />
      <View style={[styles.configNutri, { marginTop: 10 }]}>
        <Text style={styles.nutriFal}>N</Text>
        <Text style={styles.nutriFal}>P</Text>
        <Text style={styles.nutriFal}>K</Text>
        <Text style={styles.nutriFal}>Ca</Text>
        <Text style={styles.nutriFal}>Mg</Text>
        <Text style={styles.nutriFal}>S</Text>
      </View>
      <View style={[styles.configNutri, { marginBottom: 10 }]}>
        {retornoTomate && retornoTomate.map((i) => {
          return (
            <View key={i}>
              <Text key={i} style={[styles.nutriFal, styles.nutriFalText]}>{i}</Text>
            </View>
          )
        })}
      </View>

      {/* <CardCultivos nome="Braquiaria" descricao="Texto"/> */}
      <CardCultivos nome="Cana-de-a????car"
        descricao="A cana-de-a????car ?? um grupo de esp??cie de gram??neas, nativas das regi??es tropicais da
        ??sia. A planta tem entre dois e seis metros de altura, o que varia de acordo com a
        quantidade de sol que ela recebe diariamente, e possui caules robustos, fibrosos e
        articulados, ricos em sacarose."
        onPress={SCana}
      />
      <View style={[styles.configNutri, { marginTop: 10 }]}>
        <Text style={styles.nutriFal}>N</Text>
        <Text style={styles.nutriFal}>P</Text>
        <Text style={styles.nutriFal}>K</Text>
        <Text style={styles.nutriFal}>Ca</Text>
        <Text style={styles.nutriFal}>Mg</Text>
        <Text style={styles.nutriFal}>S</Text>
      </View>
      <View style={[styles.configNutri, { marginBottom: 10 }]}>
        {retornoCana && retornoCana.map((i) => {
          return (
            <View key={i}>
              <Text key={i} style={[styles.nutriFal, styles.nutriFalText]}>{i}</Text>
            </View>
          )
        })}
      </View>
    </ScrollView>
  );
}