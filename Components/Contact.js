import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import profile1 from '../assets/profile1.jpg';
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';

const Contact = ({name, phone}) => {
    return (
        <View style = {styles.container}>

                <Image style={styles.image} source= {profile1} />

                <View style={styles.infoCont}>
                    <Text style={styles.name}numberOfLines={1}>{name}</Text>
                    <Text>{phone}</Text>
                </View>

                <View style={styles.icon}>
                    <MaterialIcons name="local-phone" size={25} color="#009cf5" />
                </View>

                <View style={styles.icon}>
                    <MaterialCommunityIcons name="message-processing" size={25} color= "#009cf5" />
                </View>

                <View style={styles.icon}>
                    <SimpleLineIcons name="options-vertical" size={25} color= "grey"/>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 30,
        alignSelf: "center",
        marginVertical: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    infoCont: {
        justifyContent: "center",
        marginHorizontal: 20,
        flex: 4,
    },
    name: {
        fontWeight: "bold",
        fontSize: 15,
    }, 
    icon: {
        flex: 1,
        paddingRight: 30,
    }
  })

export default Contact;
