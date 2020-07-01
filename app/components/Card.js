import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, image ,time,  description, onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <View style={styles.detailsContainer}>
            <View style={styles.titleStyle}>
            <AppText style={styles.title}>{title}</AppText>
            </View>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            <AppText>Du hast noch {time} Tage Zeit.</AppText>
            {/* <Image  style={styles.image} source={ image } /> */}
            <AppText style={styles.title}>{description}</AppText>
            
            </View>
        </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 0, 
        backgroundColor: colors.white,
        margin: 20, 
        overflow: 'hidden',
     
         
        alignItems: 'center', 
    },
    image: {
        width: 250, 
        height: 250, 
    }, 
    detailsContainer: {
        padding: 10,
        alignItems:"center"
    },
    title: {
        marginBottom: 10, 
        fontSize: 25,
        color: colors.gold, 
    }, 
    subTitle: {
        color: colors.black,
        fontWeight: 'bold', 
        paddingBottom: 10, 
    },
    titleStyle: {
        // backgroundColor: colors.light,
        // padding: 12,
        // borderRadius: 100,
    }

})


export default Card;