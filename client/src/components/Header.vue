<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
        <router-link class="home" tag="span" :to="{name: 'Reports'}">Reports</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn flat dark :to="{ name: 'Reports'}">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
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
