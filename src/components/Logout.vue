<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "LogOut",
  methods: {
    onLogoutButtonClick() {
      this.$store.dispatch('onLogout')
          .then( () => {
            location.reload();
          })
    }
  }
}
</script>

<style scoped>

</style>