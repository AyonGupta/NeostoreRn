import React,{ Component } from 'react';
import{
    View,SafeAreaView,Text,TextInput,StyleSheet,Button, TouchableOpacity,Image
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export class HomeScreen extends Component
{
    render()
    {
        return(
            <SafeAreaView>
                <View style = {{height : '50%'}}>
                </View>
               <View style={styles.firstcontainer}>
                    <View style={styles.dashboardcontainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.dashboardButtonContainer}>
                            <Text style={{alignSelf:'center', alignItems :'center',
                        justifyContent:'center',
                        color:'white',
                        fontWeight : 'bold',
                        fontSize: 15}}>Tables</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.dashboardButtonContainer}>
                            <Text style={{alignSelf:'center', alignItems :'center',
                        justifyContent:'center',
                        color:'white',
                        fontWeight : 'bold',
                        fontSize: 15}}>Sofas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dashboardcontainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.dashboardButtonContainer}>
                            <Text style={{alignSelf:'center', alignItems :'center',
                        justifyContent:'center',
                        color:'white',
                        fontWeight : 'bold',
                        fontSize: 15}}>Chairs</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.dashboardButtonContainer}>
                            <Text style={{alignSelf:'center', alignItems :'center',
                        justifyContent:'center',
                        color:'white',
                        fontWeight : 'bold',
                        fontSize: 15}}>Cupboards</Text>
                        </TouchableOpacity>
                    </View>
               </View>
               </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    firstcontainer : {
        justifyContent : 'flex-end',
        alignItems:'flex-end',
        height:'50%',
        width : '100%'
    },
    dashboardcontainer : {
        justifyContent : 'flex-end',
        alignItems:'flex-end',
        width : '100%',
        flexDirection:'row',
        marginBottom : 14,
    },
    dashboardButtonContainer: {
        elevation: 1,
        borderColor: 'black',
        borderWidth: 1,
        alignSelf:'center',
        flex:1,
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        color : 'white',
        backgroundColor : '#e91b1a',
        borderColor : 'white',
        marginLeft : 7,
        marginRight : 7
    },
    appButtonContainer: {
        elevation: 10,
        borderWidth: 1,
        marginTop:30,
        alignSelf:'center',
        height:'70%',
        width:'35%',
        alignItems:'center',
        justifyContent:'center',
        color : '#e91b1a',
        backgroundColor : 'white',
        borderColor : '#e91b1a',
    },
    textstyles : {
        color : '#e91b1a',
        fontStyle : 'normal',
        fontWeight : 'bold',
        fontSize : 15,
        justifyContent : 'center',
        alignSelf : 'center',
        alignItems : 'center'
    },
});
    