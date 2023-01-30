import React from "react";
import {Image} from 'react-native';

const ImageComponent=(props)=>{
    return(
        <Image style={props.imageStyle} source={props.Source}/>
    );
};

export default ImageComponent;