import {DefaultApiInstance} from "@/api/config";

export const City = {
    state: {
        cities: [],
        city: ""
    },
    getters: {
        ALL_CITIES(state) {
            return state.cities;
        },
        CITY(state) {
            return state.city;
        }
    },
    mutations: {
        UPDATE_CITIES(state, cities){
            return state.cities = cities;
        },
        UPDATE_CITY(state, city){
            return state.city = city;
        }
    },
    actions: {
        GET_CITIES({commit}) {
            return DefaultApiInstance.get("/cities").then( res => {
                commit("UPDATE_CITIES", res.data.map(it => it["name"]));
            })
        },
        SET_CITY({commit}, city) {
            return commit("UPDATE_CITY", city);
        }
    }
}