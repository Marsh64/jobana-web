import {AuthApi} from "@/api";
import {UserRole} from "@/utils/UserRoles"
import {DefaultApiInstance} from "@/api/config";

export const Auth = {
    // namespaced: true,
    state: {
        credentials: {
            token: localStorage.getItem('token') || null,
            userRole: localStorage.getItem('userRole') || UserRole.Guest
        },
        isAuthorized: !!(localStorage.getItem('token'))
    },

    getters: {
        getUserRole(state) {
            return state.credentials.userRole;
        },
        getIsAuthorized(state) {
            return state.isAuthorized;
        }
    },

    mutations: {
        setToken(state, token) {
            state.credentials.token = token;
            state.isAuthorized = true;
            localStorage.setItem('token', token);
        },
        setUserRole(state, userRole) {
            state.credentials.userRole = userRole;
            localStorage.setItem('userRole', userRole);
        },
        deleteToken(state) {
            state.credentials.token = null;
            state.isAuthorized = false;
            localStorage.removeItem('token');
        },
        deleteUserRole(state) {
            state.credentials.userRole = UserRole.Guest;
            localStorage.removeItem('userRole');
        }
    },

    actions: {
        onLogin({commit}, {params}) {
            return AuthApi.login(params.email, params.password).then( res => {
                commit('setToken', res.data.token);
                commit('setUserRole', res.data.userRole);
                DefaultApiInstance.defaults.headers['Authorization'] = `Bearer ${res.data.token}`;
            })
        },
        onRegistration({commit}, {params}) {
            return AuthApi.registration(params.email, params.password, params.firstname,
                params.lastname, params.birthDate, params.gender).then( res => {
                commit('setToken', res.data.token);
                commit('setUserRole', res.data.userRole);
                DefaultApiInstance.defaults.headers['Authorization'] = `Bearer ${res.data.token}`;
            })
        },
        onLogout({commit}) {
            commit('deleteToken');
            commit('deleteUserRole');
            delete DefaultApiInstance.defaults.headers['Authorization'];
        }
    }
}