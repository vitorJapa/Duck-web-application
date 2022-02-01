<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>Ducks Reports</v-toolbar-title>
        </v-toolbar>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Created By
                </th>
                <th class="text-left">
                  Created Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in list"
                :key="item.id">
                <td>{{item.report_owner_name}}</td>
                <td>{{item.created_timestamp}}</td>
                <v-btn dark small class="cyan" @click="navigateTo({name: 'report', params:{id: item.id}})">
                  View
                </v-btn>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Reports',
  data () {
    return {
      list: undefined
    }
  },
  mounted () {
    axios.get('http://localhost:5000/api/ducks_report').then((resp) => {
      this.list = resp.data
      console.warn(resp.data.data)
    })
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}

</script>

<style scoped>
</style>
