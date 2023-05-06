<template>
  <div>
    <MyHeader/>
    <div class="epi-box my-5 d-flex justify-content-center">
      <EditPersonalData/>
    </div>
    <div class="epi-box my-5 d-flex justify-content-center">
      <CreatePersonalInfo/>
    </div>


  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import EditPersonalData from "@/components/home/EditPersonalData.vue";
import CreatePersonalInfo from "@/components/home/CreatePersonalInfo.vue";

export default {
  name: "PersonalPage",
  components: {EditPersonalData, CreatePersonalInfo, MyHeader}
}
</script>

<style scoped>
.epi-box {
  width: 100%;
  height: 100%;
}

</style>