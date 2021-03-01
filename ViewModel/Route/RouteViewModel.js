import CommonMethods from "../../Utilities/Common/CommonMethods"

import * as LocalStorageKeys from "../../Utilities/Constants/LocalStorageKeys";
const RouteViewModel = 
{
    CheckLoginStatus : () => 
    {
        return CommonMethods.GetLocalItem (LocalStorageKeys.KIsLogin) == 'true'
    }
}
export default RouteViewModel