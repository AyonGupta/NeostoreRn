import React, { useEffect, useState } from "react"
import 
{ 
    View,
    Text,
    FlatList,
    SafeAreaView
} from "react-native"
import { useDispatch, useSelector } from "react-redux";
import ProductViewModel from "../../ViewModel/Product/ProductViewModel";
import ProductStyle from "./ProductList.style";
import ProductItem from "./ProductItem";

const ProductList = ({route, navigation}) => 
{
    const ProdId            =   route.params.ProductId
    const dispatch          =   useDispatch()
    const ProductListData   =   useSelector (state => state.productReducer.ProductData)
    const [page, setPage]   =   useState(1)
    const [limit, setLimit]   =   useState(10)
    useEffect (()=> 
    {
        if (ProdId != undefined) 
        {
            dispatch (ProductViewModel.GetProductListById(ProdId, limit, page))
            navigation.setOptions (
                {
                    title : route.params.title
                })
            }
        }, [ProdId])
        
        
        
        return (    
            <SafeAreaView>
            <FlatList 
            data = {ProductListData.data}
            keyExtractor = {item => item.id.toString()}
            renderItem = {data => 
                <ProductItem
                name = {data.item.name}
                image = {data.item.product_images}
                producer = {data.item.producer}
                cost = {data.item.cost}
                />}
                style = {ProductStyle.flatlist}
                contentContainerStyle = {{paddingBottom : 84}}
                />
                </SafeAreaView>
                )
            }
            export default ProductList