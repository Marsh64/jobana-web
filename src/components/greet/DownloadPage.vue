<template>
  <div class="download-page">
    <div>
      <div class="download-title">
        Скачивай наше мобильное приложение
      </div>
      <div class="download-text">
        Все самые лучшие специалисы под рукой только в нашем приложении.
        Скачивай и обеспечь быстрое решение всех своих проблем, пользуясь удобным интерфейсом.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadPage"
}
</script>

<style scoped>

html, body {
  height: 100%;
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
}

.download-page {
  /*height: 100vh;*/
  height: 1024px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-image: url("/public/assets/greet/background_download_page.png");
  background-size: cover;
}

.download-title {
  height: 207px;
  width: 537px;
  margin-right: 40px;
  margin-top: 220px;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
}

.download-text {
  height: 130px;
  width: 600px;
  margin-right: 40px;
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 28px;
  color: #A9A9A9;
  line-height: 1.25;
}

</style>