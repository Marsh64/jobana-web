<template>
  <div class="my-footer">
    <ul class="my-info">
      <li>
        <div class="mini-title">Jobana</div>
        <ul>
          <li><a href="#">Мобильная версия</a></li>
          <li><a href="#">Обновления</a></li>
          <li><a href="#">Версии</a></li>
        </ul>
      </li>
      <li>
        <div class="mini-title">О компании</div>
        <ul>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Вакансии</a></li>
        </ul>
      </li>
      <li>
        <div class="mini-title">Поддержка</div>
        <ul>
          <li><a href="#">Сообщить об ошибке</a></li>
          <li><a href="#">Контактный центр</a></li>
        </ul>
      </li>
    </ul>
    <div class="my-bottom">
      <div>
        <img
            src="assets/greet/gp_image.svg"
            height="68px"
            width="175px"
        >
      </div>
      <div class="my-contact">
        <span class="contact-info">copyright@2023Jobana</span>
        <span class="contact-info">+7 999 999 99 99</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped>

li {
  list-style-type: none;
  margin: 5px;
}

ul {
  margin-left: 0;
  padding-left: 0;
  font-size: 18px;
  color: white;
}

a {
  text-decoration: none;
  color: white;
}

.my-footer {
  background: black;
  padding: 40px 40px;
}

.mini-title {
  color:white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.my-footer {
  min-height: 305px;
  width: 100%;

}

.my-bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}

.my-info {
  display: flex;
  justify-content: space-around;
}

.contact-info {
  margin: 10px
}

.my-contact {
  color: white;
  font-size: 18px;
}
</style>