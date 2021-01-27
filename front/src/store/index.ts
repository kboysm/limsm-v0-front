import Vue from 'vue'
import Vuex, { StoreOptions, ActionContext } from 'vuex';

Vue.use(Vuex)
interface State {
    token : string;
}
const store: StoreOptions<State> = {
    state: {
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        setToken(state: State , token: string) {
            localStorage.setItem('token' , token)
            state.token = token
        }
    },
    actions: {
        setToken({state, getters , dispatch , commit}:ActionContext<State, State>, token:string) {
            commit('setToken' , token);
        }
    },
    getters: {
        getToken: (state: State) => state.token
    }
}

export default new Vuex.Store(store);

// import state from './states'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'


// export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
//   getters,
// })
