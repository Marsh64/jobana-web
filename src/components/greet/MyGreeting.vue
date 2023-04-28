<template>
  <div>
    <FirstPage></FirstPage>
    <DownloadPage></DownloadPage>
  </div>
</template>

<script>
import FirstPage from "@/components/greet/FirstPage.vue";
import DownloadPage from "@/components/greet/DownloadPage.vue";

export default {
  name: "MyGreeting",
  components: {DownloadPage, FirstPage}
}
</script>

<style scoped>

</style>