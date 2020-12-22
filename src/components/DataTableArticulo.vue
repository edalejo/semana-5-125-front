<template>
  <v-data-table
    :headers="headers"
    :items="articulo"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Articulo</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Nuevo Articulo
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
                      label="Nombre articulo"
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
                      v-model="editedItem.codigo"
                      label="Codigo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      v-model="categoria"
                      label="Categoria"
                      :items="categorias"
                      item-text="nombre"
                      item-value="id"
                      return-object
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="">
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripción"
                      counter="254"
                      no-resize
                      auto-grow
                    ></v-textarea>
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
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
export default {
  name: "DataTableArticulo",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "ID", value: "id" },
      {
        text: "articulo",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "codigo", value: "codigo" },
      { text: "categoriaId", value: "categoriaId" },
      { text: "categoria", value: "categoria.nombre" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    articulo: [],
    categorias: [],
    categoria: "",
    editedIndex: -1,
    editedItem: {
      codigo: "",
      nombre: "",
      descripcion: "",
      estado: 1,
      categoriaId: "",
      categoriaNombre: "",
    },
    defaultItem: {
      codigo: "",
      nombre: "",
      descripcion: "",
      estado: 1,
      categoriaId: "",
      categoriaNombre: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Articulo" : "Editar Articulo";
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
    this.categoriasList();
  },

  methods: {
    initialize() {
      this.articulo = [
        {
          nombre: "Frozen Yogurt",
          descripcion: "Esta es la descripción",
          estado: 1,
        },
      ];
    },

    list() {
      axios
        .get("http://localhost:3000/api/articulo/list")
        .then((response) => {
          this.articulo = response.data;
        },{
          headers:{
            token:this.$store.state.token
          }})
        .catch((error) => {
          console.log(error);
        });
    },

    categoriasList() {
      axios
        .get("http://localhost:3000/api/categoria/list")
        .then((response) => {
          this.categorias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = item.id;
      this.categoria = item ? item.categoria : "";
      // this.editedIndex = this.articulo.indexOf(item);
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
          .put("http://localhost:3000/api/articulo/deactivate", {
            id: this.editedIndex,
          },{
          headers:{
            token:this.$store.state.token
          }})
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
          .put("http://localhost:3000/api/articulo/activate", {
            id: this.editedIndex,
          },{
          headers:{
            token:this.$store.state.token
          }})
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
      // this.close();
      // this.closeDelete();
    },

    //   this.categoria.splice(this.editedIndex, 1);

    // },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.categoria = "";
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
          .put("http://localhost:3000/api/articulo/update", {
            id: this.editedIndex,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            codigo: this.editedItem.codigo,
            categoriaId: this.categoria.id,
          },
        {
          headers:{
            token:this.$store.state.token
          }})
          .then((response) => {
            this.list();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        // Object.assign(this.articulo[this.editedIndex], this.editedItem);
      } else {
        axios
          .post("http://localhost:3000/api/articulo/add", {
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            codigo: this.editedItem.codigo,
            categoriaId: this.editedItem.categoriaId,
            estado: 1,
          },{
          headers:{
            token:this.$store.state.token
          }})
          .then((response) => {
            this.list();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        // this.articulo.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>