import { StyleSheet } from "react-native";
import * as ColorConstant from "../../Utilities/Constants/ColorConstant";
const MyCartPageStyle = StyleSheet.create (
    {
        rowBack: {
            alignItems: "flex-end",
            backgroundColor: "white",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
        },
        rightSwipeDeleteView : 
        {
            height : 60,
            width : 60,
            borderRadius : 30,
            justifyContent : 'center',
            alignItems : 'center',
            marginHorizontal : 20
        },
        image : 
        {
            resizeMode : 'contain',
            height : 40,
            width : 40,
            backgroundColor : 'red'
        },
        flatList : 
        {
            height : '100%',
            width : '100%',
            backgroundColor : ColorConstant.WHITE
        }
    })
    export default MyCartPageStyle