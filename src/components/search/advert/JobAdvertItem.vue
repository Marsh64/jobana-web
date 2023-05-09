<template>
  <div class="jai-box">
    <div class="jai-frame">
      <div class="jai-data">
        <div class="jai-data-info">
          <div class="jai-data-info-title">
            {{advert.title}}
          </div>
          <div class="jai-data-info-desc">
            {{advert.short_description}}
          </div>
          <div class="jai-data-info-prc">
            Цена: {{advert.price}}
          </div>
          <b-button class="jai-data-button">Откликнуться</b-button>
        </div>
        <div class="jai-data-images">
          <img
              :src=advert.photo[1]
              height="180px"
              width="180px"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobAdvertItem",
  props: {
    advert: {
      type: Object,//можно заменить на класс - функцию обертку для класса
      required: true,
      default: function () {
        return  {
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
}
</script>

<style scoped>

.jai-box {
  margin: 0;
  padding: 10px 40px;
  width: 100%;
  height: 250px;
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