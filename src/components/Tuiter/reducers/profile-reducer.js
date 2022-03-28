import profile from "../data/profile.json"

const profileReducer = (state = profile, action) => {   // initialize the reducer's state - profileJason, action
    switch (action.type) {
        case 'save-profile':
            return [action.profile];
        default:
            return profile;                                          // return the single static state
    }
}

export default profileReducer;