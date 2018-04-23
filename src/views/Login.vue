<template>
  <div>
    ssssssssssssssssssssssssssssd
    <Button type="primary" @click="login">Login</Button>
  </div>
</template>

<script>
export default {
  name: 'Login.vue',
  methods: {
    login: function () {
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped>

</style>
