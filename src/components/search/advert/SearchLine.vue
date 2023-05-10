<template>
  <div class="job-search-box">
    <div class="search">
      <b-button class="search-img" v-on:click="onSubmit">
        <img
            src="http://localhost:8080/assets/advert/search_icon.svg"
            height="26px"
            width="26px"
        >
      </b-button>
      <b-form-input
          id="input"
          v-model="search"
          placeholder="Поиск..."
          class="search-form"
      ></b-form-input>
    </div>
  </div>

</template>

<script>
export default {
  name: "SearchLine",
  data() {
    return {
      search: ""
    }
  },
  methods: {
    onSubmit() {
      console.log("opt_search")
      const categories = this.get_categories;
      const city = this.get_city;
      const params = {
        categories: null,
        city: null,
        size: null
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
    },
    onError(err) {
      this.$bvToast.toast(`Ошибка: ${err}`, {
        title: 'Login error',
        autoHideDelay: 5000,
        variant: 'danger',
        noAutoHide: true
      })
    }
  },
  computed: {
    get_categories(){
      return this.$store.getters.SELECTED;
    },
    get_city(){
      return this.$store.getters.CITY
    }
  }
}
</script>

<style scoped>

.job-search-box {
  margin: 0;
  padding: 15px 50px;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  display: flex;
  justify-content: center;
  height: 50px;
  width: 640px;
  border-radius: 10px;
  box-shadow: 0 2px 5px #555353;
}
.search-img {
  background-color: #537FE7;
  border-radius: 10px 0 0 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: #537FE7 2px solid;
}

.search-form{
  height: 50px;
  width: 590px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: white;
  border-radius: 0 10px 10px 0;
}

</style>