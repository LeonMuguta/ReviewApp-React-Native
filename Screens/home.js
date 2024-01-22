import React, { useState } from "react";
import { StyleSheet, Viewm, Text, View, Button, FlatList, TouchableOpacity, Modal } from "react-native";
import { globalStyles } from "../Styles/global";
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {

    const [modelOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum dolor sit amet, consectetur adipiscing', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum dolor sit amet, consectetur adipiscing', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum dolor sit amet, consectetur adipiscing', key: '3' }
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });

        setModalOpen(false);
    }

    return (
        <View style={ globalStyles.container }>

            <Modal visible={modelOpen} animationType="slide">
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        name="close"
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                    />
                    <ReviewForm addReview={addReview} />
                </View>
            </Modal>

            <MaterialIcons 
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList 
                data={ reviews }
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        <Card>
                            <Text style={ globalStyles.titleText }> { item.title } </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
    }
});
