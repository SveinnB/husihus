<template>
  <v-container class="d-flex mt-10">
    <div class=" ma-auto d-flex flex-column justify-center">
      
      <template v-if="error.statusCode === 404">
        <h2 class="ma-3 text-h6 text-sm-h4">Síða fannst ekki 🤷‍♂️</h2>
      </template>

      <template v-else>
        <h2 class="ma-3 text-h6 text-sm-h4">Villa kom upp 🤔</h2>
      </template>

      <v-row justify="center">
        <v-btn href="/" class="mt-10" text color="primary" max-width="120">Forsíða</v-btn>
      </v-row>
      
    </div>
  </v-container>
  
</template>

<script>
export default {
  name: 'Error',
  props: ['error']
}
</script>
