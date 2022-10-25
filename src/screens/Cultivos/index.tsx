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
        descricao="A soja é uma oleaginosa, pertencente à família Fabaceae, que abrange também plantas como
            o feijão, a lentilha e a ervilha. A cultura desse grão é uma das mais importantes para a
            economia mundial, devido às suas várias possibilidades de aplicação. Na indústria
            alimentícia, por exemplo, ela é usada como matéria-prima na produção de massas,
            chocolates, óleos, margarinas e maioneses, além de diversos outros alimentos."
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
        nome="Café"
        descricao="Além da sua importância no desenvolvimento econômico do Brasil, ele trouxe uma
        contribuição política e social significativa. O café proporcionou a sustentação do
        aparelho político-administrativo e forneceu recursos para a instalação do parque
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
        descricao="A laranja é uma das frutas mais populares e consumidas da família Rutaceae (família dos
          cítricos). Além disso, também podemos usar folhas e flores para extração de óleos essenciais que
          são muito utilizados na medicina natural e perfumarias."
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
        descricao="O milho pertence à família Poaceae, ao gênero Zea e sua espécie única recebe o nome de
        Zea mays. É um cereal de alto valor nutricional e por isso mesmo está sendo largamente
        utilizado na composição de rações animais e outros alimentos humanos.
        É um dos grãos mais assistidos de tecnologias de plantio e colheita, é cosmopolita e sua
        produção em 2004 chegou 600 milhões de toneladas em todo o mundo."
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
        descricao="O alho é considerado um tempero natural de grande utilidade na culinária. É usado no
        preparo de diversos pratos e alimentos. Sempre foi utilizado no tratamento e prevenção de várias doenças. Hoje sabe-se de sua
        grande importância no combate a problemas relacionados ao coração, câncer e infecções."
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
        nome="Feijão"
        descricao="Altamente nutritivo, o feijão se destaca por sua versatilidade na cozinha, sendo a base
        para pratos tradicionais como a feijoada, dobradinha e tropeiro. A leguminosa é rica em proteínas, ferro, cálcio, vitaminas do complexo B, entre outros."
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
        descricao="O tomate está entre as hortaliças mais consumidas no mundo. É uma fonte importante de
        vitaminas A e C. Destaca-se entre as hortaliças como fonte de vitamina B1. Também
        fornece pequenas quantidades de sais minerais, como manganês e potássio."
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
      <CardCultivos nome="Cana-de-açúcar"
        descricao="A cana-de-açúcar é um grupo de espécie de gramíneas, nativas das regiões tropicais da
        Ásia. A planta tem entre dois e seis metros de altura, o que varia de acordo com a
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