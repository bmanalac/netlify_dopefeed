import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            dev: false,
            user: {
                name: 'admin',
                password: 'password'
            }
        },
        getters: {},
        mutations: {
            changeMode(state, mode) {
                state.dev = mode;
            }
        }
    })
}

export default createStore