<template>
  <div>
    <MyHeader></MyHeader>
    <div class="my-data">
      <div class="category-search-position">
        <CategorySearch></CategorySearch>
      </div>
      <div class="category-list-search-items">
        <JobSearch></JobSearch>
        <div v-for="advert in job_adverts" :key="advert.title">
          <JobAdvertItem v-bind:advert="advert"></JobAdvertItem>
        </div>
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import CategorySearch from "@/components/advert/CategorySearch.vue";
import JobSearch from "@/components/advert/JobSearch.vue";
import JobAdvertItem from "@/components/advert/JobAdvertItem.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "AdvertOfJob",
  components: {MyFooter, JobAdvertItem, JobSearch, CategorySearch, MyHeader},
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

.category-search-position {
  position: absolute;
  left: 3%;
  top: 17%;
}

</style>