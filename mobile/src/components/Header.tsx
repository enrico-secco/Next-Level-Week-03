import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'; 
/*Botão customizado pra cada SO, com comportamento parecido com o nativo 
Usado pra botões sem borda, que são só texto ou um ícone e sem nenhum fundo*/

import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


interface HeaderProps{
    title: string;
    showCancel?: boolean;
    //title?: string; -> se for não obrigatório.
}

export default function Header({title, showCancel = true}: HeaderProps){ /*recebe e seta o showcancel como true, no padrão ele ta sempre false. */

    const navigation = useNavigation();

    function handleGoBackToHomePage(){
        navigation.navigate('OrphanagesMap');
    }

    return(
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}> 
                <Feather name="arrow-left" size={24} color="#15b6d6" />
            </BorderlessButton>

            <Text style={styles.title}> {title}</Text>


        { showCancel ?
            <BorderlessButton onPress={handleGoBackToHomePage}> 
              <Feather name="x" size={24} color="#ff669d" />
            </BorderlessButton> 
        :(
            <View /> /*Colocou essa view pra não jogar o texto pro lado, porque no header está space-between. */
        )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title:{
        fontFamily: 'Nunito_600SemiBold',
        color:'#8fa7b3',
        fontSize: 16,
    }
})