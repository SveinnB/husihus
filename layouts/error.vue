<template>
  <v-container class="d-flex">
    <div class=" ma-auto d-flex flex-column justify-center">
      
      <template v-if="error.statusCode === 404">
        <h2 class="ma-3">Síða fannst ekki</h2>
        <v-btn href="/" outlined color="primary">Forsíða</v-btn>
      </template>

      <template v-else>
        <h2 class="ma-3">Villa kom upp</h2>
        <v-btn href="/" outlined color="primary">Forsíða</v-btn>
      </template>
      
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Error',
  props: ['error']
}
</script>
