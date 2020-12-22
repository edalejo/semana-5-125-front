<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-side-icon>
        <img :src="imageLink.logo" alt="Vuetify.js" height="100%" />
      </v-toolbar-side-icon>
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>¿Gamificación?</v-btn>
        <v-btn text>Caracteristicas</v-btn>
        <v-btn text>Pasos</v-btn>
        <v-btn text class="blue lighten-3" :to="{ path: '/login' }"
          >Inicio Sesion</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <section>
        <v-parallax :src="imageLink.sub_main" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              <strong>Gamifique su empresa</strong>
            </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              Formación para su equipo.
            </div>
            <div
              class="ps-12 white--text subheading mb-3 text-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              <p classs="">
                Usando características de aprendizaje propias de los video
                juegos, sus empleados aprenderán todos los procesos necesarios
                para el correcto funcionamiento de su empresa&nbsp;
              </p>
            </div>

            <v-btn class="blue lighten-2 mt-5" dark large href="">
              Contáctenos
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-container xs12 sm4 class="my-3">
            <div class="justify-content-center">
              <div class="title headline">
                <h3 class="mb-4 display-2">
                  <strong>La Gamificación es</strong>
                </h3>
              </div>

              <span class="subheading">
                <span class="mb-4 display-7"
                  >la herramienta pedagógica en auge en el ámbito empresarial
                  que permitirá a sus empleados conocer los procesos mediante
                  técnicas multimedia efectivas. En otras palabras, sus
                  empleados <strong>aprenderán jugando</strong>.&nbsp;</span
                >
              </span>
            </div>
          </v-container>
          <v-container xs12 sm4 class="my-3">
            <div class="justify-content-center">
              <div class="title headline">
                <h3 class="mb-4 display-2">
                  <strong>... basado en el Digital Lean Learning</strong>
                </h3>
              </div>

              <span class="subheading">
                <span class="mb-4 display-7">
                  No usamos palabras complejas. Lo que hacemos es traducir los
                  procesos en información impactante que enriquezca el
                  conocimiento de todo su talento humano de forma sencilla,
                  rápida y eficaz.
                </span>
              </span>
            </div>
          </v-container>

          <v-divider></v-divider>

          <v-flex xs12 class="ma-12">
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-img
                      height="250"
                      src="\assets\images\mbr-696x746.png"
                    ></v-img>
                    <!-- <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2" >
                        {{article1.nombre}}
                        </v-icon>
                    </v-card-text> -->
                    <v-card-title
                      primary-title
                      x-large
                      class="blue--text text--lighten-2"
                    >
                      <div class="headline text-center">
                        <strong>
                          {{ article1.nombre }}
                        </strong>
                      </div>
                    </v-card-title>
                    <v-card-subtitle
                      primary-title
                      class="layout justify-center"
                    >
                      <div class="headline text-xs-center">
                        Categoria:
                        {{ article1.categoria.nombre }}
                      </div>
                    </v-card-subtitle>
                    <v-card-text>
                      {{ article1.descripcion }}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <!-- <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >{{article2.nombre}}</v-icon
                      >
                    </v-card-text> -->
                    <v-card-title
                      primary-title
                      x-large
                      class="blue--text text--lighten-2"
                    >
                      <div class="headline text-center">
                        <strong>
                          {{ article2.nombre }}
                        </strong>
                      </div>
                    </v-card-title>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">
                        Categoria: {{ article2.categoria.nombre }}
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ article2.descripcion }}
                    </v-card-text>
                    <v-img
                      height="250"
                      src="\assets\images\mbr-696x464.jpg"
                    ></v-img>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-img
                      height="250"
                      src="\assets\images\mbr-696x696.png"
                    ></v-img>
                    <!-- <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >{{article3.nombre}}</v-icon
                      >
                    </v-card-text> -->
                    <v-card-title
                      primary-title
                      x-large
                      class="blue--text text--lighten-2"
                    >
                      <div class="headline text-center">
                        <strong>
                          {{ article3.nombre }}
                        </strong>
                      </div>
                    </v-card-title>

                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">
                        Categoria: {{ article3.categoria.nombre }}
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ article3.descripcion }}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">
              X - Gamification la mejor alternativa para sus proceso de
              capacitacion empresarial
            </div>
            <em>Diviertase aprendiendo y entrenado a sus empleados</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Mas Información
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container>
          <v-card max-width="" class="mx-auto">
            <v-toolbar color="blue" dark>
              <v-toolbar-title xlass="text--center">
                <strong>PASOS</strong>
              </v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <!-- <v-icon>mdi-magnify</v-icon> -->
              </v-btn>
            </v-toolbar>

            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar>
                    <v-icon>{{ item.avatar }}</v-icon>
                    <!-- <v-img :src="item.avatar"></v-img> -->
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-container>
      </section>

      <section>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 text-center class="mt-5">
              <div class="headline">
                <strong> ¿Estás Interesado? ¡Manténganse Informado! </strong>
              </div>
              <br />
              <div>
                Si desea ser uno de los primeros usuarios de X-Gamification, le
                enviaremos un correo electrónico lo mas pronto posible. ¡Háganos
                saber cómo podemos ayudarlo!
              </div>
            </v-flex>
            <v-flex xs8 offset-xs2>
              <v-card class="elevation-0 transparent">
                <v-card-text>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field
                      filled
                      label="Dirección Email"
                      :rules="emailRules"
                      v-model="email"
                      hint="Ingrese su email!"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field
                      filled
                      multi-line
                      label="Comentarios"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                    <v-btn
                      class="blue lighten-2 mb-5"
                      dark
                      large
                      @click="subscribe"
                      >Pongase en contacto</v-btn
                    >
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large
                      >Welcome on board!</v-btn
                    >
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-flex xs12 sm4> </v-flex>
      </section>

      <section>
        <v-container class="grey lighten-5">
          <v-row no-gutters justify="space-between">
            <v-col v-for="(member, i) in members" :key="i" cols="12" sm="2">
              <v-card class="pa-2" outlined max-width="200">
                <v-img :src="member.image" height="200px"></v-img>

                <v-card-title class="subtitle-1">
                  <strong>
                    {{ member.nombre }}
                  </strong>
                </v-card-title>

                <v-card-subtitle>{{ member.descripcion }}</v-card-subtitle>
                <v-card-text
                  ><strong>{{ member.rol }}</strong></v-card-text
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section></section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12 class="text-xs-center">
            <div class="white--text ml-3">
              © Gamifficación. Todos los derechos reservados.
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      title: "X-Gamification",
      imageLink: {
        main:
          "https://cdn.pixabay.com/photo/2016/04/06/08/47/wire-rack-1311161_960_720.jpg",
        sub_main:
          "https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161_960_720.jpg",
        logo: "assets/images/mbr-103x103.png",
        social_cover:
          "https://cdn.pixabay.com/photo/2015/11/19/08/47/banner-1050615_960_720.jpg",
      },
      email: "",
      emailRules: [
        (v) => {
          return !!v || "el E-mail es necesaario";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "el E-mail debe ser valido",
      ],
      subscribed: false,
      items: [
        { header: "Siga la siguiente ruta" },
        {
          avatar: "mdi-numeric-1-circle",
          title: `<strong>Preparación y Adecuación.</strong>`,
          subtitle: `<h5>Todo el material denso y técnico es procesa y se convierte en experiencias formativas de alto impacto que puede ser reproducida en cualquier dispositivo, <strong>incluso en un Smartphone</strong>.</h5> `,
        },
        { divider: true, inset: true },
        {
          avatar: "mdi-numeric-2-circle-outline",
          title: `<strong>Medimos el nivel de conocimiento.</strong>`,
          subtitle: `<h5>Con técnicas sencillas y poco invasivas en el ambiente de trabajo cuantificamos el nivel de conocimiento del talento humano del que dispone tu empresa.</h5> `,
        },
        { divider: true, inset: true },
        {
          avatar: "mdi-numeric-3-circle",
          title: `<strong>Detectamos y corregimos.</strong>`,
          subtitle: `<h5>Encontramos y registramos áreas de oportunidad para hacer especial hincapié en ellas en la solución hecha a la medida que desarrollaremos para ti y tu empresa.</h5> `,
        },
        { divider: true, inset: true },
      ],

      members: [
        {
          codigo: "1",
          nombre: "Ivan Aldana",
          descripcion:
            "Eterno interesado en la tecnología y los descubrimientos científicos. Convencido de que el cielo ya no es el lìmite",
          rol: "Desarrollador FrontEnd",
          image: "./images/IvanCAldana.jpg",
        },
        {
          codigo: "2",
          nombre: "Eduardo Gallo",
          descripcion:
            "Entusiasta de la programación y de aprender cosas nuevas, me encantan los videojuegos, el anime.",
          rol: "Desarrollador FullStack",
          image: "./images/Gallo.jpg",
        },
        {
          codigo: "3",
          nombre: "Jose Bohorquez",
          descripcion:
            "Apasionado por la pedadogía, el cine y de como la palabra Lorem se convierte en la retahíla de letras en Latín (?) en el VSCode",
          rol: "Desarrollador BackEnd",
          image: "./images/JoseBohorquez.jpg",
        },
        {
          codigo: "4",
          nombre: "Diego Vasquez",
          descripcion:
            "Con deseo innato de desarrollar tecnología para la solución de problemas cotidianos.",
          rol: "Scrum Master",
          image: "./images/diego.jpeg",
        },
        {
          codigo: "5",
          nombre: "Alejandro Lopez",
          descripcion: "Me gusta el fútbol y la mecánica industrial y Lorem",
          rol: "Tester",
          image: "./images/alejandro.jpeg",
        },
      ],
      result: Object,
      article1: {},
      article2: {},
      article3: {},
    };
  },
  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    },
  },

  computed: {
    imgHeight: function () {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    },
  },
  beforeCreate() {
    axios
      .get("http://localhost:3000/api/articulo/list", {})
      .then((response) => {
        this.result = response.data;
        console.log("datos", this.result);
        this.article1 = this.result[0];
        this.article2 = this.result[1];
        this.article3 = this.result[2];
      })
      .catch((error) => {
        console.log(error);
      });
  },

  mounted: function () {},
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>