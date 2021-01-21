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
                        <Text style={{alignSelf:'flex-start', alignItems :'center',marginBottom : 10, textAlignVertical : 'bottom',
                        justifyContent:'center',
                        color:'white',
                        marginTop: 50,
                        marginRight : 20,
                        fontWeight : 'bold',
                        fontSize: 15}}>DON'T HAVE AN ACCOUNT?</Text>
                    </TouchableOpacity>
                    <Image style={{justifyContent : 'flex-end' ,
                    alignSelf :'flex-end', alignItems : 'flex-end',height : 50,width :50,marginLeft : 50
                    }} source = {require('../Resources/user.png')} ></Image>
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
        textinputStyle : {
            flex :1,
            color : 'white',
            backgroundColor : '#e91b1a',
            borderColor :'white',
            borderRadius : 5,
            fontSize : 15,
            fontWeight : 'bold'
        },
        imageStyle: {
            padding: 10,
            margin: 10,
            marginBottom : 5,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
            alignItems : 'center'
          },
          labelinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            padding : 5,
            justifyContent : 'flex-start',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 10,
            fontWeight : 'bold',
            fontSize : 16
        },
    }
)