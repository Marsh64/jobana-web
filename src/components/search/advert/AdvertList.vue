<template>
  <div>
    <MyHeader></MyHeader>
    <div class="my-data">
      <div class="city-search-position">
        <CitySearch></CitySearch>
      </div>
      <div class="category-search-position">
        <CategorySearch></CategorySearch>
      </div>
      <div class="category-list-search-items">
        <JobSearch></JobSearch>
<!--        <div v-for="advert in getAdverts" :key="advert.title">-->
<!--          {{advert}}-->
<!--          <JobAdvertItem v-bind:advert="advert"></JobAdvertItem>-->
<!--        </div>-->
      </div>
    </div>
<!--    <MyFooter></MyFooter>-->
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import CategorySearch from "@/components/search/CategorySearch.vue";
import JobSearch from "@/components/search/advert/JobSearch.vue";
import CitySearch from "@/components/search/CitySearch.vue";
// import JobAdvertItem from "@/components/search/advert/JobAdvertItem.vue";
// import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "AdvertList",
  components: { JobSearch, CategorySearch, MyHeader, CitySearch}, // JobAdvertItem,MyFooter,
  data() {
    return{
      job_adverts: [
        {
          title: "Объявление 1",
          short_description: "Краткое объяснение",
          description: "Подробное объяснение",
          created_at: "01.04.2000",
          town: "Москва",
          place: "г.Москва, ул.Пушкина, дом Кукушкина к228",
          price: "5000 кредитов",
          photo: ["assets/photo/img1.png", "assets/photo/img2.png"]
        },
        {
          title: "Объявление 1",
          short_description: "Краткое объяснение",
          description: "Подробное объяснение",
          created_at: "01.04.2000",
          town: "Москва",
          place: "г.Москва, ул.Пушкина, дом Кукушкина к228",
          price: "5000 кредитов",
          photo: ["assets/photo/img1.png", "assets/photo/img2.png"]
        },
        {
          title: "Объявление 3",
          short_description: "Краткое объяснение",
          description: "Подробное объяснение",
          created_at: "01.04.2000",
          town: "Москва",
          place: "г.Москва, ул.Пушкина, дом Кукушкина к228",
          price: "5000 кредитов",
          photo: ["assets/photo/img1.png", "assets/photo/img2.png"]
        }
      ],
    }
  },
  computed: {
    getAdverts() {
      return this.$store.getters.ALL_ADVERTS;
    }
  },
  // mounted() {
  //   this.$store.dispatch("GET_ALL_ADVERTS").catch( err => {
  //     this.onError(err);
  //   })
  // },
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

.my-data {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

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