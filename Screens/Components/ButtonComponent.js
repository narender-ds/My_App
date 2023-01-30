import React from "react";
import {TouchableOpacity} from "react-native";

const ButtonComponent=(props)=>{
    return(

        <TouchableOpacity
        onPress={props.onPress}
        style={props.button}

    >
        <Text style={Styles.btntext}>{props.title}</Text>

    </TouchableOpacity>
    );
};
export default ButtonComponent;