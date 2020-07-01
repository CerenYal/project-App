import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormimagePicker";
import { ScrollView } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  note: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select..."),
  // date: Yup.date().required().min(Yup.ref('Date')), 
 
});

const categories = [
  { label: "Vertrag", value: 1, backgroundColor: 'red', icon: 'script-text-outline'},
  { label: "Mitgliedschaft", value: 2, backgroundColor: 'green', icon: 'karate' },
  { label: "Rechnung", value: 3, backgroundColor: 'pink', icon: 'barcode' },
];

function AddInvoiceScreen() {
  return (
    <ScrollView>
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="date"
          placeholder="Start  DD/MM/YYYY"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="date"
          placeholder="End  DD/MM/YYYY"
        />
        <FormField
          maxLength={255}
          multiline
          name="note"
          numberOfLines={3}
          placeholder="Note"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default AddInvoiceScreen;
