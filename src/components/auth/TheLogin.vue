<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Formulario Ingreso</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="login.email"
                    prepend-icon="mdi-account"
                    name="login"
                    label="E-mail"
                    type="text"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="login.password"
                    id="password"
                    prepend-icon="mdi-lock"
                    :append-outer-icon="see ? 'mdi-eye' : 'mdi-eye-off'"
                    name="password"
                    label="Password"
                    :type="passwordFieldType"
                    @click:append-outer="toogleSee"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                color="primary" 
                @click.prevent="loginUser"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";

export default {
  name: "Login",
  props: {
    source: String,
  },
  data() {
    return {
      see: true,
      login: {
        email: "",
        password: "",
      },
      passwordFieldType: "password",
    };
  },

  beforeCreate(){
    console.log("dirigir a auth");
    this.$store.dispatch('autoLogin') ? this.$router.push({name:"Auth"}) : false;  
    
  },
  methods: {
    async loginUser() {
      axios
        .post("http://localhost:3000/api/usuario/login", this.login)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch('guardarToken',data.tokenReturn)
          swal("Autenticado", "Login Correcto", "success");
          this.$router.push({name:"Auth"});
          console.log(data);
          console.log("aca estoy")
        })
        .catch((error) => {
          swal("Oh, no", "Algo salió mal", "error");
          console.log(error);
          return error;
        });
    },

    toogleSee() {
      this.see = !this.see;
      this.switchVisibility();
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>


<style scoped>
</style>