'use strict';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions';

const CameraApp = (props: any) => {
    const [permission, setPermission] = useState('undetermined');
    const [pickedImage, setPickedImage] = useState();
    let cameraRef = useRef(null);
    useEffect(() => {
        Permissions.check('photo').then((response: React.SetStateAction<string>) => {
            setPermission(response);
        });
    }, []);
    const takePicture = async () => {
        if (cameraRef) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            console.log(data);
            setPickedImage(data.uri);
        }
    };
    return (
        // <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <RNCamera
                    ref={cameraRef}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={takePicture} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.imagePreview}>
                    {!pickedImage ? (
                        <Text>No image picked yet.</Text>
                    ) : (
                            <Image style={styles.image} source={{ uri: pickedImage }} />
                        )}
                </View> */}
            </View>

        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    imagePreview: {
        width: 200,
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width: '100%',
    },
    scrollView:{
        backgroundColor: 'pink',
        marginHorizontal: 20,
    }
})

export default CameraApp;