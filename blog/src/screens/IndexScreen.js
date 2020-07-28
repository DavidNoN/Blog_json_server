import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ( { navigation } ) => {
    
    const { state, deleteBlogPost, getBlogPosts } = useContext( Context );
    
    useEffect(() => {
        getBlogPosts();
        
        const listener = navigation.addListener('focus', () => {
           getBlogPosts();
        });
        
        return () => {
            listener.removeListener();
        };
    }, []);
    
    return (
        <>
            <FlatList
                data={ state }
                keyExtractor={ ( blogPosts ) => blogPosts.title }
                renderItem={ ( { item } ) => {
                    return (
                        <TouchableOpacity
                            onPress={ () => navigation.navigate( 'ShowBlog', { id: item.id } ) }>
                            <View style={ styles.row }>
                                <Text style={ styles.title }>
                                    { item.title } - { item.id }
                                </Text>
                                <TouchableOpacity onPress={ () => deleteBlogPost( item.id ) }>
                                    <Feather style={ styles.icon }
                                             name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                } }/>
        </>
    );
};


const styles = StyleSheet.create( {
                                      row: {
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                          paddingVertical: 20,
                                          paddingHorizontal: 10,
                                          borderTopWidth: 1,
                                          borderColor: 'gray'
                                      },
                                      title: {
                                          fontSize: 18
                                      },
                                      icon: {
                                          fontSize: 24
                                      }
    
                                  } );

export default IndexScreen;