import Vue from 'vue'
import Vuex from 'vuex'
import {Auth} from "@/store/modules/auth";
import {PersonalAdvert} from "@/store/modules/personalAdvert"
import {Advert} from "@/store/modules/advert"
import {Category} from "@/store/modules/category";
import {City} from "@/store/modules/city";
import {Reply} from "@/store/modules/reply";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth: Auth,
        personalAdvert: PersonalAdvert,
        advert: Advert,
        category: Category,
        city: City,
        reply: Reply
    }
})
