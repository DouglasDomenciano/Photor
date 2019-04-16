import { ADD_POST, ADD_COMMENT } from "../actions/actionTypes";

const initialState = {
    posts:[{
        id: Math.random(),
        nickname: 'José da Silva',
        email: 'jose@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
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
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'Cabrito Tevez',
            comment: 'DALOLA!'
        }]
    },]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({ ...action.payload })
            }
            break;
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map( post => {
                    if(post.id === action.payload.postId){
                        if(post.comments){
                            post.comments = post.comments.concat(action.payload.comment)
                        }else{
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
            break;
        default:
            return state
            break;
    }
}

export default reducer