import CommonMethods from "../../Utilities/Common/CommonMethods"

import * as LocalStorageKeys from "../../Utilities/Constants/LocalStorageKeys";
const RouteViewModel = 
{
    
    CheckLoginStatus : async () => 
    {
        // console.log('async storage login key = ', CommonMethods.GetLocalItem (LocalStorageKeys.KIsLogin))
        const isLogin =  await CommonMethods.GetLocalItem (LocalStorageKeys.KIsLogin) 
        console.log ('is login async flag = ', isLogin === 'true')
        return isLogin === 'true'
    }
}
export default RouteViewModel