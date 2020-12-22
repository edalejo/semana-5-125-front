<template>
  <v-data-table
    :headers="headers"
    :items="usuario"
    sort-by="id"
    class="elevation-1"
    :loading="carga"    
    loading-text="Cargando... Por favor espere"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Usuario</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Nuevo Usuario
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre Usuario"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.contraseña"
                      label="Contraseña"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.estado"
                      label="Estado"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.rol"
                      label="Rol"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <!-- <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions> -->
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon medium @click="switchItem(item)">
        <template v-if="item.estado"> mdi-toggle-switch </template>
        <template v-else> mdi-toggle-switch-off-outline </template>
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="list"> Actualizar </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
export default {
  name: "DataTableUsuario",
  data: () => ({
    carga: true,
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "ID", value: "id" },
      {
        text: "Usuario",
        align: "start",
        sortable: true,
        value: "nombre",
      },

      { text: "Rol", value: "rol" },
      { text: "email", value: "email" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    usuario: [],
    editedIndex: -1,
    editedItem: {
      rol: "",
      nombre: "",
      email: "",
      contraseña: "",
      estado: 1,
    },
    defaultItem: {
      rol: "",
      nombre: "",
      email: "",
      contraseña: "",
      estado: 1,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva Usuario" : "Editar Usuario";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
  },

  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/usuario/list")
        .then(
          (response) => {
            this.usuario = response.data;
          },
          {
            headers: {
              token: this.$store.state.token,
            },
          }
        )
        .catch((error) => {
          console.log(error);
        });
        this.carga=false;
    },

    editItem(item) {
      this.editedIndex = item.id;
      // this.editedIndex = this.categoria.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    switchItem(item) {
      this.editedIndex = item.id;
      // this.editedIndex = this.categoria.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.switchItemConfirm();
    },

    switchItemConfirm() {
      if (this.editedItem.estado === 1) {
        axios
          .put(
            "http://localhost:3000/api/usuario/deactivate",
            {
              id: this.editedIndex,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.list();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        // Object.assign(this.categoria[this.editedIndex], this.editedItem);
      } else {
        axios
          .put(
            "http://localhost:3000/api/usuario/activate",
            {
              id: this.editedIndex,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.list();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      }
      // this.close();
      // this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        axios
          .put(
            "http://localhost:3000/api/usuario/update",
            {
              id: this.editedIndex,
              nombre: this.editedItem.nombre,
              email: this.editedItem.email,
              rol: this.editedItem.rol,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.list();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        // Object.assign(this.categoria[this.editedIndex], this.editedItem);
      } else {
        console.log("axios token ", this.$store.state.token)
        axios
          .post(
            "http://localhost:3000/api/usuario/register",
            {
              nombre: this.editedItem.nombre,
              email: this.editedItem.email,
              rol: this.editedItem.rol,
              password: this.editedItem.contraseña,
              estado: 1,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.list();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        // this.categoria.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>