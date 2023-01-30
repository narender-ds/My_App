import React from "react";
import {
    Text,
    StyleSheet,
    SafeAreaView,
    TouchOpacity,
    View,
    TextInput
} from "react";
import ImageComponent from "./Components/ImageComponent";
import TextInputComponent from "./Components/TextInputComponent";
import { useState } from "react";
import ButtonComponent from "./Components/ButtonComponent";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setvalidEmail] = useState('false');
    const [validPassword, setvalidPassword] = useState('false');
    // const navigation = useNavigation();
    const validate = () => {
        let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        setEmail('email');
        if (emailReg.test(email)) {
            setvalidEmail(false)
        } else {
            setvalidEmail(true)
        }
        setPassword('password');
        if (!password) {
            setvalidPassword(false)
        } else {
            setvalidPassword(true)
        }

    };

    return (
        <SafeAreaView>
            <View style={[styles.Heading]}>
                Welcome
            </View>
            <View>
                <ImageComponent source={require('../Image/login.png')} imageStyle={styles.image}/>
            </View>
            <View>
               <TextInputComponent

input={style.input}
placeholder={'Email'}
value={email}
onChangeText={(email) => setEmail(email)}

               />
                {validEmail ? (
                    <Text>Wrong Format</Text>
                ) : (
                    <Text></Text>
                )}
              <TextInputComponent
                input={style.input}
placeholder={'Password'}
value={password}
onChangeText={(password) => setPassword(password)}
secureTextEntry={true}
              />
                {validPassword ? (
                    <Text>Wrong Format</Text>
                ) : (
                    <Text></Text>
                )}
                <ButtonComponent
                  
                    onPress={validate}
                    button={[styles.LoginButtonStyle]}
                    tittle={'Login'}
                />
                <Text
                    style={styles.registerTextStyle}
                    onPress={() => navigation.navigate('Register')}>
                    New Here ? Register
                </Text>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    Heading: {
        align: 'center',
        FontWeight: 18,
        MarginTop: 10,
    },
    LoginButtonStyle: {
        ButtonRadius: 7,
        backgroundColor: 'Aqua',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#DE824E',
        width: 100,
        height: 40,
        alignItems: 'center',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
            input: {
            borderColor: "gray",
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
        },
        image:{
            marginTop:5,
            align:'center',
            width:100,
            height:100,
        },
        input: {
            width: 250,
            height: 44,
            padding: 10,
            marginTop: 20,
            marginBottom: 10,
            backgroundColor: '#e8e8e8',
            fontWeight: 'bold'
         },
})

export default Login;