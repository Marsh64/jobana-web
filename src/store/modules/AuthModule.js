import {AuthApi} from "@/api/authApi";
import {UserRole} from "@/utils/UserRoles"
import {DefaultApiInstance} from "@/api/authApi/config";

export const AuthModule = {
    namespaced: true,

    state: {
        credentials: {
            token: localStorage.getItem('token') || null,
            userRole: localStorage.getItem('userRole') || UserRole.Guest
        }
    },

    getters: {
        getUserRole(state) {
            return state.credentials.userRole
        }
    },

    mutations: {
        setToken(state, token) {
            state.credentials.token = token;
            localStorage.setItem('token', token);
        },
        setUserRole(state, userRole) {
            state.credentials.userRole = userRole;
            localStorage.setItem('userRole', userRole);
        },
        deleteToken(state) {
            state.credentials.token = null;
            localStorage.removeItem('token');
        },
        deleteUserRole(state) {
            state.credentials.userRole = UserRole.Guest;
            localStorage.removeItem('userRole');
        }
    },

    actions: {
        onLogin({commit}, {params}) {
            return AuthApi.login(params.login, params.password).then( res => {
                commit('setToken', res.data.token);
                commit('setUserRole', res.data.userRole)
                DefaultApiInstance.defaults.headers['authorization'] = `Bearer ${res.data.token}`;
            })
        },
        onLogout({commit}) {
            commit('deleteToken');
            commit('deleteUserRole');
            delete DefaultApiInstance.defaults.headers['authorization'];
        }
    }
}