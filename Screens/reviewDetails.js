import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { globalStyles, images } from "../Styles/global";
import Card from "../shared/card";


export default function ReviewDetails({ route, navigation }) {

    const item = route.params;
    const rating = JSON.stringify(item.rating);

    return (
        <View style={ globalStyles.container }>
            <Card>
                <Text>Movie Title: {JSON.stringify(item.title)}</Text>
                <Text>Description: {JSON.stringify(item.body)}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
            {/* <Button title="Press Me" onPress={() => console.log(JSON.stringify(item.rating))} /> */}
            <View style={styles.toolbar}>
                <TouchableOpacity style={ styles.buttonStyle } onPress={() => navigation.goBack()}>
                    <Text>GO BACK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 5
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'lightgrey',
        height: 40,
        width: 125,
        marginTop: 10,
        fontWeight: 'bold',
      },

})
