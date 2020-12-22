import Vue from 'vue'
import Vuex from 'vuex'
import jwtdecode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        user: null,

    },
    getters: {

        getUser: state => {
            return state.user;
        }
    },

    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUsuario(state, usuario) {
            state.user = usuario;
        }
    },

    actions: {
        guardarToken({ commit }, token) {
            commit("setToken", token);
            commit("setUsuario", jwtdecode(token));
            localStorage.setItem('token', token);
        },

        autoLogin({ commit }) {
            const token = localStorage.getItem('token', token);
            console.log("token del autologin",token)
            if (token) {
                commit("setToken", token);
                commit("setUsuario", jwtdecode(token));

                // console.log("User - autologin", this.state.user)

                // console.log('tokenpropagado')
                //     if (router.path !== '/auth') {
                //         router.push({ name: 'Auth' });
                //     }
                } else {
                    console.log('token no encontrado');
                    return false
                    
            }



        },
        salir({ commit }) {
            commit("setToken", null);
            commit("setUsuario", null);
            localStorage.removeItem('token');
            router.push({ name: 'Home' });
        }
    }
})

export default store;