import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const BlogPostForm = ({ onSumbit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    const [phoneNumberValidate, setPhoneNumberValidate] = useState(true)
    const [selectedImage, setSelectedImage] = useState(null);
    const [textInputValue, setTextInputValue] = useState(true)
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        // console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };
    const onEnterText = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            setTitle(TextInputValue)
            setTextInputValue(true)
        } else {
            setTitle(TextInputValue)
            setTextInputValue(false)
        }
    }
    const mobilevalidate = (text) => {
        let reg=/^[0-9]{10}$/;
        if (reg.test(text) === false) {
            setContent(text)
            setPhoneNumberValidate(false)
            return false;
        } else {
            setContent(text)
            setPhoneNumberValidate(true);
            return true;
        }
    }
    return (
        <ScrollView>
            <View>
                <View style={{ alignItems: 'center', }}>
                    <View
                        style={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'grey',
                            borderRadius: 100
                        }}
                    >

                        {selectedImage?.localUri ? <Image
                            source={{ uri: selectedImage.localUri }}
                            style={{
                                width: 200,
                                height: 200,
                                borderRadius: 100
                            }}
                        /> : null}
                    </View>
                    <View style={{ height: 20 }}>

                        <TouchableOpacity onPress={openImagePickerAsync} style={{ backgroundColor: '#544E15', marginTop: 2 }}>
                            <Text style={{ color: 'white' }}>Pick a photo</Text>

                            {/* <Entypo name="images" size={24} color="black" onPress={openImagePickerAsync}/> */}
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{padding:30}}>
                    <Text style={styles.label} >Name</Text>
                    <TextInput style={styles.input} value={title} onChangeText={onEnterText} />
                    {!textInputValue ? <Text style={{ color: '#8B0000', fontSize: 12 }}> name is required </Text> : null}
                    <Text style={styles.label}>Phone No.</Text>
                    
                    <TextInput keyboardType="numeric" style={styles.input} value={content} onChangeText={mobilevalidate} maxLength={10}/>
                    {!phoneNumberValidate ? <Text style={{ color: '#8B0000', fontSize: 12 }}>phone number is not valid</Text> : null}
                    <TouchableOpacity onPress={() => onSumbit(title, content, selectedImage?.localUri)} style={styles.button} disabled={!phoneNumberValidate || content.length === 0 && textInputValue|| title.length===0? true : false}>
                        <Text style={{color:'white',fontSize:20}}>Add To Phonebook</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    )
};
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 1,
        padding: 5,
        margin: 5,
        color: "#202020"

    },
    label: {

        fontSize: 20,
        marginBottom: 5,
        margin: 5,
        color: "black",


    },
    button:{
        backgroundColor:"#A74AC7",height:40 ,justifyContent:'center',alignItems:'center',marginTop:50,borderRadius:10
    }
});

export default BlogPostForm
