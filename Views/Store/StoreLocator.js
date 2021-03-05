import React from "react"
import 
{
    View,
    SafeAreaView,
    Text,
    FlatList,
    Image
  } from "react-native"
 import StoreLocatorViewModel  from "../../ViewModel/Store/StoreLocatorViewModel";
 import StoreItemStyle from "./StoreItem.style";
 import StoreLocatorListStyle from "./StoreLocatorList.style";
import StoreItem from "./StoreItem";

  const StoreLocator = () => 
  {
    const StoreItems = StoreLocatorViewModel.GetStoreLocatorList();
      return (
          <SafeAreaView>
              <View>
              <Image source = {require ('../../Assets/Images/ic_storelocator_map.png')}
              style = {{ width: 420, height: 300 }}
              />

              <FlatList 
                data={StoreItems}
                keyExtractor={(item) => item.id}
                renderItem = {data => 
                <StoreItem
                    title = {data.item.title}
                    subtitle = {data.item.subtitle}
                />}
                style = {StoreLocatorListStyle.flatlist}
                contentContainerStyle = {{paddingBottom : 84}}
                />
              </View>
          </SafeAreaView>
      )
  }
  export default StoreLocator