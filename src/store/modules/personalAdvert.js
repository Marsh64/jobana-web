import {DefaultApiInstance} from "@/api/config";

export const PersonalAdvert = {
    state: {
        myAdverts: [],
        oneAdvert: {} //то, которое будем редактировать или создавать
    },

    getters: {
        MY_ADVERTS(state) {
            return state.myAdverts;
        },
        ONE_ADVERT(state) {
            return state.oneAdvert;
        }
    },

    mutations: {
        UPDATE_MY_ADVERTS(state, adverts) {
            state.myAdverts = adverts;
        },
        UPDATE_ONE_ADVERT(state, advert) {
            state.oneAdvert = advert;
        }
    },

    actions: {
        GET_MY_ADVERTS({commit}) {
            return DefaultApiInstance.get("/adverts/my").then( res => {
                commit("UPDATE_MY_ADVERTS", res.data);
            })
        },
        GET_MY_ADVERT({commit}, id) {
            return DefaultApiInstance.get(`/adverts/${id}`).then( res => {
                commit("UPDATE_ONE_ADVERT", res.data);
            })
        },
        CREATE_ADVERT(state, {params}) {
            const data = {}
            data["title"] = params.title;
            data["shortDescription"] = params.shortDescription;
            data["description"] = params.description;
            data["price"] = params.price;
            data["city"] = params.city;
            data["categories"] = params.categories;
            return DefaultApiInstance.post("/adverts", data).then ( res => {
                return res;
            })
        },
        EDITING_ADVERT(state, {params}) {
            const data = {}
            const id = params.id

            data["title"] = params.title;
            data["shortDescription"] = params.shortDescription;
            data["description"] = params.description;
            data["price"] = params.price;
            data["city"] = params.city;
            data["categories"] = params.categories;
            return DefaultApiInstance.put(`/adverts/${id}`, data).then ( res => {
                return res;
            })
        },
        DELETE_ADVERT(state, {id}) {
            return DefaultApiInstance.delete(`/adverts/${id}`).then ( res => {
                return res;
            })
        }
    }
}