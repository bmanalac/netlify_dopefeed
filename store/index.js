import Vuex from 'vuex'
import DummyData from './dummyData.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            dev: false,
            user: {
                name: 'admin',
                password: 'password'
            },
            bannerstore: DummyData.banner,
            choices: DummyData.choices,
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