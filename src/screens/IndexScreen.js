import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Context } from '../context/BlogContext';
import { Feather, AntDesign } from '@expo/vector-icons';
import EditScreen from './EditScreen';





const IndexScreen = ({ navigation, route }) => {
    //  console.log("route",route)

    // console.log("IndexScreen",IndexScreen)
    const { state, deleteBlogPosts } = useContext(Context)


    // console.log("testing" , state)
    const additem = async () => {
        await AsyncStorage.setItem('abhay', `2`);
    }
    const getItme = async () => {
        const data = await AsyncStorage.getItem('abhay');
        //   console.log('data', setDat(data))
    }

    return (
        <View>



            <FlatList

                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        

                            <View style={styles.row}>
                                <Image style={{ height: 80, width: 60 }} source={{ uri: item.selectedImage }} />
                                <View style={{ padding: 20 }}>
                                    <Text style={styles.title}>{item.title} </Text>
                                    <Text>+91 {item.content}</Text>
                                </View>
                                <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <AntDesign name="edit" size={30} color="black" onPress={() => navigation.navigate('Edit', { id: item.id })} />
                                    <TouchableOpacity onPress={() => deleteBlogPosts(item.id)} style={{ marginLeft: 10 }}>

                                        <Feather style={styles.icon} name="trash" />


                                    </TouchableOpacity>
                                </View>

                            </View>
                        





                    )

                }}

            />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7,
        paddingHorizontal: 5,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;

