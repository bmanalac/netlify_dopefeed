import Vuex from 'vuex'
import DummyData from './dummyData.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            dev: true,
            user: {
                name: 'admin',
                password: 'password'
            },
            herostore: DummyData.hero,
            lateststore: DummyData.latestpost,
            utilitystore: DummyData.utilitypost
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