import React,{ Component } from 'react';
import{
    View,SafeAreaView,Text,TextInput,StyleSheet,Button, TouchableOpacity,Image
} from 'react-native';
import ButtonView from '../Helper/buttonview';
import TextInputView  from '../Helper/textinputview';

export class LoginView extends Component
{
    render()
    {
        return(
            <SafeAreaView style = {styles.maincontainerStyle}>
                <View style = {styles.containerStyle}>
                    <Text style = {styles.textStyle}>NeoSTORE</Text>
                        <TextInputView source ={require('../Resources/user.png')}  placeholder = 'Username' placeholderTextColor = 'white'/>
                        <TextInputView source ={require('../Resources/password.png')} placeholder = 'Password' placeholderTextColor = 'white'/>
                        <ButtonView title = 'LOGIN'/>


                    <TouchableOpacity>
                        <Text style={{alignSelf:'center', alignItems :'center',
                        justifyContent:'center',
                        color:'white',
                        marginTop: 10,
                        fontWeight : 'bold',
                        fontSize: 20}}>Forgot Password ?</Text>
                    </TouchableOpacity>

                </View>
                <View style = {styles.labelinputcontainerStyle}>
                    <TouchableOpacity>
                        <Text style={{alignSelf:'flex-start', alignItems :'center', textAlignVertical : 'bottom',
                        justifyContent:'center',
                        color:'white',
                        fontWeight : 'bold',
                        fontSize: 15}}>DON'T HAVE AN ACCOUNT?</Text>
                    </TouchableOpacity>
                    <Image style={{justifyContent : 'center' ,
                    alignSelf :'flex-end',height : 30,width :30,alignItems:'flex-end'
                    }} source = {require('../Resources/plus.png')} ></Image>
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
        },
        containerStyle : {
            padding : 20,
            justifyContent : 'center',
            flex:1,
        },
        textStyle : {
            color : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 50,
            marginBottom : 20,
            justifyContent : 'center',
            alignSelf : 'center',
            alignItems : 'center'
        },
          labelinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            padding : 10,
            justifyContent : 'space-between',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 10,
            fontWeight : 'bold',
            fontSize : 16,
            alignItems : 'center',
            textAlignVertical : 'center',
        },
    }
)