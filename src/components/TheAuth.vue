<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title  >Administracion X-Gamification</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" color="primary" @click="salir()">
        <v-icon>mdi-logout</v-icon>
        <span>Salir</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <select-menu :user="user"></select-menu>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view>
        </router-view>
        
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import SelectMenu from "./SelectMenu";

export default {
  name: "Auth",
  components: {
    SelectMenu,
  },

  data: () => ({
    drawer: null,
    user: "",
  }),

  methods: {
    getUserDetails() {
      this.user = this.$store.state.user;
      console.log("datos de usuario de store", this.user);
      },

    salir() {
      this.$store.dispatch("salir");
    },

  },
  beforeMount(){
    this.getUserDetails();
    // this.$store.dispatch("autoLogin");
  },
  created() {
      // this.getUserDetails();
        
    },
};
</script>