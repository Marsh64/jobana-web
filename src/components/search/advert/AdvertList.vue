<template>
  <div>
    <MyHeader/>
    <div class="city-search-position">
      <CitySearch/>
    </div>
    <div class="category-search-position">
      <CategorySearch/>
    </div>
    <div class="d-flex justify-content-center">
      <div class="category-list-search-items">
        <SearchLine/>
        <div v-for="advert in adverts" :key="advert.id">
          <JobAdvertItem v-bind:advert="advert"/>
        </div>
        <div class="d-flex justify-content-end">
          {{loaded}}/{{total}}
        </div>
        <div v-if="!last" class="d-flex justify-content-center mt-4 mb-3" v-on:click="onAdd">
          <button class="add d-flex justify-content-center align-items-center">
            +
          </button>
        </div>
      </div>
    </div>
<!--    <MyFooter></MyFooter>-->
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import CategorySearch from "@/components/search/CategorySearch.vue";
import SearchLine from "@/components/search/advert/SearchLine.vue";
import CitySearch from "@/components/search/CitySearch.vue";
import JobAdvertItem from "@/components/search/advert/JobAdvertItem.vue";
// import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "AdvertList",
  components: {SearchLine, CategorySearch, MyHeader, CitySearch, JobAdvertItem}, // JobAdvertItem,MyFooter,
  data() {
    return{
      job_adverts: {}
    }
  },
  computed: {
    adverts() {
      return this.$store.getters.ADVERTS;
    },
    last() {
      console.log(this.$store.getters.LAST)
      return this.$store.getters.LAST;
    },
    get_categories(){
      return this.$store.getters.SELECTED;
    },
    get_city(){
      return this.$store.getters.CITY
    },
    loaded() {
      return this.$store.getters.LOADED;
    },
    total() {
      return this.$store.getters.TOTAL;
    }
  },
  mounted() {
    this.$store.dispatch("GET_ALL_ADVERTS").catch( err => {
      this.onError(err);
    })
  },
  methods: {
    onError(err) {
      this.$bvToast.toast(`Ошибка: ${err}`, {
        title: "Login error",
        autoHideDelay: 5000,
        variant: "danger"
      })
    },
    onAdd() {
      console.log("add_adverts")
      const categories = this.get_categories;
      const city = this.get_city;
      const size = 10 + this.loaded;
      const params = {
        categories: null,
        city: null,
        size: size
      }

      if (categories.length !== 0) {
        params["categories"] = categories.join();
      }
      if (city !== "" || null) {
        params["city"] = city;
      }


      console.log(city)
      this.$store.dispatch("GET_OPT_ADVERTS", params).catch( err => {
        this.onError(err);
      })
    }
  }
}
</script>

<style scoped>

.category-list-search-items {
  width: 785px;
  height: 100%;
  background: #FAFAFA;
}

.job-search {
  width: 100%;
  margin: 20px 40px;
  border: solid #666A6D 2px;
}
.add {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: #A9A9A9 2px solid;
  color: black;
  font-size: 40px;
  transition-duration: 0.25s;
}
.add:hover {
  background-color: #A9A9A9;
  border: #555353;
  color: white;
}
.add:active {
  background-color: #6A6A6A;
}

.city-search-position {
  position: absolute;
  left: 3%;
  top: 17%;
}

.category-search-position {
  position: absolute;
  left: 3%;
  top: 40%;
}

</style>