let initialState = {
    contactList : [],
};

function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case 'ADD_CONTACT':
            return{
                ...state, 
                contactList:[
                    ...state.contactList,
                    {
                        name: action.payload.name,
                        phoneNumber:action.payload.phoneNumber,
                    },
                ],
            };
        default :
            return { ...state };
    }
}

export default reducer;
