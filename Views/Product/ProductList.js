import React, { useEffect } from "react"
import 
{ 
    View,
    Text
} from "react-native";
const ProductList = ({route, navigation}) => 
{
    const ProdId = route.params.ProductId
    useEffect (()=> 
    {
       // console.log (navigation)
        console.log (ProdId)
    }, [])
    return (
        <View>
        <Text>Product list</Text>
        </View>
        )
    }
    export default ProductList