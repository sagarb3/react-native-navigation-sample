import React from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../common/styles'
import ImgPicker from '../../components/ImagePickerComponent'


const AboutScreen = (props: any) => {
    return (
      <View style={styles.container}>
          <ImgPicker/>
      </View>
       
    )
}



export default AboutScreen;