<template>
  <v-toolbar fixed class="indigo" dark>
    <v-toolbar-title class="mr-4">
        <router-link class="home" tag="span" :to="{name: 'Reports'}">Home</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn flat dark @click="navigateTo({name: 'reports'})">Duck Reports</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
        <v-btn flat dark @click="navigateTo({name: 'create_report'})">Create new form</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #E9E;
}
</style>
