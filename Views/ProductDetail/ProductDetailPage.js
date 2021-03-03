import React , {useEffect, useState} from "react"
import 
{
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from "react-native";
import * as ImgConstant from "../../Utilities/Constants/ImageConstant"
import ProductDetailPageStyle from "./ProductDetailPage.style"

const ProductDetailPage = ({route, navigation}) => 
{
    const ProdId =   route.params.ProdId
    const PageTitle =   route.params.title
    const [selectedIndex, setSelectedIndex] = useState (1)
    
    const OnClickShare = () => console.log ('Share clicked')
    
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
                        }
                        
                    }, [ProdId])
                    
                    return (
                        //  <SafeAreaView>
                        <ScrollView 
                        contentContainerStyle = {ProductDetailPageStyle.scrollContent}
                        style = {ProductDetailPageStyle.scrollView}
                        // bounces = {false}
                        showsVerticalScrollIndicator = {false}>
                        <View
                        style = {ProductDetailPageStyle.topview}>
                        <Text
                        style = {ProductDetailPageStyle.title}
                        >
                        6 seater dining table for family 
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
                        Future furniture center
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
                        Rs 1000
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
                                uri : 'http://staging.php-dev.in:8844/trainingapp/uploads/prod_img/thumb/medium/9dc6234da018916e545011fa1.jpeg'
                            }
                        }/>
                        
                        <FlatList
                        style = {ProductDetailPageStyle.flatList}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        data = {[{'id' : '1'},{'id' : '2'},{'id' : '3'},{'id' : '4'}]}
                        keyExtractor = {value => value.id}
                        renderItem = {data => {
                            
                            return (
                                <TouchableOpacity
                                style = {
                                    [ProductDetailPageStyle.imgs, 
                                        data.item.id == selectedIndex ? ProductDetailPageStyle.redborder : ProductDetailPageStyle.greyborder
                                    ]}
                                    onPress = {()=> {
                                        setSelectedIndex (data.item.id)
                                    }}>
                                    <Text>{data.item.id}</Text>
                                    
                                    </TouchableOpacity>
                                    )
                                }
                                
                            }
                            />
                            <View
                            style = {ProductDetailPageStyle.divider}
                            />    
                            
                            
                            {/* <Text
                            style = {ProductDetailPageStyle.desc}>Description</Text>
                            <Text
                            style = {ProductDetailPageStyle.descText}
                            >
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.                            
                            </Text> */}
                            
                            </View>
                            {/* Bottom View */}
                            <View
                            style = {ProductDetailPageStyle.bottomView}>
                            <TouchableOpacity
                            style = {ProductDetailPageStyle.buyView}
                            >
                            <Text
                            style = {ProductDetailPageStyle.buyText}>
                            Buy Now
                            </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                            style = {ProductDetailPageStyle.rateView}
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