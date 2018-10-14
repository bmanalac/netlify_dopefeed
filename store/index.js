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
            bannerStore: DummyData.banner,
            featuredStore: DummyData.featured,
            arrayImgStore: DummyData.arrayImage,
        },
        getters: {
            getFilteredArrayImgStore(state) {
                return state.arrayImgStore.filter((posts, i) => {
                    if (i < 3) {
                        return posts
                    }
                })
            },
            getFeaturedStore(state) {
                return state.featuredStore;
            },
            getBannerStore(state) {
                return state.bannerStore;
            },
            getArrayImgStore(state) {
                return state.arrayImgStore;
            }
        },
        mutations: {
            changeMode(state, payload) {
                state.dev = payload.mode;
            }
        }
    });
}

export default createStore;