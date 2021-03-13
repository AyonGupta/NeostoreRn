import React from "react"
import 
{
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native"
import ProductItemStyle from "./ProductItem.style";
import * as ImgConstant from "../../Utilities/Constants/ImageConstant";
const ProductItem = (props) => {
    return (
        <TouchableOpacity
        onPress = {()=> props.OnPress(props.id, props.name)}>
        <View
        style = {ProductItemStyle.container}>
        <Image
        style = {ProductItemStyle.image}
        source = {
            {
                uri : props.image
            }
        }
        />
        <View >
        <Text
        style = {ProductItemStyle.title}
        >
        {props.name}
        </Text>
        <Text
        style = {ProductItemStyle.subtitle}>
        {props.producer}
        </Text>
        <View
        style = {ProductItemStyle.pricerating}>
        <Text
        style = {ProductItemStyle.price}
        >Rs {props.cost}
        </Text>
        <View
        style = {ProductItemStyle.ratingView}>
        <Image
        style = {ProductItemStyle.ratingStar}
        source = {ImgConstant.PROD_CHECK_STAR}
        />
        <Image
        style = {ProductItemStyle.ratingStar}
        source = {ImgConstant.PROD_CHECK_STAR}
        />
        <Image
        style = {ProductItemStyle.ratingStar}
        source = {ImgConstant.PROD_CHECK_STAR}
        />
        <Image
        style = {ProductItemStyle.ratingStar}
        source = {ImgConstant.PROD_UNCHECK_STAR}
        />
        <Image
        style = {ProductItemStyle.ratingStar}
        source = {ImgConstant.PROD_UNCHECK_STAR}
        />
        </View>
        </View>
        </View>
        
        <View style = {ProductItemStyle.bottomLine}>
        </View>
        </View>
        </TouchableOpacity>
        )
    }
    
    
    
    export default ProductItem
    