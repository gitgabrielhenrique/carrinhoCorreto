import React from "react"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import logo from "../../../../assets/logo.png"
import TextStyle from "../../../components/Text"

type Props = {
  nome: string,
  nomeOtica: string,
  descricao: string,
  preco: string,
  botao: string
}


export default function Detalhe({nome, nomeOtica, descricao, preco, botao}: Props) {
    return (
    <>
    <TextStyle style={style.nome}>{nome}</TextStyle>
        <View style={style.otica}>
            <Image source={logo} style={style.imagemotica}/>
        <Text style={style.nomeOtica}>{nomeOtica}</Text>
        </View>
        <Text style={style.descricao}>{descricao}</Text>
    <Text style={style.preco}>{preco}</Text>
    <TouchableOpacity style={style.botao}>
      <Text style={style.textobotao}>Comprar</Text>
    </TouchableOpacity>
    </>
    )
}

const style = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontFamily: 'MontSerratBold'
    },
    otica: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemotica: {
        width: 32,
        height: 32
    },
    nomeOtica: {
        fontFamily: "MontSerratBold",
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontFamily: "MontSerratItalic",
    },
    preco: {
        fontSize: 26,
        fontFamily: "MontSerratRegular",
        color: "#2A9F85",
        marginTop: 8
    },
    botao: {
      marginTop: 16,
      backgroundColor: "#2a9f85",
      color: "#2a9f85",
      borderRadius: 6
    },
    textobotao: {
      textAlign: "center",
      color: "#ffffff",
      fontSize: 16,
      lineHeight: 26,
      fontFamily: "MontSerratBold"
    }
})
