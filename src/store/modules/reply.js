import {DefaultApiInstance} from "@/api/config";

export const Reply = {
    state: {
        replies: []
    },
    getters: {
        REPLIES(state) {
            return state.replies;
        }
    },
    mutations: {
        UPDATE_REPLIES(state, replies) {
            state.replies = replies;
        }
    },
    actions: {
        // GET_ADVERT_REPLIES({commit}, id) {
        //     return DefaultApiInstance.get(`'adverts/${id}/replies`).then( res => {
        //         commit("UPDATE_ADVERT", res.data);
        //     })
        // },
        GET_MY_REPLIES({commit}) {
            return DefaultApiInstance.get("/replies/my").then( res => {
                commit("UPDATE_REPLIES", res.data);
            })
        },
        SEND_REPLY(state, id) {
            return DefaultApiInstance.post(`/adverts/${id}/replies`).then (res => {
                return res;
            })
        }
    }
}