import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductViewModel from "../../ViewModel/Product/ProductViewModel";
import ProductStyle from "./ProductList.style";
import ProductItem from "./ProductItem";
import RouteConstant from "../../Utilities/Constants/RouteConstant";
import LoaderPage from "../SubViews/Loader/LoaderPage";

const ProductList = ({ route, navigation }) => {
  const ProdId = route.params.ProductId;
  const dispatch = useDispatch();
  const ProductListData = useSelector(
    (state) => state.productReducer.ProductData
  );
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const IsLoader = useSelector((state) => state.productReducer.isLoader);

  useEffect(() => {
    if (ProdId != undefined) {
      dispatch(ProductViewModel.GetProductListById(ProdId, limit, page));
      navigation.setOptions({
        title: route.params.title,
      });
    }
  }, [ProdId]);

  return (
    <SafeAreaView>
      <LoaderPage visible={IsLoader} />
      <FlatList
        data={ProductListData.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(data) => (
          <ProductItem
            name={data.item.name}
            id={data.item.id}
            image={data.item.product_images}
            producer={data.item.producer}
            cost={data.item.cost}
            OnPress={(id, title) => {
              navigation.navigate(RouteConstant.ProdDetails, {
                ProdId: id,
                title: title,
              });
            }}
          />
        )}
        style={ProductStyle.flatlist}
        contentContainerStyle={{ paddingBottom: 84 }}
      />
    </SafeAreaView>
  );
};
export default ProductList;
