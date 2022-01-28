<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>Reports</v-toolbar-title>
        </v-toolbar>

        <div>
          <v-simple-table dense>
            <template v-slot:default>
             <thead>
              <tr>
                <td>Owner Name</td>
                <td>Time ducks Eat</td>
                <td>What food</td>
                <td>Place</td>
                <td>How many ducks?</td>
                <td>How much food?</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <td>{{item.report_owner_name}}</td>
                <td>{{item.ducks_time}}</td>
                <td>{{item.ducks_food}}</td>
                <td>{{item.ducks_where}}</td>
                <td>{{item.ducks_how_many}}</td>
                <td>{{item.ducks_how_much_food}}</td>
              </tr>
            </tbody>
            </template>
          </v-simple-table>
        </div>
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
  }
}

</script>

<style scoped>
</style>
