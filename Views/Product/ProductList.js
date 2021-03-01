import React, { useEffect } from "react"
import 
{ 
    View,
    Text,
    FlatList
} from "react-native"
import { useDispatch, useSelector } from "react-redux";

import { GetProductList } from "../../Redux/Action/ProductAction";

const ProductList = ({route, navigation}) => 
{
    const ProdId            =   route.params.ProductId
    const dispatch          =   useDispatch()
    const ProductListData   =   useSelector (state => state.productReducer.ProductData)

    useEffect (()=> 
    {
        console.log('Prodct id = ', ProdId)
        dispatch (GetProductList (ProdId, '10', '1'))
    }, [ProdId])

    console.log (ProductListData)

    return (
        <View>
        <Text>{JSON.stringify (ProductListData)}</Text>
        </View>
        )
    }
    export default ProductList