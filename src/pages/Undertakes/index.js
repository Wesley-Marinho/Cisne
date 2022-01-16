import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, FlatList, } from "react-native";

import global from "../../style/global.js";
import style from './style.js';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
import AppLoading from 'expo-app-loading';




export default function App() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);


    let [fontsLoaded] = useFonts({
        NovaMono_400Regular,
    });

    const font = StyleSheet.create({
        tittlePage: {
            fontFamily: 'NovaMono_400Regular',
            color: '#000000',
            fontSize: 32,
            textAlign: 'center',
        },
        socialTittlePage: {
            fontFamily: 'NovaMono_400Regular',
            color: '#000000',
            fontSize: 25,
            textAlign: 'center',
        },
        subTittlePage: {
            fontFamily: 'NovaMono_400Regular',
            color: '#000000',
            fontSize: 18,
            textAlign: 'center',
        },

        text: {
            fontFamily: 'NovaMono_400Regular',
            color: '#000000',
            fontSize: 15,
            textAlign: 'left',
            paddingLeft: "5%"
        },

        tittle: {
            fontFamily: 'NovaMono_400Regular',
            color: '#ffffff',
            fontSize: 20,
            textAlign: 'center',

        },

        valorText: {
            fontFamily: 'NovaMono_400Regular',
            color: '#000000',
            fontSize: 20,
            textAlign: 'center',
            paddingLeft: "5%"
        },

        textInput: {
            fontFamily: 'NovaMono_400Regular',
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
            fontFamily: 'NovaMono_400Regular',
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

    function home() {
        if (modalVisible == true) {
            setModalVisible(false)
        }
        navigation.navigate('Home')
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <LinearGradient colors={['#ffffff', '#3202D1',]}
                style={global.LinearGradientList}>

                <View style={style.buttonContainer}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => {
                            setModalVisible(true);
                        }}>
                        <Feather name="menu" size={25} color={"#000000"} />
                    </TouchableOpacity>
                </View>

                <View >
                    <Text style={font.tittlePage}>Emprezas</Text>
                    <View style={style.space}>

                        <TouchableOpacity
                        onPress={() =>  navigation.navigate('carrefour')}>
                            <View style={style.spaceRanking}>
                                <Feather name="menu" size={50} color={"#000000"} />
                                <Text style={font.valorText}>Carrefour</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                         onPress={() =>  navigation.navigate('riachuelo')}>
                            <View style={style.spaceRanking}>
                                <Feather name="menu" size={50} color={"#000000"} />
                                <Text style={font.valorText}>Riachuelo</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                         onPress={() =>  navigation.navigate('boticario')}>
                            <View style={style.spaceRanking}>
                                <Feather name="menu" size={50} color={"#000000"} />
                                <Text style={font.valorText}>Boticario</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={style.centeredView}>

                        <View style={style.modalView}>

                            <View style={style.closeButtonContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                    }}>
                                    <FontAwesome name="close" size={24} color="#000000" />
                                </TouchableOpacity>
                            </View>

                            <View style={style.modalItems}>
                                <View style={style.spaceModal}>
                                    <TouchableOpacity style={style.openButton}
                                        onPress={() => { home(); }}>
                                        <Text style={font.tittle}>Inicio</Text>
                                    </TouchableOpacity>
                                </View>


                                <View style={style.spaceModal}>
                                    <TouchableOpacity style={style.openButton}
                                        onPress={() => { we(); }}>
                                        <Text style={font.tittle}>Quem somos</Text>
                                    </TouchableOpacity>
                                </View>



                                <View style={style.spaceModal}>
                                    <TouchableOpacity style={style.openButton}
                                        onPress={() => { colaborate(); }}>
                                        <Text style={font.tittle}>Colabore conosco</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>


            </LinearGradient>
        );
    }
}