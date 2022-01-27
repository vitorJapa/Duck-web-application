<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      placeholder="email" />
    <br>
    <input
      type="password"
      name="password"
      placeholder="password" />
    <br>
    <button
      @click="register">Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    register () {
      console.log('register was clicked')
    }
  }

}
</script>

<style scoped>
</style>
