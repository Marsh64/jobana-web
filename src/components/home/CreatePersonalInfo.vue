<template>
  <div class="box-decor box-size">
    <div class="aer-size d-flex justify-content-around">
      <div class="touch d-flex align-content-center" v-on:click="updateShowAdvert" :class='{"my-lining": isShowAdvert}'>
        <img
            src="http://localhost:8080/assets/account/advert.svg"
            height="30px"
            width="24px"
        >
        Объявления
      </div>
      <div class="touch d-flex align-content-center" v-on:click="updateShowExpert" :class='{"my-lining": showExpert}'>
        <img
            src="http://localhost:8080/assets/account/expert.svg"
            height="30px"
            width="24px"
        >
        Эксперты
      </div>
      <div class="touch d-flex align-content-center" v-on:click="updateShowReply" :class='{"my-lining": showReply}'>
        <img
            src="http://localhost:8080/assets/account/reply.svg"
            height="30px"
            width="24px"
        >
        Отлики
      </div>
    </div>

    <div class="advert" v-if="isShowAdvert">
      <div class="advert-window d-flex justify-content-start">
        <a href="/home/my-adverts">
          <div class="touch grey my-2 mx-5" :class='{"black": isShowMyAdvert}'>Мои объявления</div>
        </a>
        <a href="/home/create-advert">
          <div class="touch grey my-2 mx-5" :class='{"black": isShowCreateAdvert}'>Создать объявление</div>
        </a>
      </div>
    </div>
    <div class="expert" v-if="isShowExpert">
      <div class="advert-window d-flex justify-content-start">
        <a href="/home/my-profiles">
          <div class="touch grey my-2 mx-5" :class='{"black": isShowMyExpert}'>Мои профили специалиста</div>
        </a>
        <a href="/home/create-profile">
          <div class="touch grey my-2 mx-5" :class='{"black": isShowCreateExpert}'>Создать профиль специалиста</div>
        </a>
      </div>
    </div>
    <div class="expert" v-if="isShowReply">
      <div class="advert-window d-flex justify-content-start">
        <a href="/home/my-replies">
          <div class="touch grey my-2 mx-5" :class='{"black": isShowMyReply}'>Отклики на мои объявления</div>
        </a>
      </div>
    </div>

    <div class="container-fluid">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "CreatePersonalInfo",
  data() {
    return {
      showAdvert: false,
      showExpert: false,
      showReply: false
    }
  },
  methods: {
    updateShowAdvert() {
      this.showAdvert = !this.showAdvert;
      this.showExpert = false;
      this.showReply = false;
    },
    updateShowExpert() {
      this.showExpert = !this.showExpert;
      this.showAdvert = false;
      this.showReply = false;
    },
    updateShowReply() {
      this.showReply = !this.showReply;
      this.showExpert = false;
      this.showAdvert = false;
    }
  },
  computed: {
    isShowAdvert() {
      return this.showAdvert;
    },
    isShowMyAdvert() {
      return this.$route.path === "/home/my-adverts";
    },
    isShowCreateAdvert() {
      return this.$route.path === "/home/create-advert";
    },
    isShowExpert() {
      return this.showExpert;
    },
    isShowMyExpert() {
      return this.$route.path === "/home/my-profiles";
    },
    isShowCreateExpert() {
      return this.$route.path === "/home/create-profile";
    },
    isShowReply() {
      return this.showReply;
    },
    isShowMyReply() {
      return this.$route.path === "/home/my-replies";
    }
  },
  mounted() {
    this.showAdvert = this.$route.path === "/home/my-adverts" || this.$route.path === "/home/create-advert";
    this.showExpert = this.$route.path === "/home/my-profiles" || this.$route.path === "/home/create-profile";
    this.showReply = this.$route.path === "/home/my-replies";
  }
}
</script>

<style scoped>
.box-decor{
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px #555353;
}
.box-size {
  width: 1100px;
}
@media (width < 1100px) {
  .box-size {
    width: 100%;
  }
}
a {
  text-decoration: none;
}

.touch {
  font-size: 20px;
  margin: 5px;
  padding: 3px 10px 5px 5px;
  transition-duration: 0.25s;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer
}

.touch:hover {
  background: #FF5733;
  color: white;
}

.aer-size {
  width: 100%;
}
.my-lining {
  /*text-decoration: underline #537FE7 4px;*/
  color:  #537FE7
}
.grey {
  color: #6A6A6A;
  font-size: 20px;
}

.black {
  color: black;
}
</style>