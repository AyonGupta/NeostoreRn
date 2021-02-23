import 
{
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from "react-native"
import React, { useState } from "react";
import { useEffect } from "react";
import * as ImgConstant from "../../Utilities/Constants/ImageConstant";
import { StackActions } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import * as Strings from "../../Utilities/Constants/StringConstant";
import RegisterStyle from "./RegisterPage.style";
import Entry from "../../Views/SubViews/Entry/Entry";
const RegisterPage = (props) => 
{
    const [Gender, SetGender] = useState('Male')
    const [TermsSelected, SetTermsSelected] = useState(false)
    
    const GetPadding = () => {
        return (
            <View style = {{height : 20}}/>
            )
        }
        
        const ToggleTermsFlag = () => 
        {
            SetTermsSelected (!TermsSelected)
        }    
        
        
        const GetGenderView = (props) => 
        {
            return (
                <TouchableOpacity
                style = {{flex : 0.25, flexDirection : 'row', justifyContent : 'center'}}
                onPress = {()=> {
                    if (Gender != '') {
                        if (Gender != props.title) {
                            SetGender (props.title)
                        } else {
                            SetGender (Gender)
                        }
                    } else {
                        SetGender (props.title)
                    }
                }}>
                <Image 
                style = {{height : 15, width : 15, alignSelf : 'center'}}
                source = {Gender == props.title ? ImgConstant.RP_IMG_CHECK : ImgConstant.RP_IMG_UNCHECK}  
                />
                <Text style = {{fontFamily : 'Gotham-Bold', fontSize : 18, color : 'white'}}> {props.title} </Text>
                </TouchableOpacity>
                )
            }    
            useEffect (
                () => 
                {
                    props.navigation.setOptions (
                        {
                            headerLeft : () => 
                            (
                                <TouchableOpacity
                                onPress = {()=> {
                                    props.navigation.dispatch (StackActions.pop(1))
                                }}
                                style = {{width : 64, height : '100%',justifyContent : 'center', alignItems : 'center'}}>
                                <Image 
                                source = {ImgConstant.RP_IMG_BACK}
                                style = {{height : 30, width : 30, }}
                                />
                                </TouchableOpacity>
                                )
                            })
                        }, [])
                        
                        return (
                            <SafeAreaView 
                            style = {{backgroundColor : 'red'}}>
                            <ScrollView 
                            style = {{backgroundColor : 'red', height : '100%'}}
                            contentContainerStyle = {{paddingBottom : 30}}>
                            <Text style = {{marginTop : 44, textAlign : 'center', fontFamily : 'Gotham-Bold', color : 'white', fontSize : 40}}>NeoStore</Text>
                            <GetPadding/>
                            <GetPadding/>
                            {/* First name */}
                            <Entry 
                            icon = {ImgConstant.RP_IMG_USERNAME}
                            placeholder = {Strings.RP_FIRSTNAME}
                            OnTextChange = {(FirstName)=> {
                                console.log(FirstName)
                            }}
                            />
                            
                            <GetPadding/>
                            {/* Last name */}
                            <Entry 
                            icon = {ImgConstant.RP_IMG_USERNAME}
                            placeholder = {Strings.RP_LASTTNAME}
                            OnTextChange = {(LastName)=> {
                                console.log(LastName)
                            }}
                            />
                            
                            {/* Email */}
                            <GetPadding/>
                            <Entry 
                            icon = {ImgConstant.LP_IMG_EMAIL}
                            placeholder = {Strings.LP_PLACEHOLDER_EMAIL}
                            OnTextChange = {(Email)=> {
                                console.log(Email)
                            }}
                            keyboardType = {1}
                            />
                            
                            {/* Password */}
                            <GetPadding/>
                            <Entry 
                            icon = {ImgConstant.LP_IMG_PASSWORD}
                            placeholder = {Strings.RP_PASSWORD}
                            OnTextChange = {(Password)=> {
                                console.log(Password)
                            }}
                            keyboardType = {1}
                            isPassword = {true}
                            />
                            
                            {/* Confirm Password */}
                            <GetPadding/>
                            <Entry 
                            icon = {ImgConstant.LP_IMG_PASSWORD}
                            placeholder = {Strings.RP_CONFIRMPASSWORD}
                            OnTextChange = {(CPassword)=> {
                                console.log(CPassword)
                            }}
                            keyboardType = {1}
                            isPassword = {true}
                            />
                            
                            {/* Gender */}
                            <GetPadding/>
                            <View style = {{marginLeft : 30, marginRight : 30, marginTop : -10, height : 44, flexDirection : 'row', alignItems : 'center'}}>
                            <Text style = {{flex : 0.4, color : 'white', fontFamily : 'Gotham-Bold', fontSize : 20}}> Gender </Text>
                            <GetGenderView title = 'Male'/>
                            <View style = {{width : 30}}/>
                            <GetGenderView title = 'Female'/>
                            </View>
                            
                            {/* Phone number */}
                            <GetPadding/>
                            <Entry
                            icon = {ImgConstant.RP_IMG_PHONE}
                            placeholder = {Strings.RP_PHONE}
                            keyboardType = {2}
                            OnTextChange = {(Phone)=> {
                                console.log(Phone)
                            }}
                            />
                            
                            
                            {/* Terms and conditions */}
                            <GetPadding/>
                            <View style = {{marginLeft : 30, marginRight : 30, height : 44, flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                            <TouchableOpacity
                            style = {{height : 20, width : 20}}
                            onPress = {ToggleTermsFlag}>
                            <Image 
                            style = {{height : 20, width : 20}}
                            source = {TermsSelected ? ImgConstant.RP_IMG_CHECKTERMS : ImgConstant.RP_IMG_UNCHECKTERMS}
                            />
                            </TouchableOpacity>
                            <View style = {{width : 10}}/>
                            <Text style = {{fontFamily : 'Gotham-Bold', fontSize : 18, color : 'white'}}>{Strings.RP_TERMS_1}</Text>
                            <TouchableOpacity
                            style = {{flexDirection : 'column'}}
                            onPress = {()=>{console.log('Terms selected')}}>
                            <Text style = {{fontFamily : 'Gotham-Bold', fontSize : 18, color : 'white'}}>{Strings.RP_TERMS_2}</Text>
                            <View style = {{height : 2, backgroundColor : 'white'}}/>
                            </TouchableOpacity>
                            </View>
                            {/* Register button */}
                            <GetPadding/>
                            <TouchableOpacity
                            style = {{marginLeft : 30, marginRight : 30, backgroundColor : 'white', borderRadius : 5, height : 54, justifyContent : 'center', alignItems : 'center'}}>
                            <Text style = {{color : 'red', fontFamily : 'Gotham-Bold', fontSize : 25}}>{Strings.RP_REGISTER}</Text>
                            </TouchableOpacity>
                            
                            </ScrollView>
                            </SafeAreaView>
                            )
                        }
                        export default RegisterPage
                        
                        