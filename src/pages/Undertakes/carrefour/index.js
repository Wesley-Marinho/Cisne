import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import global from "../../../style/global.js";
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
            <LinearGradient colors={['#ffffff', '#3202D1',]}
                style={global.LinearGradientList}>
                <ScrollView>
                <Text style={font.subTittlePage}>Dados gerais</Text>
                    <Text style={font.text}>Nome: Carrefour</Text>
                    <Text style={font.text}>Site:www.carrefour.com.br</Text>
                    <Text style={font.text}>Sede: Massy, França</Text>
                    <Text style={font.text}>Tamanho: Mais de 10.000 funcionários</Text>
                    <Text style={font.text}>Fundação:1958</Text>
                    <Text style={font.text}>Tipo: Empresa: privada</Text>
                    <Text style={font.text}>Setor: Lojas de artigos gerais e grandes lojas</Text>
                    <Text style={font.text}>Receita: Desconhecido/Não se aplica</Text>

                    <Text style={font.subTittlePage}>Avaliações</Text>
                    <Text style={font.text}>3,8 (1.590 avaliações)</Text>

                    <Text style={font.subTittlePage}>Por dentro da empresa</Text>
                    <Text style={font.text}>Ex-funcionário, menos de um ano.
                        21 de jul. de 2021 - Assistente Administrativo em Curitiba
                        Prós
                        Absolutamente nenhum, não tem nada o que possa recomendar.
                        Contras
                        Ética questionável, exceções às regras que valem a todos.

                        https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Carrefour-EI_IE3118.13,22.htm
                    </Text>

                    <Text style={font.subTittlePage}>Notícias relevantes</Text>
                    <Text style={font.text}>Carrefour é condenado a indenizar cliente chamado de ‘bicha’ por atendentes em BH
                        https://g1.globo.com/mg/minas-gerais/noticia/carrefour-e-condenado-a-indenizar-cliente-chamado-de-bicha-por-atendentes-em-bh.ghtml
                    </Text>
                    <Text style={font.text}>TJ-SP condena Carrefour por agressão de seguranças a casal homossexual... 
                    https://noticias.uol.com.br/colunas/rogerio-gentile/2020/11/23/carrefour-e-condenado-por-agressao-de-segurancas-a-casal-homossexual.htm
                    </Text>

                    <Text style={font.subTittlePage}>Info pra gentx!!</Text>
                    <Text style={font.text}>O carrefour possui um grupo de afinidade LGBT, o "Todxs", que reúne funcionários voluntariamente para discutir temas relacionados ao coletivo LGBT+</Text>
                    <Text style={font.text}>Dos mais de 10.000 funcionários, o carrefour chegou até 160 profissionais trans
                        www.cnnbrasil.com.br/business
                    </Text>

                    <Text style={font.subTittlePage}>Processos judiciais</Text>
                    <Text style={font.text}>101mil processos
                    https://www.jusbrasil.com.br/processos/nome/3298161/carrefour-comercio-e-industria-ltda
                    </Text>

                    <Text style={font.subTittlePage}>Somos um consumidor?</Text>
                    <Text style={font.text}>08% da receita de publicidade são destinadas ao público LGBTQIA+
                        (dados ilustrativos)
                    </Text>

                    <Text style={font.subTittlePage}>Quadro de funcionários</Text>
                    <Text style={font.text}>09% dos funcionários pertecem a comunidade LGBTQIA
                        (dados ilustrativos)    
                    </Text>












                </ScrollView>
            </LinearGradient>
        );
    }
}