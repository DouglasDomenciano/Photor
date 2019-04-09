import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: ''
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Choose your image',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if(!res.didCancel){
                this.setState({image: { uri: res.uri, base64: res.data }})
            }
        })
    }

    save = async () => {
        Alert.alert('Success', this.state.comment)
    }

    render(){

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Share your image</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image}/>
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
                        <Text style={styles.buttomText}>Select photo</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='do you have any comment to this photo ?' style={styles.input} value={this.state.comment} onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save} style={styles.buttom}> 
                        <Text style={styles.buttomText}> Save </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})