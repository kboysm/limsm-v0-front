import Vue from 'vue'
import Vuex, { StoreOptions, ActionContext } from 'vuex';

Vue.use(Vuex)
interface State {
    token : string;
    user : User;
    cartList: Array<cartList> | [];
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

interface cartList extends Object {
    id: number;
    imgUrl: string;
    name: string;
    description: string;
    quantity: number;
    grade: number;
    salesQuantity: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    purchaseQuantity: number;
  }

const user:any = ():any => {
    const stringUser: string | null = localStorage.getItem('user');
    if(stringUser) return JSON.parse( stringUser )
    else{
        return {}
    }
}

const cartList = () => {
    const cartList: string | null = localStorage.getItem('cart');
    if(cartList) return JSON.parse( cartList )
    else{
        return []
    }
}

const store: StoreOptions<State> = {
    state: {
        token: localStorage.getItem('token') || '',
        user: user(),
        cartList: cartList()
    },
    mutations: {
        setToken(state: State , token: string) {
            localStorage.setItem('token' , token)
            state.token = token
        },
        setUser(state: State , user: User) {
            localStorage.setItem('user' , JSON.stringify(user))
            state.user = user
        },
        
        setCartList(state: State , cartList: Array<cartList>) {
            localStorage.setItem('cart' , JSON.stringify(cartList))
            state.cartList= cartList 
        }


    },
    actions: {
        setToken({state, getters , dispatch , commit}:ActionContext<State, State>, token:string) {
            commit('setToken' , token);
        },
        setUser({state, getters , dispatch , commit}:ActionContext<State, State>, user: User) {
            commit('setUser' , user);
        },
        setCartList({state, getters , dispatch , commit}:ActionContext<State, State>, cartList: Array<cartList>) {
            commit('setCartList' , cartList);
        },
    },
    getters: {
        getToken: (state: State) => state.token,
        getUser: (state: State) => state.user,
        getCartList: (state: State) => state.cartList,
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
