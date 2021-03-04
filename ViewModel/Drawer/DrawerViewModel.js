import RouteConstant from "../../Utilities/Constants/RouteConstant";
const DrawerViewModel = 
{
   GetMenuItems : () => {
       return [
        {title : 'My Home', id : '1', icon : require ('../../Assets/Images/ic_menu_home.png'), page : RouteConstant.Home},
       {title : 'My Cart', id : '2', icon : require ('../../Assets/Images/ic_menu_cart.png'), page : RouteConstant.Cart},
       {title : 'Tables', id : '3', icon : require ('../../Assets/Images/ic_menu_table.png'), page : RouteConstant.Product},
       {title : 'Sofas', id : '4', icon : require ('../../Assets/Images/ic_menu_sofa.png'), page : RouteConstant.Product},
       {title : 'Chairs', id : '5', icon : require ('../../Assets/Images/ic_menu_chair.png'), page : RouteConstant.Product},
       {title : 'Cupboards', id : '6', icon : require ('../../Assets/Images/ic_menu_cupboard.png'), page : RouteConstant.Product},
       {title : 'My Account', id : '7', icon : require ('../../Assets/Images/ic_username.png'), page : RouteConstant.Account},
       {title : 'Store Locator', id : '8', icon : require ('../../Assets/Images/ic_menu_store.png'), page : RouteConstant.Store},
       {title : 'My Orders', id : '9', icon : require ('../../Assets/Images/ic_menu_order.png'), page : RouteConstant.Order},
       {title : 'Logout', id : '10', icon : require ('../../Assets/Images/ic_menu_logout.png'), page : RouteConstant.Logout}
    ]},
    OnItemSelected : (itemId) => 
    {
        const Items = DrawerViewModel.GetMenuItems()
        const Module = Items.filter (Obj => Obj.id == itemId)[0]
        if (Module != undefined) 
        {
            let returnItem = {}
            switch (Module.id) {
                case '3':
                    returnItem = {'page' : Module.page, 'id' : '1', 'title' : 'Tables'}
                break
                case '4' :
                    returnItem = {'page' : Module.page, 'id' : '3', 'title' : 'Sofa'}
                    break
                case '5' :
                    returnItem = {'page' : Module.page, 'id' : '2', 'title' : 'Chair'}
                    break
                case '6' :
                    returnItem = {'page' : Module.page, 'id' : '4', 'title' : 'Cupboard'}
                    break
                default:
                     returnItem = {'page' : Module.page}
                     break
            }

            return returnItem
        }
    }
}
export default DrawerViewModel