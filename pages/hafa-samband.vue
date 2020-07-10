<template>
  <div>
    <h1 class="mt-6">Hafa samband</h1>
    <p>Það er mjög þægilegt að senda okkur skilaboð hérna á vefnum</p>
    <ContactForm />
  </div>
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
