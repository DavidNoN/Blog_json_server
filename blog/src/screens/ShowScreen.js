import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ( { route } ) => {
    
    const { state } = useContext( Context );
    
    const blogPost = state.find( blogSpot => blogSpot.id === route.params.id );
    
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};


const styles = StyleSheet.create( {} );

export default ShowScreen;