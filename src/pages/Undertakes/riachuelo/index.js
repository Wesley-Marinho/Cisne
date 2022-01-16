import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import global from "../../../style/global.js";
import style from './style.js';
import {useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';





export default function App() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const font = StyleSheet.create({
        tittlePage: {
            fontFamily: 'Poppins_400Regular',
            color: '#000000',
            fontSize: 32,
            textAlign: 'center',
        },

        nota: {
            fontFamily: 'Poppins_400Regular',
            color: '#000000',
            fontSize: 32,
            textAlign: 'center',
        },

        notaText: {
            fontFamily: 'Poppins_400Regular',
            color: '#000000',
            fontSize: 18,
            textAlign: 'center',
        },

        socialTittlePage: {
            fontFamily: 'Poppins_400Regular',
            color: '#000000',
            fontSize: 25,
            textAlign: 'center',
        },
        subTittlePage: {
            fontFamily: 'Poppins_400Regular',
            color: '#000000',
            fontSize: 18,
            textAlign: 'left',
            paddingHorizontal: "10%"
        },

        text: {
            fontFamily: 'Poppins_400Regular',
            color: '#000000',
            fontSize: 15,
            textAlign: 'left',
            paddingLeft: "5%"
        },

        tittle: {
            fontFamily: 'Poppins_400Regular',
            color: '#ffffff',
            fontSize: 20,
            textAlign: 'center',

        },

        valorText: {
            fontFamily: 'Poppins_400Regular',
            color: '#000000',
            fontSize: 20,
            textAlign: 'center',
            paddingLeft: "5%"
        },

        textInput: {
            fontFamily: 'Poppins_400Regular',
            marginBottom: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 50,
            height: 48,
            width: "95%",
            fontSize: 17,
        },

        tittleModal: {
            color: '#000000',
            fontSize: 15,
            paddingBottom: "10%",
            textAlign: 'center',
            fontFamily: 'Poppins_400Regular',
        }
    });



    function we() {
        if (modalVisible == true) {
            setModalVisible(false)
        }
        navigation.navigate('Nos')
    }

    function colaborate() {
        if (modalVisible == true) {
            setModalVisible(false)
        }
        navigation.navigate('Colabore')
    }

    function undertakes() {
        if (modalVisible == true) {
            setModalVisible(false)
        }
        navigation.navigate('Empresas')
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <LinearGradient colors={['#ffffff', '#A895C3',]}
                style={global.LinearGradientList}>
                <ScrollView>
                <Text style={font.tittlePage}>Dados gerais</Text>

                <Text style={font.subTittlePage}>Nome: Riachuelo</Text>
                <Text style={font.subTittlePage}>Site:www.riachuelo.com.br</Text>
                    
                <Text style={font.subTittlePage}>Tamanho: Mais de 10.000 funcionários</Text>
                    
                <Text style={font.subTittlePage}>Tipo: Empresa privada</Text>
                <Text style={font.subTittlePage}>Setor: Lojas de departamentos de roupa e de calçados</Text>
                    




                    <View style={style.space}>
                    <Text style={font.tittlePage}>Avaliação</Text>
                    <Text style={font.notaText}>Recomendado por:</Text>
                    </View>

                    <View style={style.spaceRanking}>


                        <View style={style.notaContainer}>
                            <Text style={font.nota}>
                                15%
                            </Text>
                        </View>

                    </View>
                    
                    <Text style={font.notaText}>Dos usuários</Text>




                </ScrollView>
            </LinearGradient>
        );
    }
}