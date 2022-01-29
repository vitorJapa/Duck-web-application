<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>Create new Form</v-toolbar-title>
        </v-toolbar>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Your Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="ducks_time"
              :rules="duckRules"
              label="What times the ducks are fed?"
              required
            ></v-text-field>

            <v-text-field
              v-model="ducks_food"
              :rules="duckRules"
              label="What food they were fed?"
              required
            ></v-text-field>

            <v-text-field
              v-model="ducks_where"
              :rules="duckRules"
              label="Where they eat?"
              required
            ></v-text-field>

            <v-text-field
              v-model="ducks_how_many"
              :rules="duckRules"
              label="How many ducks were there?"
              required
            ></v-text-field>

            <v-text-field
              v-model="ducks_how_much_food"
              label="How much food they eat?"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="newReport"
            >
              Create Report
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset Form
            </v-btn>
          </v-form>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Name is required', v => (v && v.length <= 10) || 'Name must be less than 10 characters'],
    email: '',
    emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    select: null
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    newReport () {
      axios.post('http://localhost:5000/api/duck', {
        report_owner_name: this.name,
        ducks_time: this.ducks_time,
        ducks_food: this.ducks_food,
        ducks_where: this.ducks_where,
        ducks_how_many: this.ducks_how_many,
        ducks_how_much_food: this.ducks_how_much_food
      })
      this.$router.push({name: 'reports'})
    }
  }
}
</script>

<style scoped>
</style>
