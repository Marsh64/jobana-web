<template>
  <div class="registr">
    <div class="registr-frame">
      <div class="logo">
        <img
            src="assets/auth/logo.svg"
            height="41px"
            width="41px"
        >
      </div>
      <div class="enter-title">
        Регистрация
      </div>
      <div class="four-reg-button">
        <b-form-input placeholder="Имя" class="reg-in in-size1"></b-form-input>
        <div class="reg-rat in-size2">
          <b-form-radio-group
              v-model="selected"
              :options="options"
              value-field="item"
              size="lg"
              plain
              class="reg-rat-item"
          ></b-form-radio-group>
        </div>
        <b-form-input placeholder="Фамилия" class="reg-in in-size1"></b-form-input>
        <b-form-datepicker placeholder="Дата рождения"  :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" class="reg-in in-size2"></b-form-datepicker>
      </div>
      <div>
        <b-form-input placeholder="Ваш email" class="reg-in in-size3"></b-form-input>
      </div>
      <div class="two-reg-button">
        <b-form-input placeholder="Пароль" class="reg-in in-size4"></b-form-input>
        <b-form-input placeholder="Повторите пароль" class="reg-in in-size4"></b-form-input>
      </div>
      <div>
        <b-button class="my-reg-button2">Зарегистрироваться</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRegistration",
  data(){
    return {
      selected: 'man',
      options: [
        { text: 'М', value: 'man' },
        { text: 'Ж', value: 'woman' }
      ]
    }
  }
}
</script>

<style scoped>

html, body {
  height: 100%;
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
}

.registr {
  background-image: url("/public/assets/auth/background_auth.svg");
  font-family: 'Ubuntu', sans-serif;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

.logo {
  background-color: #537FE7;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 2px 5px #555353;
  margin: auto;
}

.enter-title {
  color: #537FE7;
  font-size: 35px;
  text-align: center;
  margin: 20px;
  font-weight: bold;
}

.registr-frame {
  width: 470px;
  height: 550px;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 2px 5px #555353;
  margin: 0 auto;
  position: absolute;
  top: calc(50% - 275px);
  left: 0;
  right: 0;
  background-color: #ffffff;
}

.reg-in {
  margin-top: 15px;
  background-color: #E9F8F9;
  border: none;
  font-size: 14px;
  font-weight: lighter;
  border-radius: 5px;
  color: #666A6D;
}

.reg-rat {
  margin: 15px auto auto auto;
  padding: 6px 12px;
  font-size: 18px;
  font-weight: lighter;
  color: #666A6D;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reg-rat-item {
}

.in-size1 {
  max-width: 240px;
  height: 50px;
  margin-right: 15px;
}

.in-size2 {
  max-width: 155px;
  height: 50px;
}

.in-size3 {
  max-width: 410px;
  height: 50px;
}

.in-size4 {
  max-width: 197px;
  height: 50px;
}

.my-reg-button2 {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  color: #ffffff;
  background-color: #537FE7;
  width: 100%;
  height: 50px;
}

.four-reg-button {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.two-reg-button {
  display: flex;
  /*flex-wrap: wrap;*/
  /*align-content: center;*/
  justify-content: space-between;
}

</style>

