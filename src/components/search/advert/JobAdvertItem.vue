<template>
  <div class="box-size">
    <b-container class="jai-frame py-3">
      <b-row class="mx-0">
        <b-col cols="7">
          <div class="title">
            {{advert.title}}
          </div>
          <div class="d-flex">
            <div class="grey mr-2">
              Описание:
            </div>
            {{advert.shortDescription}}
          </div>
          <div class="d-flex">
            <div class="grey mr-2">
              Город:
            </div>
            {{advert.city}}
          </div>
          <div class="d-flex mr-2">
            <div class="grey mr-2">
              Категория:
            </div>
            {{advert.categories.join(", ")}}
          </div>
          <div class="d-flex">
            <div class="grey mr-2">
              Цена:
            </div>
            {{advert.price}}
          </div>
          <b-button class="jai-data-button" v-bind:href="'/adverts/' + advert.id">Подробнее</b-button>
        </b-col>
        <b-col cols="5">
<!--          <b-img-->
<!--              v-if="advert.attachments.length !== 0"-->
<!--              v-bind:src="attachments[advert.attachments[0]]"-->
<!--              fluid-->
<!--          >-->
<!--          </b-img>-->
          <b-img
              v-if="advert.attachments.length !== 0"
              v-bind:src="image(advert)"
              v-bind:alt="alt(advert)"
              fluid
          >
          </b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "JobAdvertItem",
  props: {
    advert: {
      type: Object,//можно заменить на класс - функцию обертку для класса
      required: true
    }
  },
  methods: {
    // image(advert) {
    //   console.log("--------------------")
    //   console.log(this.$store.getters.ATTACHMENT[advert.id])
    //   console.log("--------------------")
    //   console.log(btoa(this.$store.getters.ATTACHMENT[advert.id]))
    //   console.log("--------------------")
    //   return this.attachments[advert.id];
    // }
    image(advert) {
      return `http://localhost:8000/api/files/${advert.attachments[0]}`;
    },
    alt(advert) {
      return advert.attachments[0];
    }
  },
  // computed: {
  //   attachments(){
  //     console.log(this.$store.getters.ATTACHMENTS[this.advert.attachments[0]])
  //     console.log("==============================")
  //     console.log("data:image/jpeg;base64," + btoa(this.$store.getters.ATTACHMENTS[this.advert.attachments[0]]))
  //     return this.$store.getters.ATTACHMENTS;
  //   }
  // },
  // mounted() {
  //   if (this.advert.attachments.length !== 0) {
  //     this.$store.dispatch("GET_ATTACHMENT", this.advert.attachments[0]);
  //   }
  // }
}
</script>

<style scoped>
.title {
  font-size: 1.5rem;
}
.grey {
  color: #666A6D;
  font-size: 1rem;
}
.box-size {
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 10px;

}
.jai-box {
  margin: 0;
  padding: 10px 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.jai-frame {
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: #DEDEDE 2px solid;
}

.jai-data {
  margin: 15px 20px;
  display: flex;
  justify-content: space-between;
}
.jai-data-info {
  height: 100%;
  width: 185px;
}
.jai-data-info-title {
  font-size: 20px;
}
.jai-data-info-desc {
  margin-top: 10px;
  font-size: 16px;
  color: #B4B2B2;
}
.jai-data-info-prc {
  margin-top: 10px;
  font-size: 16px;
}
.jai-data-button {
  margin-top: 10px;
  color: white;
  background: #FF5733;
  border-radius: 10px;
  font-size: 20px;
  border: #FF5733 2px solid;
}
.jai-data-button:hover {
  background: #666A6D;
  border-color: #666A6D;
  color: white;
}

</style>