<template>
  <v-container class="d-flex">
    <div class=" ma-auto d-flex flex-column justify-center">
      <h2 class="ma-3">Síða fannst ekki</h2>
      <v-btn href="/" outlined color="primary">Forsíða</v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Error',
    layout: 'error'
  }
</script>
