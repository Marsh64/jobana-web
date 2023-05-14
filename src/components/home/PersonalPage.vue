<template>
  <div class="back">
    <MyHeader/>
    <div class="epi-box my-5 d-flex justify-content-center">
      <EditPersonalData/>
    </div>
    <div class="epi-box my-5 d-flex justify-content-center">
      <PersonalRouting/>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import EditPersonalData from "@/components/home/EditPersonalData.vue";
import PersonalRouting from "@/components/home/PersonalRouting.vue";

export default {
  name: "PersonalPage",
  components: {EditPersonalData, PersonalRouting, MyHeader}
}
</script>

<style scoped>
.epi-box {
  width: 100%;
  height: 100%;
}
.back {
  background-image: url("/public/assets/common/background.svg");
  background-size: contain;
}

</style>