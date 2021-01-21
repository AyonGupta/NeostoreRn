import React,{ Component } from 'react';
import{
    View,SafeAreaView,Text,StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

export class SplashScreen extends Component
{
    render()
    {
        return(
            <SafeAreaView>
                <View style = {styles.maincontainerStyle}>
                    <Text style = {styles.textStyle}>NeoSTORE</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create(
    {
        maincontainerStyle : {
            backgroundColor :'#e91b1a',
            padding : 20,
            height : '100%',
            width : '100%',
            justifyContent : 'center',
        },
        textStyle : {
            color : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 50,
            marginBottom : 20,
            justifyContent : 'center',
            alignSelf : 'center',
        },
    }
)