<template>
  <div class="job-search-box">
    <div class="search">
      <b-button class="search-img">
        <img
            src="assets/advert/search_icon.svg"
            height="26px"
            width="26px"
        >
      </b-button>
      <b-form-input
          id="input"
          v-model="search"
          placeholder="Поиск..."
          class="search-form"
      ></b-form-input>
    </div>
  </div>

</template>

<script>
export default {
  name: "JobSearch",
  data() {
    return {
      search: ""
    }
  }
}
</script>

<style scoped>

.job-search-box {
  margin: 0;
  padding: 15px 50px;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  display: flex;
  justify-content: center;
  height: 50px;
  width: 640px;
  border-radius: 10px;
  box-shadow: 0 2px 5px #555353;
}
.search-img {
  background-color: #537FE7;
  border-radius: 10px 0 0 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: #537FE7 2px solid;
}

.search-form{
  height: 50px;
  width: 590px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: white;
  border-radius: 0 10px 10px 0;
}

</style>