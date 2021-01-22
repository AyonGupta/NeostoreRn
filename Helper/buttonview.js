// Custom Button

import React from 'react';
import {StyleSheet,TouchableOpacity,Text} from 'react-native';

const ButtonView = (props) => {
  return (
        <TouchableOpacity style = {styles.buttonStyle}>
            <Text style = {styles.buttontextStyle}>{props.title}</Text>
        </TouchableOpacity>
  );
};


export default ButtonView;

const styles = StyleSheet.create(
    {
        buttonStyle : {
            elevation : 2,
            backgroundColor : '#e91b1a',
            color : 'white',
            alignSelf : 'center',
            marginTop : 10,
            width : '100%',
            margin : 10,
            padding : 10,
            opacity : 10
        },
        buttontextStyle : {
            color : '#e91b1a',
            backgroundColor : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 25,
            padding : 15,
            alignItems : 'center',
            justifyContent : 'center',
            textAlign : 'center',
        },
    }
)
