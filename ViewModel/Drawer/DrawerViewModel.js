const DrawerViewModel = 
{
   GetMenuItems : () => {
       return [
       {title : 'My Cart', id : '1', icon : require ('../../Assets/Images/ic_menu_cart.png'), page : ''},
       {title : 'Tables', id : '2', icon : require ('../../Assets/Images/ic_menu_table.png'), page : ''},
       {title : 'Sofas', id : '3', icon : require ('../../Assets/Images/ic_menu_sofa.png'), page : ''},
       {title : 'Chairs', id : '4', icon : require ('../../Assets/Images/ic_menu_chair.png'), page : ''},
       {title : 'Cupboards', id : '5', icon : require ('../../Assets/Images/ic_menu_cupboard.png'), page : ''},
       {title : 'My Account', id : '6', icon : require ('../../Assets/Images/ic_username.png'), page : ''},
       {title : 'Store Locator', id : '7', icon : require ('../../Assets/Images/ic_menu_store.png'), page : ''},
       {title : 'My Orders', id : '8', icon : require ('../../Assets/Images/ic_menu_order.png'), page : ''},
       {title : 'Logout', id : '9', icon : require ('../../Assets/Images/ic_menu_logout.png'), page : ''}
    ]
}
   
}
export default DrawerViewModel