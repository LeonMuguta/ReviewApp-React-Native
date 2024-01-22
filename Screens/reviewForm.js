import React from "react";
import { StyleSheet, Button, TextInput, View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../Styles/global";
import { Formik } from "formik";
import * as yup from 'yup';
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Please provide a rating between 1-5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function ReviewForm({ addReview, props }) {
    return (
        <TouchableWithoutFeedback onPress={() =>  Keyboard.dismiss()}>
            <View style={globalStyles.container}>
                <Formik
                    initialValues={{ title: '', body: '', rating: ''}}

                    validationSchema={reviewSchema}

                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        addReview(values);
                    }}
                >
                    {(formikProps) => (
                        <View>
                            <TextInput 
                                style={globalStyles.input}
                                placeholder="Review Title"
                                onChangeText={formikProps.handleChange('title')}
                                value={formikProps.values.title}
                                onBlur={formikProps.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>

                            <TextInput 
                                multiline minHeight={60}
                                style={globalStyles.input}
                                placeholder="Review Body"
                                onChangeText={formikProps.handleChange('body')}
                                value={formikProps.values.body}
                            />
                            <Text style={globalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body }</Text>

                            <TextInput 
                                style={globalStyles.input}
                                placeholder="Rating (1-5)"
                                onChangeText={formikProps.handleChange('rating')}
                                value={formikProps.values.rating}
                                keyboardType="numeric"
                                onBlur={formikProps.handleBlur('rating')}
                            />
                            <Text style={globalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>

                            {/* <Button title="Submit" color='maroon' onPress={formikProps.handleSubmit} /> */}
                            <FlatButton text='submit' buttonPress={formikProps.handleSubmit} />
                        </View> 
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
    )
}