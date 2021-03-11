import { GetCartItems, EditCartItem, DeleteCartItem } from "../../Redux/Action/MyCartAction";

const MyCartViewModel = 
{
   GetItems : () => GetCartItems (),
   EditCartByIdQuantity : (id, quanity) => EditCartItem (id, quanity),
   DeleteItemById : (id) => DeleteCartItem (id)
}
export default MyCartViewModel