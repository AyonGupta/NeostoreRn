import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width 
import * as ImgConstant from "../../../Utilities/Constants/ImageConstant"
import * as ColorConstant from "../../../Utilities/Constants/ColorConstant";
const CarouselCardItem = (props) => 
{
    const getSliderImage = () => 
    {
        let Item = null
        if (props.item == 13) {
            Item = ImgConstant.HOME_SLIDER_1
        } else if (props.item == 14) {
            Item = ImgConstant.HOME_SLIDER_2

        }else if (props.item == 15) {
            Item = ImgConstant.HOME_SLIDER_3

        }else if (props.item == 16) {
            Item = ImgConstant.HOME_SLIDER_4

        }
        return Item
    }

    return (
        <View style = {{justifyContent : 'center', alignItems : 'center', width : SLIDER_WIDTH, backgroundColor : ColorConstant.APP_BG, overflow : 'visible'}}>
            <Image
            style = {{height : '100%', width : '100%'}}
            source = {getSliderImage()}/>
        </View>
        )
    }
    export default CarouselCardItem