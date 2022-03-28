import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuits => {
                if(tuits._id === action.tuits._id) {
                    if(tuits.liked === true) {
                        tuits.liked = false;
                        tuits.likes--;
                    } else {
                        tuits.liked = true;
                        tuits.likes++;
                    }
                    return tuits;
                } else {
                    return tuits;
                }
            });


        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuits._id);

        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                username: "ReactJS",
                retuits: 111,
                likes: 222,
                comments: 333
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return tuits
    }

}

export default tuitsReducer;