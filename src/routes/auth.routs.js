import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import undertakes from '../pages/Undertakes';
import we from '../pages/We';
import boticario from "../pages/Undertakes/botacario/index.js"
import riachuelo from "../pages/Undertakes/riachuelo/index.js"
import carrefour from "../pages/Undertakes/carrefour/index.js"


import colaborate from '../pages/Collaborate';
const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Home" component={Home} options={{ headerShown: false }} />

            <AuthStack.Screen name="Empresas" component={undertakes}
                options={{

                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                    headerShown: false,
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Empresas'
                }} />

            <AuthStack.Screen name="riachuelo" component={riachuelo}
                options={{

                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                    
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Riachuelo'
                }} />

            <AuthStack.Screen name="carrefour" component={carrefour}
                options={{

                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                   
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Carrefour'
                }} />

            <AuthStack.Screen name="boticario" component={boticario}
                options={{

                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                   
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Boticario'
                }} />


            <AuthStack.Screen name="Nos" component={we}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                    headerShown: false,
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Quem somos'
                }} />

            <AuthStack.Screen name="Colabore" component={colaborate}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                    headerShown: false,
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Colabore conosco'
                }} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;