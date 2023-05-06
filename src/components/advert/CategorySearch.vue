<template>
  <div class="category-search">
    <div class="title">Категория</div>
    <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected_categories"
          :options="categories"
          :aria-describedby="ariaDescribedby"
          name="flavour-1"
          class="category-item"
      ></b-form-checkbox-group>
    </b-form-group>

<!--    <ul>-->
<!--      <li v-for="category in categories" :key="category">-->
<!--        <b-form-checkbox-->
<!--            id="checkbox-1"-->
<!--            v-model="status"-->
<!--            name="checkbox-1"-->
<!--            value="accepted"-->
<!--            unchecked-value="not_accepted"-->
<!--        >-->
<!--          {{category}}-->
<!--        </b-form-checkbox>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script>
export default {
  name: "CategorySearch",
  data() {
    return {
      categories: ["Бытовая химия", "Сантехника", "Математика"],
      selected_categories: []
    }
  }
}
</script>

<style scoped>

html, body {
  height: 100%;
  width: 100%;
}

.category-search {
  height: 100%;
  width: 270px;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 2px 5px #555353;
  margin: 0;
}
.title {
  font-size: 20px;
}
.category-item {
  font-size: 16px;
  margin: 10px;
}

</style>