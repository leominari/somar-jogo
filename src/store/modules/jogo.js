export const jogo = {
    state: () => ({
        snack: '',
        usuario: '',
    }),
    mutations: {
        setSnack(state, snack) {
            state.snack = snack
        },
        SET_USUARIO(state, payload) {
            state.usuario = payload;
        }
    },
    actions: {}
}

export default jogo;