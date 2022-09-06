export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,

    // //à supprimer
    token: 'BQBAPRclnY5P8vdoHaoN6tcH1uwoh1KUlt8Wij0tUA6a8SXsq5-pbFqKjtezPpbXLvzIsPgHH8l83ErqoYr5YpI0SdPJTYHa9HIOCSxv_Ai5JeijuTHWSb0Cff6YDI8W32bB4oNn74USjKh90uEZJj8kTO9RS_RGKfXOQsbiEucF9f3mahCbbPPJJ3I3kGHm8uJAOgaCCxnz9j8xHPeh',
};

const reducer = (state, action) => {
    console.log(action);
    //action:lecture encoure

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_NEW_MUSIC_FRIDAY':
            return {
                ...state,
                new_music_friday: action.new_music_friday,
            }
        default:
            return state;
    }
}
export default reducer;