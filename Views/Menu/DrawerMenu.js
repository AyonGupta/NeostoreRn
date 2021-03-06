import React, { useEffect, useState } from "react"
import 
{
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View,
  Platform
} from "react-native"
import DrawerViewModel from "../../ViewModel/Drawer/DrawerViewModel"
import DrawerHeader from "./DrawerHeader"
import DrawerItem from "./DrawerItems"
import * as Colors from "../../Utilities/Constants/ColorConstant"
import { useDispatch, useSelector } from "react-redux"
import CommonMethods from "../../Utilities/Common/CommonMethods"
import * as LocalStorageKeys from "../../Utilities/Constants/LocalStorageKeys";
import { useIsDrawerOpen } from '@react-navigation/drawer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? StatusBar.currentHeight || 0 : 0,
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
  const [refresh , SetRefresh] = useState(false);
  const [MenuItems , SetMenuItems] = useState(undefined);

  //let MenuItems = DrawerViewModel.GetMenuItems()
  const dispatch = useDispatch ()
  const AccountData = useSelector (state => state.myAccountReducer.UserData)

  const renderItem = ({ item }) => {
    const backgroundColor = Colors.MENU_BG
    return (
      <DrawerItem
      item={item}
      onPress={
        () => 
        {
          SetSelectedId(item.id)
          const Page = DrawerViewModel.OnItemSelected (item.id)
          if (Page != undefined) 
          {
            if (Page.id != undefined) 
            {
              if (Page.id === '10') {
                dispatch(DrawerViewModel.Logout())
                return
              } 
            }
            props.navigation.navigate 
            (Page.page, 
              {
                'ProductId' : Page.id != undefined ? Page.id : '',
                'title' : Page.title != undefined ? Page.title : ''
              })
              
            }
            
          }
        }
        style={{ backgroundColor }}
        />
        );
      };
      
      
      const isDrawerOpen = useIsDrawerOpen();
      
      useEffect (()=> 
      {
        if (isDrawerOpen) 
        {
          SetMenuItems(DrawerViewModel.GetMenuItems())
          dispatch (DrawerViewModel.GetAccountDetails())
        }
      }, [isDrawerOpen])
      

      useEffect (()=>{
        if (AccountData.data != undefined) 
        {
          if (AccountData.data.total_carts > 0) {
            MenuItems[1].badge = AccountData.data.total_carts
          }
          if (AccountData.data.total_orders > 0) {
            MenuItems[8].badge = AccountData.data.total_orders
          }
          SetRefresh (!refresh)
        }
      }, [AccountData])

      return (
        <SafeAreaView style={styles.container}>
        <FlatList
        data={MenuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={refresh}
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