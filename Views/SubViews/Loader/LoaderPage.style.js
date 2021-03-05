import { StyleSheet } from "react-native";
import * as ColorConstant from "../../../Utilities/Constants/ColorConstant";
const LoaderPageStyle = StyleSheet.create (
    {
        modal :
        {
            justifyContent : 'center',
            alignItems : 'center',
            
        },
        blurbg : 
        {
            backgroundColor : ColorConstant.BLACK,
            opacity : 0.5,
            height : '100%',
            width : '100%',
            position : 'absolute'
        },
        bg :
        {
            flex : 1, 
            justifyContent : 'center', 
            alignItems : 'center'
        },
        loaderContainer :
        {
            height : 100,
            width : 100,
            backgroundColor : ColorConstant.WHITE,
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : 6
        }
    }
)
export default LoaderPageStyle