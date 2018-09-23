import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            dev: true,
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