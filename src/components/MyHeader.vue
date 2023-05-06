<template>
  <div class="greet-header" :class='{"additionaly": !isMain}'>
    <div class="logo">
      <a href="/">
        Jobana
      </a>
    </div>
    <div class="references">
      <ul class="ref-list p-0">
        <li><a class="my-link" :class='{"my-ref-lined": isMain}' href="/">Главная</a></li>
        <li><a class="my-link" href="#">Специалисты</a></li>
        <li><a class="my-link" :class='{"my-ref-lined": isAdverts}' href="/adverts">Объявления</a></li>
        <!--          <li><a class="my-ref-nolined my-link" href="#">О проекте</a></li>-->
      </ul>
    </div>
    <div class="auth">
      <button class="icon" v-if="isAuthorized" v-on:click="updateShowOptions">
        <img
            src="http://localhost:8080/assets/auth/account.svg"
            height="47px"
            width="47px"
        >
        Профиль
      </button>
      <div v-else class="d-flex flex-row">
        <b-button class="reg-ref my-hover" href="/registration">Регистрация</b-button>
        <b-button class="login-ref my-hover" href="/login">Вход</b-button>
      </div>

      <div class="d-flex justify-content-around position-absolute my-margin">
        <div></div>
        <div></div>
        <div class="account-option" v-show="getShowOption" :class='{"additionaly-account-option": !isMain}'>
          <a class="touch" href="/home">
            <div>
              <img
                  src="http://localhost:8080/assets/auth/home.svg"
                  height="24px"
                  width="24px"
              >
              Личный кабинет
            </div>
          </a>
          <a class="touch" href="/#">
            <div>
              <img
                  src="http://localhost:8080/assets/auth/settings.svg"
                  height="24px"
                  width="24px"
              >
              Настройки
            </div>
          </a>
          <a class="touch" href="/" v-on:click="onExit">
            <div>
              <img
                  src="http://localhost:8080/assets/auth/exit.svg"
                  height="24px"
                  width="24px"
              >
              Выход
            </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      showOptions: false
    }
  },
  computed: {
    isAuthorized() {
      return this.$store.getters.getIsAuthorized;
    },
    isMain() {
      return this.$route.path === '/';
    },
    isAdverts() {
      return this.$route.path === '/adverts';
    },
    getShowOption() {
      return this.showOptions;
    },
    isHome() {
      return this.$route.path === '/home';
    }
  },
  methods: {
    updateShowOptions() {
      this.showOptions = !this.showOptions;
    },
    onExit() {
      this.$store.dispatch('onLogout');
    }
  }
}
</script>
.my-b
<style scoped>
.my-margin {
  margin-top: 110px;
}

.icon {
  background-color: white;
  border: none;
  width: 70px;
  font-size: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.account-option {
  position: absolute;
  background-color: white;
  border-radius: 10px;
  /*top: 130px;*/
  /*right: 45px;*/
  height: 180px;
  width: 270px;
  box-shadow: 0 2px 5px #555353;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
}

.touch {
  margin: 5px;
  transition-duration: 0.25s;
  padding: 3px 10px 5px 5px;
  border-radius: 10px;

}

.touch:hover {
  background: #FF5733;
  color: white;
  text-decoration: none;
}

.additionaly-account-option {
  position: fixed;
}

html, body {
  height: 100%;
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

.greet-header {
  /*font-family: 'Ubuntu', sans-serif;*/
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 100px;
  width: 100%;
  padding-bottom: 10px;
  background-color: white;
}

.additionaly {
  position: sticky;
  top: 0;
  border-bottom: #DEDEDE 2px solid;
}

.logo {
  font-size: 42px;
  font-weight: bold;
  padding: 0;
  background-color: white;
}

.references {
  font-size: 20px;
}

.ref-list {
  display: flex;
}

.my-hover:hover {
  background: #666A6D;
  border-color: #666A6D;
  color: white;
}


.auth {
  font-size: 20px;
  /*margin: 0 87px;*/
  display: flex;
  flex-direction: row;
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
  transition-duration: 0.25s;
  border-radius: 10px;
  padding: 10px;
  color: black;
  text-decoration: none;
}

.my-ref-lined {
  text-decoration: underline #537FE7 4px;
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