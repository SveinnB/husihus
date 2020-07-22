<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container class="width">
        <nuxt class="content" />
      </v-container>
    </v-main>
    <v-container>
      <Footer class="footer" />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Navbar, Footer
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchFooter', $prismic);
  },
}
</script>

<style>
.content {
  flex: 1 0 auto;
}
.footer {
 flex-shrink: 0;
}
.width{
  max-width: 950px;
}
</style>
