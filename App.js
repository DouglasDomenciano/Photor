
import React, {Component} from 'react'
import Header from './src/components/Header'
import { View } from 'react-native'
import Post from './src/components/Post'



export default class App extends Component{
  render() {
      const comments = [{
            nickname: 'nickname 1',
            comment: 'teste comment1'
        },{
            nickname: 'nickname 2',
            comment: 'teste comment2'
        },{
            nickname: 'nickname 3',
            comment: 'teste comment3'
    }]
    return (
        <View style={{flex: 1}}>
            <Header />
            <Post image={require('./assets/imgs/fence.jpg')} comments={comments}/>
        </View>
    )
  }
}


