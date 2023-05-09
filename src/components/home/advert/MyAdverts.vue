<template>
  <div>
    <div v-if="getAdverts.length === 0">
      <b-container>
        <b-row>
          <b-col>
            У вас нет объявлений
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <b-container v-for="advert in getAdverts" :key="advert.id">
        <b-row class="frame px-5 py-3 mx-5 my-3">
          <b-col>
            <div class="d-flex">
              <div class="grey mr-2">Название:</div>
              <div>{{ advert.title }}</div>
            </div>
            <div class="d-flex">
              <div class="grey mr-2">Краткое описание:</div>
              <div>{{ advert.shortDescription }}</div>
            </div>
            <div class="d-flex">
              <div class="grey mr-2">Полное описание:</div>
              <div>{{ advert.description }}</div>
            </div>
            <div class="d-flex">
              <div class="grey mr-2">Цена:</div>
              <div>{{ advert.price }}</div>
            </div>
            <div class="d-flex">
              <div class="grey mr-2">Категория:</div>
              <div>{{ advert.categories.join() }}</div>
            </div>
            <div class="d-flex">
              <div class="grey mr-2">Создано:</div>
              <div>{{ advert.createdAt }}</div>
            </div>
            <div class="d-flex justify-content-around mt-3">
              <b-button class="my-button" variant="primary" v-bind:href="'/home/edit-advert/' + advert.id">Изменить объявление</b-button>
              <b-button class="my-button" v-on:click="onDelete(advert.id)" variant="danger">Удалить объявление</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAdverts",
  mounted : function() {
    if (this.$store.getters.CATEGORIES_LIST.length === 0){
      this.$store.dispatch("GET_CATEGORIES");
    }
    this.$store.dispatch('GET_MY_ADVERTS');
  },
  computed: {
    getAdverts() {
      return this.$store.getters.MY_ADVERTS;
    }
  },
  methods: {
    onDelete(id) {
      this.$store.dispatch('DELETE_ADVERT', {id: id}).catch( err => {
        this.onError(err);
      });
      location.reload();
    },
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
.frame {
  border-radius: 10px;
  border: #A9A9A9 2px solid;
  background-color: white;
}
.grey {
  color: #666A6D;
}
.my-button {
  font-weight: bold;
  border-radius: 10px;
  width: 30%;
}
</style>