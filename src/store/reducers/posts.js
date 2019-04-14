import { ADD_POST } from "../actions/actionTypes";

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
        default:
            return state
            break;
    }
}

export default reducer