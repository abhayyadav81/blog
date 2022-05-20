import React,{useContext,useEffect,useState} from 'react'
import { View, Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';




const IndexScreen = ({navigation}) => {
    
    console.log("IndexScreen",IndexScreen)
    const {state,deleteBlogPosts }=useContext(Context)
    

    console.log("testing" , state)
     const additem=async()=>{
        await AsyncStorage.setItem('abhay', `2`);    }
        const getItme=async()=>{
          const data =  await AsyncStorage.getItem('abhay'); 
          console.log('data', setDat(data))
           }
    
    return (
        <View>
            
            
            
            <FlatList
            data={state}
            keyExtractor={blogPost=>blogPost.title}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                         <View style={styles.row}> 
                          <Text style={styles.title}>{item.title} -{item.id}</Text>
                          <TouchableOpacity onPress={()=>deleteBlogPosts(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                                       

                          </TouchableOpacity>
                          
                       </View>
                      
                       
     
                    </TouchableOpacity>
                    
                   
                )
                
            }}
            
            />
        </View>
    )
};

const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical : 7,
        paddingHorizontal:5,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
});

export default IndexScreen;

