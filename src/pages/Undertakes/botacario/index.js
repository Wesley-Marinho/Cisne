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

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <LinearGradient colors={['#ffffff', '#3202D1',]}
                style={global.LinearGradientList}>
                <ScrollView>
                    <Text style={font.subTittlePage}>Dados gerais</Text>
                    <Text style={font.text}>Nome: Boticario</Text>
                    <Text style={font.text}>Site:www.grupoboticario.com.br</Text>
                    <Text style={font.text}>Sede: Curitiba, Brasil</Text>
                    <Text style={font.text}>Tamanho: Mais de 10.000 funcionários e mais de 70mil colaboradores</Text>
                    <Text style={font.text}>Fundação:2010</Text>
                    <Text style={font.text}>Tipo: Empresa: privada</Text>
                    <Text style={font.text}>Setor: Lojas de artigos pessoais e de beleza</Text>
                    <Text style={font.text}>Receita: Desconhecido/Não se aplica</Text>

                    <Text style={font.subTittlePage}>Avaliações</Text>
                    <Text style={font.text}>4,5 (329 avaliações)</Text>

                    <Text style={font.subTittlePage}>Por dentro da empresa</Text>
                    <Text style={font.text}>
                        Funcionário atual, menos de um ano
                        5 de jan. de 2022 - Especialista Em TI em São Paulo, São Paulo

                        Prós
                        Cultura sólida e com ótimos valores
                        Empresa dá muita autonomia e encoraja projetos e ideias
                        Clima leve e informal, com respeito e diversidade
                        Reconhecimento e feedbacks constantes
                        Existe plano de carreira, avaliações de desempenho e possibilidade de mudanças internas
                        Benefícios ótimos e flexíveis

                        Contras
                        A empresa é grande e nem todos os processos são tão claros. Às vezes precisa de alinhamento de muitas áreas antes de aprovar algo.
                        Empresa está em transformação digital e estrutural, então alguns processos ainda estão em adaptação/definição
                    </Text>
                    <Text style={font.text}>
                        Funcionário atual
                        17 de dez. de 2021 - Business Owner em Curitiba
                        Prós
                        Muito humana, benefícios, valores alta gestão, bons resultados
                        Contras
                        Hierarquizada, reconhecimento ruim, valores somente na alta gestão
                    </Text>

                    <Text style={font.subTittlePage}>Notícias relevantes</Text>
                    <Text style={font.text}>Natura, O Boticário e L’Occitane abandonam ministro do Meio Ambiente, Ricardo Salles
                        A Abihpec (associação da indústria de cosméticos) afirmou que decisão de sair do manifesto de apoio ao ministério foi unânime após fala de Salles sobre “passar a boiada”
                        https://revistaforum.com.br/politica/natura-o-boticario-e-loccitane-abandonam-ministro-do-meio-ambiente-ricardo-salles/
                    </Text>
                    <Text style={font.text}>
                        Grupo Boticário é a melhor empresa para trabalhar pelo ranking GPTW étnico-racial 2021
                        O reconhecimento no ranking étnico-racial do GPTW mostra que estamos no caminho certo”, disse Renato Amendola, Gerente de Diversidade e Inclusão do Grupo Boticário. Desde 2019, o Grupo Boticário possui uma equipe integralmente dedicada à implementação de estratégias de projetos de diversidade, inclusão e equidade.
                        https://gptw.com.br/conteudo/artigos/ranking-great-place-to-work-2021/
                    </Text>

                    <Text style={font.subTittlePage}>Info pra gentx!!</Text>
                    <Text style={font.text}>Desde 2019, contamos com um setor estruturado de Diversidade, Equidade e Inclusão, pelo qual estabelecemos metas palpáveis e cotidianas pela ampliação a valorização da pluralidade.
                        (até 2023) Dispor de um quadro com pelo menos 50% de colaboradores negros
                        (até 2025)Contar com pelo menos 50% de mulheres em cargos de diretoria
                        https://www.grupoboticario.com.br/diversidade/
                    </Text>

                    <Text style={font.subTittlePage}>Processos judiciais</Text>
                    <Text style={font.text}>1.672 processos
                        https://www.jusbrasil.com.br/processos/nome/27233974/o-boticario
                    </Text>

                    <Text style={font.subTittlePage}>Somos um consumidor?</Text>
                    <Text style={font.text}>38% da receita de publicidade são destinadas ao público LGBTQIA+
                        (dados ilustrativos)
                    </Text>

                    <Text style={font.subTittlePage}>Quadro de funcionários</Text>
                    <Text style={font.text}>39% dos funcionários pertecem a comunidade LGBTQIA
                        (dados ilustrativos)    
                    </Text>














                </ScrollView>
            </LinearGradient>
        );
    }
}