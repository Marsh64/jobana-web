<template>
  <b-container class="city-search">
    <div class="title">Город</div>
    <b-form-select v-model="city" :options="cities" :key="componentKey" class="font"></b-form-select>
  </b-container>
</template>

<script>
export default {
  name: "CitySearch",
  data() {
    return {
      city: "",
      componentKey: 0
    }
  },
  mounted() {
    this.$store.dispatch("GET_CITIES");
  },
  computed: {
    cities() {
      this.forceRenderer();
      return this.$store.getters.ALL_CITIES;
    },
    get_selected() {
      return this.$store.getters.CITY;
    }
  },
  methods: {
    forceRenderer() {
      this.componentKey += 1;
    }
  },
  watch: {
    city: function(city){
      this.$store.dispatch("SET_CITY", city);
    }
  }

}
</script>

<style scoped>
.city-search{
  height: 100%;
  width: 270px;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 5px #555353;
  margin: 0;
  background-color: white;
}
.title {
  font-size: 16px;
}
.font {
  font-size: 14px;
  color: black;
}
</style>