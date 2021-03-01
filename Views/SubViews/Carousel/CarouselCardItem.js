import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const SLIDER_HEIGHT = Dimensions.get('window').width 

const CarouselCardItem = (props) => 
{
    return (
        <View style = {{justifyContent : 'center', alignItems : 'center', width : SLIDER_WIDTH, backgroundColor : 'red', overflow : 'visible'}}>
            <Image
            style = {{backgroundColor : 'green', height : '100%', width : '100%'}}/>
        </View>
        )
    }
    export default CarouselCardItem