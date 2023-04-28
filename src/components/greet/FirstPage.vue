<template>
  <div class="first-page">
    <div class="greet-header">
      <div class="logo">
        Jobana
      </div>
      <div class="references">
        <ul class="ref-list">
          <li><a class="my-ref-lined my-link" href="#">Главная</a></li>
          <li><a class="my-ref-nolined my-link" href="#">Специалисты</a></li>
          <li><a class="my-ref-nolined my-link" href="#">Объявления</a></li>
<!--          <li><a class="my-ref-nolined my-link" href="#">О проекте</a></li>-->
        </ul>
      </div>
      <div class="auth">
        <div>
          <b-button class="reg-ref" href="#">Регистрация</b-button>
        </div>
        <div>
          <b-button class="login-ref" href="#">Вход</b-button>
        </div>
      </div>
    </div>
<!--    <b-container class="greet-header mp-0">-->
<!--      <b-row no-gutters class="mp-0">-->
<!--        <b-col class="logo">Jobana</b-col>-->
<!--        <b-col class="references">-->
<!--          <b-row no-gutters class="mp-0">-->
<!--            <b-col><a class="my-ref-lined" href="#">Главная</a></b-col>-->
<!--            <b-col><a class="my-ref-nolined" href="#">Поиск Работы</a></b-col>-->
<!--            <b-col><a class="my-ref-nolined" href="#">Поиск специалиста</a></b-col>-->
<!--            <b-col><a class="my-ref-nolined" href="#">О проекте</a></b-col>-->
<!--          </b-row>-->
<!--        </b-col>-->
<!--        <b-col class="auth">-->
<!--          <b-row no-gutters class="mp-0">-->
<!--            <b-col class="register-ref">Регистрация</b-col>-->
<!--            <b-col class="login-ref">Вход</b-col>-->
<!--          </b-row>-->
<!--        </b-col>-->
<!--      </b-row>-->
<!--    </b-container>-->

    <div class="fp-data">
      <div class="big-title">
        Место встречи <span class="blue">специалистов</span> <p>и <span class="blue"> работодателей</span></p>
      </div>
      <div class="desc">
        Лёгкий поиск специалистов для всех ваших задач и применений для всех ваших навыков
      </div>
      <div class="my-try">
        <b-button class="try-button">Попробовать</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstPage"
}
</script>

<style scoped>


html, body {
  height: 100%;
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
}

.first-page {
  /*font-family: 'Ubuntu', sans-serif;*/
  background-image: url("/public/assets/greet/background_first_page.svg");
  background-size: cover;
  height: 100vh;
  width: 100%;
}

.greet-header {
  /*font-family: 'Ubuntu', sans-serif;*/
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 96px;
}


.logo {
  font-size: 42px;
  font-weight: bold;
  margin: 0 87px;
  width: 145px;
  padding: 0;
}

.references {
  font-size: 20px;
  margin: 0 87px;
}

.ref-list {
  display: flex;
}

.blue {
  color: #537FE7;
}

.big-title {
  margin-left: 100px;
  margin-top: 100px;
  font-weight: bold;
  font-size: 60px;
  width: 781px;
  height: 207px;
  line-height: 1;
}

.desc {
  color: #A9A9A9;
  font-size: 35px;
  line-height: 1.25;
  width: 645px;
  height: 135px;
  margin-top: 30px;
  margin-left: 100px;

}

.my-try {
  margin-left: 100px;
  margin-top: 50px;
}
.try-button {
  width: 292px;
  height: 60px;
  background: #FF5733;
  font-weight: bold;
  font-size: 28px;
  color: white;
  border-radius: 10px;
  border: #FF5733 2px solid;
}

.auth {
  font-size: 20px;
  margin: 0 87px;
  display: flex;
  justify-content: space-between;

}

.my-link:hover {
  background: #FF5733;
  color: white;
  text-decoration: none;
}

.my-link {
  height: 60px;
  margin: 10px;
  transition-duration: 0.05s;
  border-radius: 10px;
  padding: 10px;
}

.my-ref-lined {
  text-decoration: underline #537FE7 4px;
  color: black;
}

.my-ref-nolined {
  text-decoration: none;
  color: black;
}

li {
  list-style-type:  none;
}

.login-ref {
  border: #537FE7 2px solid;
  border-radius: 10px;
  background: #ffffff;
  font-size: 20px;
  color: black;
  width: 187px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reg-ref {
  border: none;
  background: #ffffff;
  font-size: 20px;
  border-radius: 10px;
  color: black;
  width: 187px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>