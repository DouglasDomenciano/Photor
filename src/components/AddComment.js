import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
    state = {
        comment: '',
        editMode: true
    }

    handleAddComment = () => {
        Alert.alert('Add', this.state.comment)
    }

    render() {
        let commentArea = null
        if(this.state.editMode){
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Lets comment...' style={styles.input} autoFocus={true} value={this.state.comment} onChangeText={comment => this.setState({ comment })} onSubmitEditing={this.handleAddComment} />
                    <TouchableWithoutFeedback onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555' />
                    </TouchableWithoutFeedback>
                </View>
            )
        } else {
            commentArea = (
                <TouchableWithoutFeedback onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555' />
                        <Text style={styles.caption} > Add your comment...</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }

        return (
            <View style={{flex: 1}}>
                {commentArea}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
})

export default AddComment