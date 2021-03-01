import React, { useState } from "react"
import 
{
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View
} from "react-native";
import DrawerViewModel from "../../ViewModel/Drawer/DrawerViewModel";
import DrawerHeader from "./DrawerHeader";
import DrawerItem from "./DrawerItems";
import * as Colors from "../../Utilities/Constants/ColorConstant";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor : Colors.MENU_BG
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  flatlistBg : 
  {
    backgroundColor : Colors.MENU_BG
  }
});

const DrawerMenu = (props) => 
{
  const [selectedId , SetSelectedId] = useState(-1);
  const renderItem = ({ item }) => {
    const backgroundColor = Colors.MENU_BG
    
    return (
      <DrawerItem
      item={item}
      onPress={
        () => 
        {
          SetSelectedId(item.id)
          props.navigation.navigate ('ProductList')
        }
      }
      style={{ backgroundColor }}
      />
      );
    };
    
    
    return (
      <SafeAreaView style={styles.container}>
      <FlatList
      data={DrawerViewModel.GetMenuItems()}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      ListHeaderComponent = {DrawerHeader}
      style = {styles.flatlistBg}
      ItemSeparatorComponent = {()=> {
        return (
          <View style = {{height : 0.5, backgroundColor : 'black'}}>

          </View>
        )
      }}
      />
      </SafeAreaView>
      ) 
    }
    export default DrawerMenu