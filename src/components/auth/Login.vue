<template>
  <div class="login">
    <div class="login-frame">
      <div class="logo">
        <a href="/">
          <img
              src="http://localhost:8080/assets/auth/logo.svg"
              height="41px"
              width="41px"
          >
        </a>
      </div>
      <div class="enter-title">
        ВХОД
      </div>
      <div>
        <b-form-input placeholder="Введите email" v-model="email" class="reg-in1"></b-form-input>
        <b-form-input placeholder="Введите пароль" v-model="password" class="reg-in1"></b-form-input>
      </div>
      <div>
        <b-button class="my-enter-button" v-on:click="onSubmit" >Войти</b-button>
      </div>
      <div class="my-forgot">
        Забыли пароль?
      </div>
      <div class="or">
        или
      </div>
      <div>
        <b-button class="my-reg-button" href="/registration">Зарегистрировать новый аккаунт</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLogin",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(
          'onLogin',
          {params: {email: this.email, password: this.password}}
      ).then(() => {
        this.$router.push({path: "/"})
      }).catch((err) => {
        console.log(err)
        this.onError(err);
      })
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
}

.toast:not(.show) {
  display: block;
}

.login {
  font-family: 'Ubuntu', sans-serif;
  background-image: url("/public/assets/auth/background_auth.svg");
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

.login-frame {
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

.reg-in1 {
  margin-top: 15px;
  width: 410px;
  height: 50px;
  background-color: #E9F8F9;
  margin-right: auto;
  margin-left: auto;
  border: none;
  font-size: 14px;
  font-weight: lighter;
  border-radius: 5px;
  color: #666A6D;
}

.my-enter-button {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  color: #ffffff;
  background-color: #537FE7;
  border: none;
  width: 100%;
  height: 50px;
}

.my-forgot {
  margin-top: 20px;
  font-size: 14px;
  font-weight: normal;
  color: #537FE7;
  display: flex;
  flex-direction: row-reverse;
}

.or {
  font-size: 20px;
  font-weight: normal;
  display: flex;
  justify-content: center;
  color: #666A6D;
}

.my-reg-button {
  margin-top: 20px;
  font-size: 20px;
  font-weight: normal;
  border-radius: 5px;
  color: #666A6D;
  background-color: #ffffff;
  border: 2px solid #537FE7;
  width: 100%;
  height: 50px;
}

</style>

