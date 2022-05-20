import React,{useState} from 'react'
import { View, Text,StyleSheet,Button,TextInput } from 'react-native'

const BlogPostForm = ({onSumbit,initialValues}) => {
    const[title,setTitle]=useState(initialValues.title)
    const [content,setContent]=useState(initialValues.content)
    return (
        <View>
        <Text style={styles.label} >Enter Title:-</Text>
        <TextInput  style={styles.input} value={title} onChangeText={text=>setTitle(text)}/>
        <Text style={styles.label}>Enter Content:-</Text>
        <TextInput style={styles.input} value={content} onChangeText={text=>setContent(text)}/>

        <Button title="Save blog Post" onPress={()=>onSumbit(title,content)}/>

    </View>
    )
};
BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
}
const styles=StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:2,
        borderColor:'black',
        marginBottom:1,
        padding:5,
        margin:5,
        color:"#202020"
        
    },
    label:{
        fontSize:20,
        marginBottom:5,
        margin:5,
        color:"#660000",
        

    }
});

export default BlogPostForm
