<template>
  <div>
    <MyHeader></MyHeader>
    <div>
      <b-container class="box">
        <b-row>
          <b-col>
            <div class="back d-flex justify-content-center align-items-center">
              <a href="/adverts">
                <img
                    src="http://localhost:8080/assets/advert/arrow.svg"
                    height="20px"
                    width="24px"
                >
              </a>
            </div>
            <div class="title d-flex justify-content-center">
              {{advert.title}}
            </div>
            <div class="d-flex my-3">
              <div class="grey mr-2">Подробное описание:</div>
              <div>{{advert.description}}</div>
            </div>
            <div class="d-flex my-3">
              <div class="grey mr-2">Категории:</div>
              <div>{{advert.categories.join()}}</div>
            </div>
            <div class="d-flex my-3">
              <div class="grey mr-2">Город:</div>
              <div>{{advert.city}}</div>
            </div>
            <div class="d-flex my-3">
              <div class="grey mr-2">Цена:</div>
              <div>{{advert.price}}</div>
            </div>
            <div class="d-flex my-3">
              <div class="grey mr-2">Создано:</div>
              <div>{{advert.createdAt}}</div>
            </div>
            <div class="d-flex flex-wrap">
              <div v-for="attachment in advert.attachments" v-bind:key="attachment" class="m-3">
                <b-img
                    v-bind:src="image(attachment)"
                    v-bind:alt="attachment"
                    fluid
                >
                </b-img>
              </div>
            </div>
            <div class="mt-4">
              <b-button class="jai-button" v-on:click="onReply">Откликнуться</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";

export default {
  name: "JobAdvertInstance",
  components: {MyHeader},
  mounted() {
    this.$store.dispatch("GET_ADVERT", this.$route.params.id).catch( err => {
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
    onReply() {
      this.$store.dispatch("SEND_REPLY", this.$route.params.id).catch( err => {
        this.onError(err);
      })
      console.log("все ок")
    },
    image(id) {
      return `http://localhost:8000/api/files/${id}`;
    }
  },
  computed: {
    advert() {
      return this.$store.getters.ADVERT
    }
  }
}
</script>

<style scoped>

.title {
  font-size: 2rem;
  font-weight: bold;
}
.grey {
  color: #666A6D;
}
.back{
  width: 50px;
  height: 35px;
}

.back:hover{
  border: #FF5733 2px solid;
  border-radius: 10px;
  background-color: #FF5733;
}

.jai {
  display: flex;
  justify-content: center;
}
.box {
  width: 900px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 5px #555353;
  padding: 30px 40px;
}
.jai-header{
  display: flex;
  justify-content: center;
}
.jai-title {
  font-size: 30px;
  font-weight: bold;
}
.jai-content {
  margin: 10px 0;
}
.jai-description {
  margin: 20px 0;
  font-size: 20px;
}
.jai-price {
  font-size: 24px;
}
.jai-button {
  background-color: #FF5733;
  color: white;
  height: 45px;
  width: 100%;
  font-size: 20px;
  border-radius: 10px;
  border: #FF5733 2px solid;
}
.jai-button:hover {
  background: #666A6D;
  border-color: #666A6D;
  color: white;
}
</style>