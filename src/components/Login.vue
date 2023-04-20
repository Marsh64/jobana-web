<template>
  <form action="" @submit="onSubmit">
    <input v-model="login" type="text" placeholder="Введите Логин">
    <input v-model="password" type="password" placeholder="Введите пароль">
    <button>Войти</button>
  </form>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(
          'onLogin',
          {params: {token: this.login, password: this.password}}
      ).then(() => {
        this.$router.push({name: 'Home'})
      })
    }
  }
}
</script>

<style scoped>

</style>