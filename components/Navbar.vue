<template>
  <v-app-bar app color="white" :height="90" :elevation="3">

    <nuxt-link to="/">
      <v-img src="/arbaer_logo.png" alt="logo" contain class="logo_style">
      </v-img>
    </nuxt-link>

    <v-spacer></v-spacer>

    <nav class="hidden-md-and-down">
      <v-tabs right>
        <v-tabs-slider color="transparent"></v-tabs-slider>
        <v-tab v-for="(item, index) in navList" :key="'tab_' + index" nuxt :to="item.to">
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </nav>
    
    <v-app-bar-nav-icon @click="dialog = !dialog"
      class="hidden-lg-and-up ma-3 pa-2" aria-label="hamburger nav icon">
    </v-app-bar-nav-icon>


   <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
     <div style="height: 100%; background-color: white; overflow: auto" class="d-flex flex-column">

        <div class="dialog_close_div">
          <v-icon @click="dialog = false" size="40" class="ma-3 pa-2">
            mdi-close
          </v-icon>
        </div>

        <div class="ma-auto yellow">
          <nav class="red">
            <v-tabs vertical>
              <v-tabs-slider color="transparent"></v-tabs-slider>
              <v-tab v-for="(item, index) in navList" :key="'tab_' + index" nuxt :to="item.to" class="ma-3 text-h5" @click="dialog = false">
                {{ item.name }}
              </v-tab>
            </v-tabs>
          </nav>
        </div>

      </div>
   </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      dialog: false,
      navList: [
        {
          name: 'Forsíða',
          to: '/'
        },
        {
          name: 'Um okkur',
          to: '/um-okkur'
        },
        {
          name: 'Verðskrá',
          to: '/verdskra'
        },
        {
          name: 'Verkefni',
          to: '/verkefni'
        },
        {
          name: 'Hafa samband',
          to: '/hafa-samband'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.logo_style {
  max-width: 80px;
  max-height: 80px;
}

.dialog_close_div {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
