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
import { useState } from "react";
import TextInputComponent from "./Components/TextInputComponent";
import ButtonComponent from "./Components/ButtonComponent";
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [Confirm_password, setConfirm_password] = useState('');
    return (
        <SafeAreaView>
            <View style={[styles.Header]}>
                Welcome
            </View>
            <View>
                <ImageComponent source={require('../Image/register.png')} imageStyle={styles.image}/>
            </View>
            <View>
            <TextInputComponent
                input={style.input}
placeholder={'Name'}
value={name}
onChangeText={(name) => setName(name)}

              />
                           <TextInputComponent
                input={style.input}
placeholder={'Email'}
value={email}
onChangeText={(email) => setEmail(email)}

              />
                   <TextInputComponent
                input={style.input}
placeholder={'Phone'}
value={phone}
onChangeText={(phone) => setPhone(phone)}

              />
             <TextInputComponent
                input={style.input}
placeholder={'Password'}
value={password}
onChangeText={(password) => setPassword(password)}
secureTextEntry={false}
              />
                 <TextInputComponent
                input={style.input}
placeholder={'Confrim Password'}
value={confirm_password}
onChangeText={(confirm_password) => setConfirm_password (confirm_password)}
secureTextEntry={true}
              />
<ButtonComponent
  
    onPress={validate}
    buttton={[styles.RegisterButtonStyle]}
    tittle={'Register'}
/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Header: {
        MarginTop: 10,
        FontWeight: 18,
        align: 'center',
    },
    RegisterButtonStyle:{
        ButtonRadius:7,
        backgroundColor:'lightBlue',
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
export default Register;
