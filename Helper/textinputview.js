// Custom TextInput

import React from 'react';
import {TextInput ,StyleSheet,View,Image} from 'react-native';

const TextInputView = (props) => {
  return (
      <View style = {styles.textinputcontainerStyle}>
          <Image style = {styles.imageStyle} source = {props.source}></Image>
          <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor='#FFFFFF'
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={styles.textinputStyle}
      />
      </View>
    
  );
};


export default TextInputView;

const styles = StyleSheet.create(
    {
        textinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            borderColor :'white',
            padding : 5,
            borderWidth : 1.5,
            justifyContent : 'center',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 10
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
    }
)
