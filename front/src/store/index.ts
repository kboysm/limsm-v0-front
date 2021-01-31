import Vue from 'vue'
import Vuex, { StoreOptions, ActionContext } from 'vuex';

Vue.use(Vuex)
interface State {
    token : string;
    user : any;
}
const store: StoreOptions<State> = {
    state: {
        token: localStorage.getItem('token') || '',
        user: localStorage.getItem('user') ? JSON.parse( localStorage.getItem('user')) : {}
    },
    mutations: {
        setToken(state: State , token: string) {
            localStorage.setItem('token' , token)
            state.token = token
        },
        setUser(state: State , user: any) {
            localStorage.setItem('user' , JSON.stringify(user))
            state.user = user
        }
    },
    actions: {
        setToken({state, getters , dispatch , commit}:ActionContext<State, State>, token:string) {
            commit('setToken' , token);
        },
        setUser({state, getters , dispatch , commit}:ActionContext<State, State>, user: any) {
            commit('setUser' , user);
        }
    },
    getters: {
        getToken: (state: State) => state.token,
        getUser: (state: State) => state.user
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
