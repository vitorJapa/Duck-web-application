<template>
  <v-layout column>
      <v-flex xs10 offset-xs1>
        <div class="white elevation-2">
          <v-toolbar flat dense class="blue" dark>
            <v-toolbar-title>Report View</v-toolbar-title>
          </v-toolbar>
          <v-simple-table>
            <template fluid v-slot:default>
              <thead>
                <tr>
                  <th class="align-end">
                    Created By
                  </th>
                  <th class="align-end">
                    Created Date
                  </th>
                  <th class="align-end">
                    What time the ducks where fed?
                  </th>
                  <th class="align-end">
                    What food the ducks where fed?
                  </th>
                  <th class="align-end">
                    Where the ducks where fed?
                  </th>
                  <th class="align-end">
                    How mant ducks where fed?
                  </th>
                  <th class="align-end">
                    How much food the ducks ate?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class ="align-end">{{item.report_owner_name}}</td>
                  <td>{{item.created_timestamp}}</td>
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
      </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: null,
      item: undefined
    }
  },
  async mounted () {
    const itemid = this.$store.state.route.params.id
    console.log(itemid)
    axios.get('http://localhost:5000/api/duck/' + itemid).then((resp) => {
      this.item = resp.data
      console.warn(resp.data.data)
    })
  }
}
</script>

<style scoped>
</style>