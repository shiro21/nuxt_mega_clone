<template>
  <v-row>
    <v-col cols="9">
      <v-text-field id="text"></v-text-field>
    </v-col>
    <v-col cols="3">
      <v-btn id="btn" @click="btn">Check</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  methods: {
    btn() {
      console.log('btn');
      var text = $('#text').val();
      console.log(text);
    }
  }
}
</script>
