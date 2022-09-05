export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,

    //à supprimer
    token: 'BQC6V1Ahw0CZX_6yIswMwK5ECGTNq-QWG18ombUeRUenynXIzO14ZDNjAC1l5W-_6nGwcLGIAC2kf5ozIy8c1KddhQ7rER01EBHhD7YXRms7HVf8liYhbHkyXgdfFJouxwdpdA-DRHbB3NeoQ0IPWVxFzauvJE1D7Ei9wSq-DzRKiFr6CWK9LpSOzQzIOIeMsiJdFPslttq3kir0tI-x',
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
        default:
            return state;
    }
}
export default reducer;