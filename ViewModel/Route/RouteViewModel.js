import CommonMethods from "../../Utilities/Common/CommonMethods"

import * as LocalStorageKeys from "../../Utilities/Constants/LocalStorageKeys";
const RouteViewModel = 
{
    
    CheckLoginStatus : () => 
    {
        console.log('async storage login key = ', CommonMethods.GetLocalItem (LocalStorageKeys.KIsLogin))
        return CommonMethods.GetLocalItem (LocalStorageKeys.KIsLogin) == 'true'
    }
}
export default RouteViewModel