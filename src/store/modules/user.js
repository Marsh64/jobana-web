import {DefaultApiInstance} from "@/api/config";

export const User = {
    state: {
        user: {
            email: null,
            firstName: null,
            lastName: null,
            birthDate: null,
            gender: null
        },
        contacts: []
    },
    getters: {
        USER(state) {
            return state.user
        },
        CONTACTS(state) {
            return state.contacts;
        }
    },
    mutations: {
        UPDATE_USER(state, userInfo) {
            state.user.email = userInfo.email;
            state.user.firstName = userInfo.firstName;
            state.user.lastName = userInfo.lastName;
            state.user.birthDate = userInfo.birthDate;
            state.user.gender = userInfo.gender;
        },
        UPDATE_CONTACTS(state, contacts) {
            state.contacts = contacts;
        }

    },
    actions: {
        GET_USER({commit}) {
            return DefaultApiInstance.get("/user").then( res => {
                commit("UPDATE_USER", res.data);
            })
        },
        EDIT_USER({commit}, {params}) {
            return DefaultApiInstance.patch("/user", params).then( res => {
                commit("UPDATE_USER", res.data);
            })
        },
        GET_CONTACTS({commit}) {
            return DefaultApiInstance.get("/contacts/my").then( res => {
                commit("UPDATE_CONTACTS", res.data);
            })
        },
        // ADD_CONTACTS({commit}, {contact}) {
        //     return DefaultApiInstance.post("/contacts").then( res => {
        //         commit("UPDATE_CONTACTS", res.data);
        //     })
        // }
    }
}