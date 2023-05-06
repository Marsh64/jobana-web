<template>
  <div class="box-decor box-size">
    <div class="px-5 py-2 d-flex flex-wrap justify-content-start">
      <div class="field-size">
        <div class="grey">Почта</div>
        <div>Подтянуть email</div>
      </div>
      <div class="field-size">
        <div class="grey">Имя</div>
        <div>Подтянуть имя</div>
      </div>
      <div class="field-size">
        <div class="grey">Пол</div>
        <div>Выбор пола</div>
      </div>
      <div class="field-size">
        <div class="grey">Контакт</div>
        <div>Поле с выбором контакта</div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "EditPersonalData"
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
.field-size {
  margin: 10px 20px;
}
.grey {
  color: #A9A9A9;
}
</style>