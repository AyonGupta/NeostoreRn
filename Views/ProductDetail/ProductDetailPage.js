import React , {useEffect, useState} from "react"
import 
{
    TextInput,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    Share,
    Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ImgConstant from "../../Utilities/Constants/ImageConstant"
import ProductDetailPageStyle from "./ProductDetailPage.style"
import ProductDetailViewModel from "../../ViewModel/ProductDetail/ProductDetailViewModel";
import BuyPopup from "../SubViews/Popup/Buy/BuyPopup";
import * as StringConstant from "../../Utilities/Constants/StringConstant";
const ProductDetailPage = ({route, navigation}) => 
{
    const ProdId =   route.params.ProdId
    const PageTitle =   route.params.title
    const [selectedIndex, setSelectedIndex] = useState (1)
    const [buyNowVisible, setBuyNowVisible] = useState (false)

    const ProductData   =   useSelector (state => state.productDetailReducer.ProductData)
    const BuyData   =   useSelector (state => state.productDetailReducer.BuyData)
    const ErrorData   =   useSelector (state => state.productDetailReducer.errorData)

    const dispatch = useDispatch()
    const OnClickShare = async() => 
    {
        try {
            const result = await Share.share({
                message:
                'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    }
    
    
    const [selectedImageUri, SetSelectedImageUri] = useState('')
    useEffect (
        () => 
        {
            navigation.setOptions (
                {
                    headerLeft : () => 
                    (
                        <TouchableOpacity
                        onPress = {()=> {
                            navigation.goBack()
                        }}
                        style = {ProductDetailPageStyle.leftHeader}>
                        <Image 
                        source = {ImgConstant.RP_IMG_BACK}
                        style = {{height : 30, width : 30, }}
                        />
                        </TouchableOpacity>
                        )
                    })
                    
                }, [])
                
                useEffect(()=> {
                    if (ProdId != undefined) 
                    {
                        navigation.setOptions (
                            {
                                title : PageTitle
                            })
                            
                            dispatch (ProductDetailViewModel.GetProductDetailById (ProdId))
                            
                        }
                    }, [ProdId])
                    
                    
                    useEffect (()=> 
                    {
                        if (ProductData.product_images != undefined) 
                        {
                            SetSelectedImageUri (ProductData.product_images[0].image)
                        }
                    }, [ProductData.product_images])
                    
                    
                    const OnClickRate = () => 
                    {

                    }

                    const OnClickBuy = () => {
                        setBuyNowVisible (true)
                    }

                    useEffect (()=> 
                    {
                        if (BuyData != undefined) 
                        {
                            Alert.alert (StringConstant.LP_NEOSTORE, "Added to cart successfully")
                        }
                    }, [BuyData])

                    useEffect (()=> 
                    {
                        if (ErrorData != undefined) 
                        {
                            Alert.alert (StringConstant.LP_NEOSTORE, ErrorData.toString())
                        }
                    }, [ErrorData])

                    return (
                        //  <SafeAreaView>
                        <ScrollView 
                        contentContainerStyle = {ProductDetailPageStyle.scrollContent}
                        style = {ProductDetailPageStyle.scrollView}
                        // bounces = {false}
                        showsVerticalScrollIndicator = {false}>

                        <BuyPopup 
                        visible = {buyNowVisible} 
                        name = {ProductData.name}  
                        OnClose = {(quantity)=> 
                        {
                            setBuyNowVisible (false)
                            
                            if (quantity != undefined) 
                            {
                                if (quantity.length > 0) {
                                    dispatch (ProductDetailViewModel.Buy (ProdId, quantity))
                                }
                            }
                        }}
                        image = {selectedImageUri}/>
                        <View
                        style = {ProductDetailPageStyle.topview}>
                        <Text
                        style = {ProductDetailPageStyle.title}
                        >
                        {ProductData.name}
                        </Text>
                        <Text
                        style = {ProductDetailPageStyle.category}
                        >
                        Category - Tables 
                        </Text>
                        
                        <View
                        style = {ProductDetailPageStyle.producerRatingView}>
                        <View
                        style = {ProductDetailPageStyle.producerView}>
                        <Text
                        style = {ProductDetailPageStyle.producerName}
                        >
                        {ProductData.producer}
                        </Text>
                        </View>
                        <View
                        style = {ProductDetailPageStyle.ratingView}>
                        <Image
                        style = {ProductDetailPageStyle.ratingStar}
                        source = {ImgConstant.PROD_CHECK_STAR}/>
                        <Image
                        style = {ProductDetailPageStyle.ratingStar}
                        source = {ImgConstant.PROD_CHECK_STAR}/>
                        <Image
                        style = {ProductDetailPageStyle.ratingStar}
                        source = {ImgConstant.PROD_CHECK_STAR}/>
                        <Image
                        style = {ProductDetailPageStyle.ratingStar}
                        source = {ImgConstant.PROD_CHECK_STAR}/>
                        <Image
                        style = {ProductDetailPageStyle.ratingStar}
                        source = {ImgConstant.PROD_CHECK_STAR}/>
                        </View>
                        </View>
                        </View>
                        
                        {/* Middle view */}
                        <View
                        style = {ProductDetailPageStyle.middleView}>
                        <View 
                        style = {ProductDetailPageStyle.priceShareView}>
                        <Text
                        style = {ProductDetailPageStyle.price}
                        >
                        Rs {ProductData.cost}
                        </Text>
                        
                        <TouchableOpacity
                        style = {ProductDetailPageStyle.share}
                        onPress = {OnClickShare}>
                        <Image
                        source = {ImgConstant.PROD_SHARE}/>
                        </TouchableOpacity>
                        </View>
                        
                        <Image
                        style = {ProductDetailPageStyle.bannerImage}
                        source = {
                            {
                                uri : selectedImageUri 
                            }
                        }/>
                        
                        <FlatList
                        style = {ProductDetailPageStyle.flatList}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        data = {ProductData.product_images}
                        keyExtractor = {value => value.id.toString()}
                        renderItem = {data => {
                            
                            return (
                                <TouchableOpacity
                                style = {
                                    [ProductDetailPageStyle.imgs, 
                                        data.item.id == selectedIndex ? ProductDetailPageStyle.redborder : ProductDetailPageStyle.greyborder
                                    ]}
                                    onPress = {()=> {
                                        setSelectedIndex (data.item.id)
                                        SetSelectedImageUri (data.item.image)
                                    }}>
                                    <Image
                                    style = {{flex : 1}}
                                    source = {
                                        {
                                            uri : data.item.image 
                                        }}/>
                                        
                                        </TouchableOpacity>
                                        )
                                    }
                                    
                                }
                                />
                                <View
                                style = {ProductDetailPageStyle.divider}
                                />    
                                
                                
                                <Text
                                style = {ProductDetailPageStyle.desc}>Description</Text>
                                {/* <Text
                                    style = {ProductDetailPageStyle.descText}
                                    >
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.                            
                                </Text>  */}
                                
                                </View>
                                {/* Bottom View */}
                                <View
                                style = {ProductDetailPageStyle.bottomView}>
                                <TouchableOpacity
                                style = {ProductDetailPageStyle.buyView}
                                onPress = {OnClickBuy}
                                >
                                <Text
                                style = {ProductDetailPageStyle.buyText}>
                                Buy Now
                                </Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                style = {ProductDetailPageStyle.rateView}
                                onPress = {OnClickRate}
                                >
                                <Text
                                style = {ProductDetailPageStyle.rateText}>
                                Rate Now
                                </Text>
                                </TouchableOpacity>
                                
                                </View>
                                </ScrollView>
                                //  </SafeAreaView>
                                )
                            }
                            export default ProductDetailPage