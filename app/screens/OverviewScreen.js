import React from "react";
import { FlatList, StyleSheet } from "react-native";


import Screen from "../components/Screen";
import routes from '../navigation/routes';
import Card from "../components/Card";
import colors from "../config/colors";
import Seperator from '../components/lists/ListItemSeperator';

const listings = [
  {
    id: 1,
    title: "Autoversicherung",
    price: 70,
    image: require("../assets/example_0.jpg"),
    startdate: "12-06-2020", 
    time: 12,
  },
  {
    id: 2,
    title: "Sport-Mitgliedschaft",
    price: 45,
    image: require("../assets/example_1.jpg"),
    time: 1,
  },
  {
    id: 3,
    title: "Neues Sofa",
    price: 1200,
    image: require("../assets/example_2.jpg"),
    time: 7,
  },
  {
    id: 4,
    title: "Lebensversicherung",
    price: 35,
    image: require("../assets/example_3.jpg"),
    time: 20,
  },
  {
    id: 5,
    title: "Online Einkauf",
    price: 130,
    image: require("../assets/example_4.jpg"),
    time: 20,
  },
  {
    id: 6,
    title: "Einzelhandel",
    price: 52,
    image: require("../assets/example_5.jpg"),
    time: 0,
  },

];

function InvoiceScreen({ navigation }) {
 

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        ItemSeparatorComponent={Seperator}

        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={ item.price + " €"}
            image={item.image}
            time={item.time}
            onPress={()=> navigation.navigate(routes.LISTING_DETAILS, item)}
          />
          
        )}
      />
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default InvoiceScreen;
