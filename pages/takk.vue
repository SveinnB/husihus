<template>
  <v-container class="d-flex mt-10">
    <div class="ma-auto d-flex flex-column justify-center">
      <h2 class="ma-3 text-h6 text-sm-h4">🛬 Skilaboð móttekin 😎</h2>
      <p class="subtitle-1 text-center">Takk fyrir. Við verðum í bandi</p>
      <v-row justify="center">
        <v-btn href="/" class="mt-10" text color="primary" max-width="120">Forsíða</v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'takk',
  head(){
    return {
      title: "Takk"
    }
  }
}
</script>
