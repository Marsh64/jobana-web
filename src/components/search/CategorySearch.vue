<template>
  <b-container class="category-search">
    <div class="title">Категория</div>
    <tree
        :key="componentKey"
        :data="categories_tree"
        :options="{ checkbox: true }"
        v-model="selected_data"
    ></tree>
  </b-container>
</template>

<script>
import LiquorTree from "liquor-tree"
export default {
  name: "CategorySearch",
  components: {
    [LiquorTree.name]: LiquorTree
  },
  data() {
    return {
      selected_data: {},
      componentKey: 0
    }
  },
  mounted() {
    if (this.$store.getters.CATEGORIES_LIST.length === 0){
      console.log("1")
      this.$store.dispatch("GET_CATEGORIES");
    } else {
      console.log("2")
      this.$store.dispatch("GET_CATEGORIES");
    }
  },
  computed: {
    categories_tree() {
      this.forceRenderer();
      return this.$store.getters.CATEGORIES_TREE;
    },
    get_selected() {
      return this.$store.getters.SELECTED;
    }
  },
  methods: {
    forceRenderer() {
      this.componentKey += 1;
    }
  },
  watch: {
    selected_data: function(selected){
      this.$store.dispatch("SET_SELECTED", selected.checked.map(el => el.text));
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

</style>
