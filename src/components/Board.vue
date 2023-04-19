<template>
  <div>Board with prop id: {{ id }}</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Board",
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>