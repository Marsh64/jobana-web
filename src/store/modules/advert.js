import {DefaultApiInstance} from "@/api/config";

export const Advert = {
    state: {
        adverts: [],
        advert: {},
        lastPage: null,
        loaded: null,
        total: null
    },

    getters: {
        ADVERTS(state) {
            return state.adverts;
        },
        ADVERT(state) {
            return state.advert;
        },
        LAST(state) {
            return state.lastPage;
        },
        LOADED(state) {
            return state.loaded;
        },
        TOTAL(state) {
            return state.total;
        }
    },

    mutations: {
        UPDATE_ADVERTS(state, adverts) {
            state.adverts = adverts;
        },
        UPDATE_ADVERT(state, advert) {
            state.advert = advert;
        },
        UPDATE_LAST(state, bool) {
            state.lastPage = bool;
        },
        UPDATE_LOADED(state, count) {
            state.loaded = count;
        },
        UPDATE_TOTAL(state, count) {
            state.total = count;
        }
    },

    actions: {
        GET_ALL_ADVERTS({commit}) {
            return DefaultApiInstance.get("/adverts").then( res => {
                commit("UPDATE_ADVERTS", res["data"]["content"]);
                commit("UPDATE_LAST", res["data"]["last"]);
                commit("UPDATE_LOADED", res["data"]["numberOfElements"]);
                commit("UPDATE_TOTAL", res["data"]["totalElements"]);
                // console.log("last: " + res["data"]["last"])
                // console.log("number: " + res["data"]["numberOfElements"])
                // console.log("total: " + res["data"]["totalElements"])
                console.log(res["data"]["content"])
            })
        },
        GET_ADVERT({commit}, id) {
            return DefaultApiInstance.get(`/adverts/${id}`).then( res => {
                commit("UPDATE_ADVERT", res.data);
            })
        },
        GET_OPT_ADVERTS({commit}, params) {
            let url = "/adverts?";
            if (params["categories"] !== null) {
                url += `category=${params.categories}&`;
            }

            if (params["city"] !== null) {
                url += `city=${params.city}&`;
            }

            if (params["size"] !== null) {
                url += `size=${params.size}`;
            }

            return DefaultApiInstance.get(url).then( res => {
                commit("UPDATE_ADVERTS", res["data"]["content"]);
                commit("UPDATE_LAST", res["data"]["last"]);
                commit("UPDATE_LOADED", res["data"]["numberOfElements"]);
                commit("UPDATE_TOTAL", res["data"]["totalElements"]);
            })
        }
    }
}