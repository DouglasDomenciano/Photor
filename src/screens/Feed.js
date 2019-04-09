import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts:[{
            id: Math.random(),
            nickname: 'José da Silva',
            email: 'jose@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'FODA!'
            },{
                nickname: 'Ronaldo MCDonaldo',
                comment: 'AMAZING!'
            }]
        },{
            id: Math.random(),
            nickname: 'Maria da Chica',
            email: 'chica@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Cabrito Tevez',
                comment: 'DALOLA!'
            }]
        },]
    }
    render(){
        return(
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts} keyExtractor={item => `${item.id}`} renderItem={({item}) => <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FcFF'
    }
})

export default Feed