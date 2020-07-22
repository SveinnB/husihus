<template>
  <v-container>
    <h1 class="mt-6">Hafa samband</h1>
    <p>Það er einfalt að senda okkur skilaboð hérna á vefnum</p>
    <ContactForm />
  </v-container>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  name: 'Home',
  components: {
    ContactForm
  },
  head(){
    return {
      title: "Hafa samband"
    }
  }
}
</script>
