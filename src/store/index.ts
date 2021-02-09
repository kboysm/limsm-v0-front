import Vue from 'vue'
import Vuex, { StoreOptions, ActionContext } from 'vuex';

Vue.use(Vuex)
interface State {
    token : string;
    user : User;
}

interface User {
    address: string;
    age: number;
    createdAt: Date;
    email: string;
    id: number;
    name: string;
    password: string;
    updatedAt: Date;
}

const user:any = ():any => {
    const stringUser: string | null = localStorage.getItem('user');
    if(stringUser) return JSON.parse( stringUser )
    else{
        return {}
    }
}

const store: StoreOptions<State> = {
    state: {
        token: localStorage.getItem('token') || '',
        user: user()
    },
    mutations: {
        setToken(state: State , token: string) {
            localStorage.setItem('token' , token)
            state.token = token
        },
        setUser(state: State , user: User) {
            localStorage.setItem('user' , JSON.stringify(user))
            state.user = user
        }
    },
    actions: {
        setToken({state, getters , dispatch , commit}:ActionContext<State, State>, token:string) {
            commit('setToken' , token);
        },
        setUser({state, getters , dispatch , commit}:ActionContext<State, State>, user: User) {
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
