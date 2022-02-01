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
                  <th class="text-left">
                    Duck Time
                  </th>
                  <th class="text-left">
                    Duck Food
                  </th>
                  <th class="text-left">
                    Duck where
                  </th>
                  <th class="text-left">
                    Duck How many
                  </th>
                  <th class="text-left">
                    Duck hom much
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{item.report_owner_name}}</td>
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