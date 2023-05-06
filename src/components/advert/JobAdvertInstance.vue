<template>
  <div>
    <MyHeader></MyHeader>
    <div class="jai">
      <div class="jai-box">
        <div class="jai-header">
          <a class="jai-ref">
            <img
                src="assets/advert/arrow.svg"
                height="20px"
                width="24px"
            >
          </a>
          <div class="jai-title">
            {{advert.title}}
          </div>
        </div>
        <div class="jai-content">
          <div>
            <img
                :src=advert.photo[0]
                height="180px"
                width="180px"
            >
          </div>
          <div class="jai-description">
            {{advert.description}}
          </div>
          <div class="jai-price">
            Цена: {{advert.price}}
          </div>
        </div>
        <div>
          <b-button class="jai-button">Откликнуться</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";

export default {
  name: "JobAdvertInstance",
  components: {MyHeader},
  data() {
    return{
      advert:  {
        title: "Дефолтное Объявление 00000",
        short_description: "Краткое объяснение",
        description: "Подробное объяснение",
        created_at: "01.04.2000",
        town: "Москва",
        place: "г.Москва, ул.Пушкина, дом Кукушкина к228",
        price: "5000 кредитов",
        photo: ["assets/photo/img1.png", "assets/photo/img2.png"]
      }
    }
  }
}
</script>

<style scoped>
.jai {
  display: flex;
  justify-content: center;
}
.jai-box {
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