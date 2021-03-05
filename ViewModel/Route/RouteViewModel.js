import CommonMethods from "../../Utilities/Common/CommonMethods"

import * as LocalStorageKeys from "../../Utilities/Constants/LocalStorageKeys";
const RouteViewModel = 
{
    
    CheckLoginStatus : (callback) => 
    {
        CommonMethods.GetLocalItem (LocalStorageKeys.KUSERDATA,
             (status) => {
                 callback(status)
             })
    }
}
export default RouteViewModel