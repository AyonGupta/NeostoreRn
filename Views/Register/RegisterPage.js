import 
{
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Alert,
    ScrollView
} from "react-native"
import React, { useState } from "react";
import { useEffect } from "react";
import * as ImgConstant from "../../Utilities/Constants/ImageConstant";
import { StackActions } from "@react-navigation/native";
import * as Strings from "../../Utilities/Constants/StringConstant";
import RegisterStyle from "./RegisterPage.style";
import Entry from "../../Views/SubViews/Entry/Entry";
import { useDispatch, useSelector } from "react-redux";
import { PerformRegister } from "../../Redux/Action/RegisterAction";
import RegisterViewModel from "../../ViewModel/Register/RegisterViewModel";

const RegisterPage = (props) => 
{

    //1. First name
    const [Fname, SetFname] = useState('')
    //2. Last name
    const [Lname, SetLname] = useState('')
    //3. Email
    const [Email, SetEmail] = useState('')
    //4. Password
    const [Password, SetPassword] = useState('')
    //5. Confirm Password
    const [CPassword, SetCPassword] = useState('')
    //6. Gender
    const [Gender, SetGender] = useState('Male')
    //7. Mobile Number
    const [Phone, SetPhone] = useState('')
    //8. Terms and conditions
    const [TermsSelected, SetTermsSelected] = useState(false)
    

    const dispatch = useDispatch()
    const UserData = useSelector (state => state.registerReducer.UserData)

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

            const OnClickRegister = () => 
            {
                //1. First name
                if (!RegisterViewModel.ValidateFname(Fname)) 
                {
                    console.log ('fname error')
                    return
                }
                //2. Last name
                if (!RegisterViewModel.ValidateLname(Lname)) 
                {
                    console.log ('lname error')
                    return
                }
                //3. Email
                if (!RegisterViewModel.ValidateEmail(Email)) 
                {
                    console.log ('email error')
                    return
                }
                //4. Password
                if (!RegisterViewModel.ValidatePassword(Password)) 
                {
                    console.log ('pass error')
                    return
                }
                //5. Confirm Password
                if (!RegisterViewModel.ValidateCpassword(Password, CPassword)) 
                {
                    console.log ('cpass error')
                    return
                }
                //6. Phone number
                if (!RegisterViewModel.ValidatePhone(Phone)) 
                {
                    console.log ('phone error')
                    return
                }
                //7. First name
                if (!TermsSelected) 
                {
                    console.log ('terms error')
                    return
                }
                dispatch (PerformRegister (Fname, Lname, Email, Password, Gender, Phone))
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
                                style = {RegisterStyle.leftHeader}>
                                <Image 
                                source = {ImgConstant.RP_IMG_BACK}
                                style = {{height : 30, width : 30, }}
                                />
                                </TouchableOpacity>
                                )
                            })
                        }, [])
                
                        useEffect (()=> 
                        {
                            if (UserData.status != undefined) {
                                Alert.alert (Strings.LP_NEOSTORE, 'Welcome ' + UserData.data.first_name + ' ' + UserData.data.LastName)
                            }
                        }, [UserData])
                        return (
                            <SafeAreaView 
                            style = {RegisterStyle.safeArea}>
                            <ScrollView 
                            style = {RegisterStyle.scrollView}
                            contentContainerStyle = {RegisterStyle.scrollContent}>
                            <Text style = {RegisterStyle.neostore}>NeoStore</Text>
                            <GetPadding/>
                            <GetPadding/>
                            {/* First name */}
                            <Entry 
                            icon = {ImgConstant.RP_IMG_USERNAME}
                            placeholder = {Strings.RP_FIRSTNAME}
                            OnTextChange = {(FirstName)=> {
                                SetFname(FirstName)
                            }}
                            />
                            
                            <GetPadding/>
                            {/* Last name */}
                            <Entry 
                            icon = {ImgConstant.RP_IMG_USERNAME}
                            placeholder = {Strings.RP_LASTTNAME}
                            OnTextChange = {(LastName)=> {
                                SetLname(LastName)
                            }}
                            />
                            
                            {/* Email */}
                            <GetPadding/>
                            <Entry 
                            icon = {ImgConstant.LP_IMG_EMAIL}
                            placeholder = {Strings.LP_PLACEHOLDER_EMAIL}
                            OnTextChange = {(Email)=> {
                                SetEmail(Email)
                            }}
                            keyboardType = {1}
                            />
                            
                            {/* Password */}
                            <GetPadding/>
                            <Entry 
                            icon = {ImgConstant.LP_IMG_PASSWORD}
                            placeholder = {Strings.RP_PASSWORD}
                            OnTextChange = {(Password)=> {
                                SetPassword (Password)
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
                                SetCPassword(CPassword)
                            }}
                            keyboardType = {1}
                            isPassword = {true}
                            />
                            
                            {/* Gender */}
                            <GetPadding/>
                            <View style = {RegisterStyle.gender}>
                            <Text style = {RegisterStyle.genderText}> Gender </Text>
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
                                SetPhone(Phone)
                            }}
                            />
                            
                            
                            {/* Terms and conditions */}
                            <GetPadding/>
                            <View style = {RegisterStyle.terms}>
                            <TouchableOpacity
                            style = {RegisterStyle.checkbox}
                            onPress = {ToggleTermsFlag}>
                            <Image 
                            style = {RegisterStyle.checkbox}
                            source = {TermsSelected ? ImgConstant.RP_IMG_CHECKTERMS : ImgConstant.RP_IMG_UNCHECKTERMS}
                            />
                            </TouchableOpacity>
                            <View style = {{width : 10}}/>
                            <Text style = {RegisterStyle.terms}>{Strings.RP_TERMS_1}</Text>
                            <TouchableOpacity
                            style = {{flexDirection : 'column'}}
                            onPress = {()=>{console.log('Terms selected')}}>
                            <Text style = {RegisterStyle.termsText2}>{Strings.RP_TERMS_2}</Text>
                            <View style = {RegisterStyle.underline}/>
                            </TouchableOpacity>
                            </View>
                            {/* Register button */}
                            <GetPadding/>
                            <TouchableOpacity
                            style = {RegisterStyle.register}
                            onPress = {OnClickRegister}>
                            <Text style = {RegisterStyle.regText}>{Strings.RP_REGISTER}</Text>
                            </TouchableOpacity>
                            
                            </ScrollView>
                            </SafeAreaView>
                            )
                        }
                        export default RegisterPage
                        
                        