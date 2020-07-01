import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import AppText from '../components/AppText';

import colors from '../config/colors'
import ListItem from '../components/lists/ListItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return(
<View>
        <Image 
        style={styles.image}
        source={listing.image}></Image>
        <View style={styles.detailsContainer}>
    <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price} €</AppText>

        
        <View style={styles.deleteBtn}>
        <MaterialCommunityIcons name="delete" size={30} color="red" />
        </View>
        </View>
</View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500, 
    },
    detailsContainer: {
       padding: 20,  
    },
    title: {
        fontSize: 24,
        fontWeight: '500', 
    },
    price: {
        color: colors.danger, 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginVertical: 10, 
    },
    userContainer: {
        marginVertical: 40, 
        backgroundColor: colors.secondary,
        borderRadius: 20,  
        padding: 10, 
    },
    deleteBtn: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingLeft: 300,  
    }
})

export default ListingDetailsScreen; 