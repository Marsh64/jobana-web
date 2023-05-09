import {DefaultApiInstance} from "@/api/config";

export const Advert = {
    state: {
        adverts: [],
        advert: {}
    },

    getters: {
        ALL_ADVERTS(state) {
            return state.adverts;
        },
        ADVERT(state) {
            return state.oneAdvert;
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
                commit("UPDATE_ADVERTS", res.data);
            })
        }
    }
}