
import { AddToCart, GetProductDetail,  } from "../../Redux/Action/ProductDetailAction";
const ProductDetailViewModel = 
{
    GetProductDetailById : (id) => GetProductDetail (id),
    Buy : (id, quantity) => AddToCart (id, quantity)

}
export default ProductDetailViewModel