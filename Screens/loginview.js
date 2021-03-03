import React,{ useState } from 'react'; 
import{
    View,SafeAreaView,Text,TextInput,StyleSheet,Button, TouchableOpacity,Image
} from 'react-native';
import ButtonView from '../Helper/buttonview';
import TextInputView  from '../Helper/textinputview';

const LoginView = () =>
{
    let[Username,setUserName] = useState('');
    let[Password,setPassword] = useState('');

    //Email Validation
    const ValidateEmail = () =>
    {
        // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        // if (!pattern.test(input["Username"])) {
        //   isValid = false;
        //   errors["email"] = "Please enter valid email address.";
        // }
    };

    //Username and password validation
    const handleLogin = () =>
    {
        console.log(Username,Password);
        if(!Username){
            alert('Please enter username.');
            return;
        }
        else if(!Password && Password.trim() && Password.length > 6)
        {
            alert('Please enter valid password.')
            return;
        }
        else if(!ValidateEmail)
        {
            alert('Please enter valid email.')
            return;
        }
        else{

        }
    };

    return(
        <SafeAreaView style = {styles.maincontainerStyle}>
            <View style = {styles.containerStyle}>
                <Text style = {styles.textStyle}>NeoSTORE</Text>
                    <TextInputView source ={require('../Resources/user.png')}  placeholder = 'Username' placeholderTextColor = 'white' onChangeText = {(Username) => setUserName(Username)}/>
                    <TextInputView source ={require('../Resources/password.png')} placeholder = 'Password' placeholderTextColor = 'white' onChangeText = {(Password) => setPassword(Password)}/>
                    <ButtonView title = 'LOGIN' onPress = {handleLogin}/>


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

export default LoginView;