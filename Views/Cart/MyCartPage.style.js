import { StyleSheet } from "react-native";
import * as ColorConstant from "../../Utilities/Constants/ColorConstant";
import * as FontConstant from "../../Utilities/Constants/FontConstant";

const MyCartPageStyle = StyleSheet.create({
  rowBack: {
    alignItems: "flex-end",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  rightSwipeDeleteView: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  image: {
    resizeMode: "contain",
    height: 40,
    width: 40,
    backgroundColor: "red",
  },
  flatList: {
    height: "100%",
    width: "100%",
    backgroundColor: ColorConstant.WHITE,
  },
  totalview: {
    height: 84,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  total: {
    fontSize: 20,
    fontFamily: FontConstant.GOTHAM_BOLD,
    textAlign: "center",
    flex: 0.5,
  },
  priceView: {
    flex: 0.5,
    flexDirection: "row",
    marginRight: 30,
    justifyContent: "flex-end",
  },
  pricetext: {
    fontFamily: FontConstant.GOTHAM_BOLD,
    fontSize: 20,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#333333",
  },
  orderView : 
  {
    width : '80%',
    height : 54,
    backgroundColor : 'red',
    borderRadius : 6,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 20
  },
  ordertext : 
  {
    fontFamily : FontConstant.GOTHAM_BOLD,
    fontSize : 25,
    color : ColorConstant.WHITE,
    textAlign : 'center'
  }
});
export default MyCartPageStyle;
