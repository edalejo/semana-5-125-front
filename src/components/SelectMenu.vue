<template>
  <v-card class="mx-auto" width="256" tile>
    <!-- <v-navigation-drawer permanent> -->
    <v-system-bar> Panel de Administracion</v-system-bar>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">{{ user.nombre }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
         <v-list-item
         
          v-for="(item, i) in activeItems"
          :key="i"
          :to="{ path: item.link }"
          
        >
          <v-list-item-icon >
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- </v-navigation-drawer> -->
  </v-card>
</template>


<script>
export default {
  props: ["user"],
  name: "SelectedMenu",
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Home", icon: "mdi-home", link: "/" ,estado: 1},
      { text: "Usuarios", icon: "mdi-account-group", link: "/auth/usuarios" ,estado: 1},
      { text: "Inicio", icon: "mdi-arrow-up", link: "/auth/" ,estado: 1},
      { text: "Categorias", icon: "mdi-alpha-c-box", link: "/auth/categorias", estado: 1},
      { text: "Articulos", icon: "mdi-alpha-a-box", link: "/auth/articulos" ,estado: 1},
    ],
  }),

  computed: {
     activeItems: function() {
       console.log("rol",this.user.rol)
       if(this.user.rol === ("Vendedor"||"Almacenero")){
         console.log("entro al if",this.user.rol)
         return this.items.filter(function(u) {
           return u.text!=="Usuarios"
       })
       }else{
         return this.items
       }
   } 
} 
};
</script>
