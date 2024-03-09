import React, { ReactElement } from 'react'
import { ImageBackground, Image } from 'react-native';

interface IImageBackground {
    source: string;
}

const StyledImageBackground = ({ source }: IImageBackground) => (
    <ImageBackground
        blurRadius={90}
        source={{ uri: source }}
        style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
        }}>
        <Image
            source={{ uri: source }}
            style={{
                height: 250,
                width: "100%",
                resizeMode: "contain"
            }}
        />
    </ImageBackground >
)

export default StyledImageBackground