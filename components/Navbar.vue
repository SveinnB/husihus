<template>
  <v-app-bar app color="white" :height="90" :elevation="3">

    <a href="/" class="d-flex justify-center align-center">
      <prismic-image :field="$store.state.menu.company_logo" class="logo_style" />
     <!--  <p class="mx-3 ma-0 text-subtitle-2 text-sm-h6 black--text">{{ $prismic.asText($store.state.menu.company_name) }}</p> -->
    </a>
    <v-spacer></v-spacer>
    <nav class="hidden-md-and-down">
      <ul>
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id" class="d-inline">
          <prismic-link :field="menuLink.link" class="text-h6 black--text mx-4">
            {{ menuLink.link_label }}
          </prismic-link>
        </li>
        <a href="/hafa-samband" class="text-h6 black--text mx-4">Hafa samband</a>
      </ul>
    </nav>

    <v-icon @click="dialog = !dialog" size="40" class="hidden-lg-and-up ma-3 pa-2">
      mdi-menu
    </v-icon>

    <v-dialog v-model="dialog" fullscreen hide-overlay color="primary" transition="dialog-bottom-transition">
      <div style="height: 100%; background-color: white; overflow: auto" class="d-flex flex-column">

        <div class="dialog_close_div">
          <v-icon @click="dialog = false" size="40" class="ma-3 pa-2">
            mdi-close
          </v-icon>
        </div>

        <div class="ma-auto">
          <nav>
            <v-list>
              <v-list-item v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id" @click="dialog = false">
                <v-list-item-content>
                  <prismic-link :field="menuLink.link" class="black--text text-h4 my-3">
                    {{ menuLink.link_label }}
                  </prismic-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="dialog = false">
                <v-list-item-content>
                  <a href="/hafa-samband" class="black--text text-h4 my-3">Hafa samband</a>
                </v-list-item-content>
              </v-list-item>
            </v-list>
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
      dialog: false
    }
  }
}
</script>



<style lang="scss" scoped>

.logo_style {
  max-width: 80px;
  max-height: 80px;
}

/* @media (max-width: 599px){
  .logo_style {
    max-width: 50px; 
  }
} */


.dialog_close_div {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
