<template>
  <div>index
    <Button type="primary" @click="getBaidu">Login</Button>
  </div>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      getBaidu: function () {
       this.$http.post('http://wthrcdn.etouch.cn/weather_mini?city=北京', data).then((res) => {
          console.log(res)

        })
      }
    }
  }
</script>

<style scoped>

</style>
