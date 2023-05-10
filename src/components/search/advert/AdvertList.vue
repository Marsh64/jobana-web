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