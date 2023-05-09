<template>
  <div class="registr">
    <div class="registr-frame">
      <div class="logo">
        <img
            src="http://localhost:8080/assets/auth/logo.svg"
            height="41px"
            width="41px"
        >
      </div>
      <div class="enter-title">
        Регистрация
      </div>
      <div class="four-reg-button">
        <b-form-input placeholder="Имя" class="reg-in in-size1" v-model="firstname"></b-form-input>
        <div class="reg-rat in-size2">
          <b-form-radio-group
              v-model="sex"
              :options="options"
              class="reg-rat-item"
              value-field="item"
              size="lg"
              plain
          ></b-form-radio-group>
        </div>
        <b-form-input placeholder="Фамилия" class="reg-in in-size1" v-model="lastname"></b-form-input>
        <b-form-datepicker v-model="birthDate" placeholder="Дата рождения" :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric'}" class="reg-in in-size2"></b-form-datepicker>
      </div>
      <div>
        <b-form-input placeholder="Ваш email" class="reg-in in-size3" v-model="email"></b-form-input>
      </div>
      <div class="two-reg-button">
        <b-form-input placeholder="Пароль" class="reg-in in-size4" v-model="password1"></b-form-input>
        <b-form-input placeholder="Повторите пароль" class="reg-in in-size4" v-model="password2"></b-form-input>
      </div>
      <div>
        <b-button class="my-reg-button2" v-on:click="onSubmit">Зарегистрироваться</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRegistration",
  data() {
    return {
      firstname: '',
      sex: 'M',
      options: [
        { text: 'М', item: 'M' },
        { text: 'Ж', item: 'F' }
      ],
      lastname: '',
      birthDate: '',
      email: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.password1 !== this.password2) {
        this.onError("Пароли не совпадают");
      } else {
        const date = this.birthDate.slice(8) + '-' + this.birthDate.slice(5, 7) + '-' + this.birthDate.slice(0, 4)
        this.$store.dispatch(
            'onRegistration',
            {params: {email: this.email, password: this.password1, firstname: this.firstname, lastname: this.lastname, birthDate: date, gender: this.sex}}
        ).then(() => {
          this.$router.push({path: "/"})
        }).catch((err) => {
          console.log(err)
          this.onError(err);
        })
      }
    },
    onError(err) {
      this.$bvToast.toast(`Ошибка: ${err}`, {
        title: 'Login error',
        autoHideDelay: 5000,
        variant: 'danger',
        noAutoHide: true
      })
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

