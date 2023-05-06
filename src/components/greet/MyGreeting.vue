<template>
  <div>
    <MyHeader></MyHeader>
    <FirstPage></FirstPage>
    <DownloadPage></DownloadPage>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import FirstPage from "@/components/greet/FirstPage.vue";
import DownloadPage from "@/components/greet/DownloadPage.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyHeader from "@/components/MyHeader.vue";

export default {
  name: "MyGreeting",
  components: {MyHeader, MyFooter, DownloadPage, FirstPage}
}
</script>

<style scoped>

</style>