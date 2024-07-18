import React from "react";
import { View,Image,StyleSheet } from "react-native";
/* import img1 from "../Imagenes/descarga.png" */
class ComponenteImage extends React.Component{  
    render(){
        const{imagen_palabra}=this.props
        return(
            <View>
            <Image style={styles.image} source={{ uri: imagen_palabra }} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: 'cover',
    },
  });


export default ComponenteImage
