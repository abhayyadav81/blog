import React,{useContext} from 'react'
import {StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({navigation}) => {
  
    const{addBlogPosts}=useContext(Context)
    
    return <BlogPostForm onSumbit={(title,content,selectedImage)=>{
        console.log("shii",title,content,selectedImage)
        addBlogPosts(title,content,selectedImage,()=>navigation.navigate('Index'))
    }} />
        
    
}
const styles=StyleSheet.create({

})

export default CreateScreen
 