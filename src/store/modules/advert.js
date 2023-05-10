import {DefaultApiInstance} from "@/api/config";

export const Advert = {
    state: {
        adverts: [],
        advert: {}
    },

    getters: {
        ADVERTS(state) {
            return state.adverts;
        },
        ADVERT(state) {
            return state.advert;
        }
    },

    mutations: {
        UPDATE_ADVERTS(state, adverts) {
            state.adverts = adverts;
        },
        UPDATE_ADVERT(state, advert) {
            state.advert = advert;
        }
    },

    actions: {
        GET_ALL_ADVERTS({commit}) {
            return DefaultApiInstance.get("/adverts").then( res => {
                commit("UPDATE_ADVERTS", res["data"]["content"]);
            })
        },
        GET_ADVERT({commit}, id) {
            return DefaultApiInstance.get(`/adverts/${id}`).then( res => {
                console.log(res)
                console.log(res.data)
                commit("UPDATE_ADVERT", res.data);
            })
        },
    }
}