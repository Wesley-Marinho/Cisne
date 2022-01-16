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

                    <Text style={font.text}>Nome: Riachuelo</Text>
                    <Text style={font.text}>Site:www.riachuelo.com.br</Text>
                    <Text style={font.text}> Sede: São Paulo, Brasil</Text>
                    <Text style={font.text}>Tamanho: Mais de 10.000 funcionários</Text>
                    <Text style={font.text}>Fundação:1947</Text>
                    <Text style={font.text}>Tipo: Empresa: privada</Text>
                    <Text style={font.text}>Setor: Lojas de departamentos de roupa e de calçados</Text>
                    <Text style={font.text}>Receita:De US$ 10 a US$ 25 milhões</Text>

                    <Text style={font.subTittlePage}>Avaliações</Text>
                    <Text style={font.text}>4,4 (675 avaliações)</Text>

                    <Text style={font.subTittlePage}>Por dentro da empresa</Text>
                    <Text style={font.text}>
                        Funcionário atual, menos de um ano
                        9 de fev. de 2021 - Funcionário confidencial
                        Prós
                        Meus colegas são ótimos, mas a empresa é horrível.
                        Contras
                        Uma burocracia infinita. Nenhum cuidado com o funcionário, total descaso com recursos necessários para os funcionários desenvolverem suas atividades.
                    </Text>

                    <Text style={font.subTittlePage}>Notícias relevantes</Text>
                    <Text style={font.text}>
                        Dono da Riachuelo declara apoio à bancada evangélica
                        https://observatoriog.bol.uol.com.br/noticias/lgbts-organizam-boicote-a-riachuelo-apos-dono-declarar-apoio-a-bancada-evangelica
                    </Text>
                    <Text style={font.text}>
                        Bolsonarista, dono da Riachuelo diz ser contra taxação de fortunas porque “empobrece ricos”
                        "Esse é um imposto que diminui a desigualdade, mas achatando a pirâmide, empobrecendo os ricos", disse Flávio Rocha
                        https://www.diariodocentrodomundo.com.br/essencial/dono-da-riachuelo-diz-que-taxar-grandes-fortunas-reduz-desigualdade-mas-empobrece-ricos/
                    </Text>
                    
                    <Text style={font.subTittlePage}>Info pra gentx!!</Text>
                    <Text style={font.text}> Riachuelo tornou-se signatária do Fórum de Empresas e Direitos LGBTI +, em 2019. Assumindo 10 compromissos com o movimento LGBT+
                            https://www.riachuelo.com.br/moda-que-transforma/sustentabilidade/diversidade
                    </Text>

                    <Text style={font.subTittlePage}>Processos judiciais</Text>
                    <Text style={font.text}>
                    16.000
                    https://www.jusbrasil.com.br/processos/nome/27709324/lojas-riachuelo-sa
                    </Text>

                    <Text style={font.subTittlePage}>Somos um consumidor?</Text>
                    <Text style={font.text}>12% da receita de publicidade são destinadas ao público LGBTQIA+
                        (dados ilustrativos)
                    </Text>

                    <Text style={font.subTittlePage}>Quadro de funcionários</Text>
                    <Text style={font.text}>13% dos funcionários e colaboradores pertecem a comunidade LGBTQIA
                        (dados ilustrativos)    
                    </Text>









                </ScrollView>
            </LinearGradient>
        );
    }
}