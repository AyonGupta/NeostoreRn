import AsyncStorage from '@react-native-community/async-storage'
const CommonMethods = 
{
    CheckEmptyString : (text) => 
    {
        return text != undefined && text != ''
    },
    CheckEmailValid : (email) => 
    {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    CheckStringEqual : (text1, text2)  =>
    {
        return text1 == text2
    },
    SaveData : async(data, key) => 
    {
        try {
            await AsyncStorage.setItem (key, data, (error) => 
            {
                console.log (error == undefined ? 'Saved' : 'not saved')
            })
        } catch (error) {
            console.error(JSON.stringify(error))
        }
    },
    DeleteAllStorage : async () => 
    {
        try {
            await AsyncStorage.clear()
        } catch (error) {
            console.error(JSON.stringify(error))
        }
    }, 
    GetLocalItem : async(key) => 
    {
        try {
             await AsyncStorage.getItem (key, (error, value) => 
             {
                 if (error == null) 
                 {
                    return value
                 } else {
                     return null
                 }
             })
        } catch (error) {
            console.error(JSON.stringify(error))
        }
    },
    DeleteLocalByKey : async (key) => 
    {
        try {
            await AsyncStorage.removeItem (key, (error) => 
            {
                if (error != null){
                    console.log ('error while saving data = ' + JSON.stringify(error))
                } else 
                {
                    console.log (key + ' deleted')
                }
            })
        } catch (error) {
            
        }
    },
    CheckLoginStatus : () => 
    {

    }

}
export default CommonMethods