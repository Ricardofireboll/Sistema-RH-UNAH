<template>


  <q-form
    @submit.prevent="buscarEmpleado"
    class="q-gutter-md row items-center justify-center q-ma-xl"
  >

    <q-input
      v-model="Buscar"
      filled
      label="Buscar por codigo de empleado"
      type="search"
      style="width: 25rem"
      :rules="[(val) => (val && val.length > 0) || 'Ingrese el id']"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-btn
      class="q-mb-md"
      label="Buscar"
      type="submit"
      color="primary"
      style="height: 3.4rem"
    />
  </q-form>

  <q-card class="q-ma-xl">
    <!--Info del perfil-->
    <div class="row">
      <div class="q-ma-md float-left items-center">
        <img
          class="q-ma-sm"
          style="width: 10rem"
          src="data:image/png;base64,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"
          alt=""
        />
        <br>
        <q-toggle
          class=""
          v-model="toggleModificar"
          icon="edit"
          label="Modificar"
          size="xl"
        />
        <br>
        <q-btn :disable="!toggleModificar" class="q-ma-md float-center" icon-right="save" color="primary" label="Guardar" />
      </div>

      <div   class="q-mx-md q-mt-lg text-left d-flex">
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense  clearable filled color="purple-12" v-model="nombre" label="Nombre" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar"  dense clearable filled color="purple-12" v-model="apellido" label="Apellido" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense  clearable filled color="purple-12" v-model="CorreoI" label="Correo Institucional" />
          </div>
        </div>


        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense  clearable filled color="purple-12" v-model="dni" label="DNI" />
          </div>
        </div>


        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense  clearable filled color="purple-12" v-model="Genero" label="Genero" />
          </div>
        </div>


        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="fechai" label="Fecha de ingreso" />
          </div>
        </div>
      </div>

      <div class="q-mx-md q-mt-lg text-left d-flex">

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Fechan" label="Fecha de nacimiento" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Celular" label="Celular" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="CorreoP" label="Correo personal" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Telefono" label="Telefono" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Plan2" label="Plan2" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Entrada" label="Entrada" />
          </div>
        </div>
      </div>

      <div class="q-mx-md q-mt-lg text-left d-flex">
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Salida" label="Salida" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="CriterioX" label="Criterio X" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Anexo1" label="Anexo 1" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Anexo1B" label="Anexo 1B" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Folio" label="Folio" />
          </div>
        </div>


        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Modalidad" label="Modalidad" />
          </div>
        </div>
      </div>


      <div class="q-mx-md q-mt-lg text-left d-flex">
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="A14" label="A14" />
          </div>
        </div>


        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="RolT" label="Rol de trabajo" />
          </div>
        </div>



        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="A15" label="Anexo 15" />
          </div>
        </div>



        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Dentrada" label="D_Entrada" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Dsalida" label="D_Salida" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="EstadoC" label="Estado civil" />
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input :disable="!toggleModificar" dense clearable filled color="purple-12" v-model="Sueldo" label="Sueldo" />
          </div>
        </div>


        <q-btn class="q-ma-md float-right" color="teal" label="Agregar" icon-right="person_add" @click="dialog = true" />

      </div>
    </div>


  </q-card>

  <div class="float-right q-mb-xl">
    <div class="q-mx-xl">

      <q-dialog v-model="dialog">
        <q-layout
          view="lhh LpR lff"
          container
          style="height: 700px"
          class="bg-grey-3"
        >
          <q-header class="bg-black">
            <q-toolbar>
              <q-toolbar-title class="text-center"
              >Registrar un empleado</q-toolbar-title
              >
            </q-toolbar>
          </q-header>
          <q-page-container>
            <div class="q-pa-md">
              <div class="q-gutter-md row items-start">
                <q-input
                  filled
                  v-model="id_empleado"
                  type="number"
                  hint="Id del empleado"
                />
                <q-input
                  filled
                  v-model="nombre1"
                  type="text"
                  hint="Primer nombre"
                />
                <q-input
                  filled
                  v-model="npombre2"
                  type="text"
                  hint="Segundo nombre"
                />
                <q-input
                  filled
                  v-model="apellido1"
                  type="text"
                  hint="Primer apellido"
                />
                <q-input
                  filled
                  v-model="apellido2"
                  type="text"
                  hint="Segundo apellido"
                />
                <q-input
                  filled
                  v-model="correo"
                  type="email"
                  hint="Correo institucional"
                />
                <q-select
                  hint="Genero"
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  filled
                  v-model="genero"
                  :options="options"
                  style="width: 250px"
                />
                <q-input filled type="tel" hint="dni" />
                <q-input filled type="date" hint="Fecha de ingreso" />
                <q-input filled type="date" hint="Fecha de nacimiento" />
                <q-input filled type="tel" hint="Celular" />
                <q-input filled type="email" hint="Correo personal" />
                <q-input filled type="tel" hint="Telefono" />
                <q-input filled type="number" hint="Plan 2" />
                <q-input filled type="time" hint="Entrada" />
                <q-input filled type="time" hint="Salida" />
                <q-input filled type="text" hint="Criterio X" />
                <q-input filled type="text" hint="Anexo 1" />
                <q-input filled type="text" hint="Anexo 1B" />
                <q-input filled type="number" hint="Folio" />
                <q-input filled type="text" hint="A 14" />
                <q-select
                  hint="Modalidad"
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  filled
                  v-model="model2"
                  :options="option"
                  style="width: 250px"
                />
                <q-select
                  filled
                  v-model="model3"
                  multiple
                  :options="option1"
                  hint="Rol de trabajo"
                  style="width: 250px"
                />
                <q-input filled type="text" hint="Anexo 15" />
                <q-input filled type="time" hint="D_Entrada" />
                <q-input filled type="time" hint="D_Salida" />
                <q-select
                  hint="Estado civil"
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  filled
                  v-model="model4"
                  :options="option2"
                  style="width: 250px"
                />
                <q-input filled type="number" hint="Sueldo" />
              </div>
              <q-btn

                color="primary"
                class="q-mt-lg"
                @click="guardarUsuario"
                label="Guardar"
              />
            </div>

            <q-page-scroller position="bottom">
              <q-btn fab icon="keyboard_arrow_up" color="red" />
            </q-page-scroller>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, computed } from "vue";
const columns = [
  {
    name: "id",
    required: true,
    label: "ID",
    align: "left",
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "nombre",
    align: "center",
    label: "Nombre",
    field: "nombre",
    sortable: true,
  },
  { name: "anio", label: "Año", field: "anio", sortable: true },
  { name: "periodo", label: "Periodo", field: "periodo" },
  { name: "edificio", label: "Edificio", field: "edificio" },
  { name: "aula", label: "Aula", field: "aula" },
  { name: "funcion", label: "Funcion", field: "funcion" },
  {
    name: "fecha",
    label: "Fecha",
    field: "fecha",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "horas",
    label: "Horas",
    field: "horas",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];
const rows = [];
export default {
  setup() {
    let Empleado=ref([])
    const Buscar = ref("");
    const newUser = ref("");
    const id_empleado = ref("");
    const nombre1 = ref("");
    const npombre2 = ref("");
    const apellido1 = ref("");
    const apellido2 = ref("");
    const genero = ref("");
    const correo = ref("");
      let nombre= ref('')
      let   apellido= ref('')
      let   CorreoI= ref('')
      let   Genero= ref('')
      let   dni= ref('')
      let    fechai= ref('')
      let   Fechan= ref('')
      let   Celular= ref('')
      let   CorreoP= ref('')
      let   Telefono= ref('')
      let   Plan2= ref('')
      let   Entrada= ref(' ')
      let   Salida= ref(' ')
      let   CriterioX= ref(' ')
      let   Anexo1= ref(' ')
      let   Anexo1B= ref(' ')
      let   Folio= ref('')
      let   A14= ref(' ')
      let   Modalidad= ref('')
      let   RolT= ref('')
      let   A15= ref(' ')
      let   Dentrada= ref('')
      let   Dsalida=ref('')
      let   EstadoC= ref('')
      let   Sueldo= ref('')


    const pagination = ref({
      sortBy: "id",
      descending: false,
      page: 2,
      rowsPerPage: 3,
      // rowsNumber: xx if getting data from a server
    });


    const buscarEmpleado = async () => {
      console.log(Buscar.value);
      try {
        await axios({
          url: `http://localhost:4000/RR-HH/PAA/${Buscar.value}`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            Empleado.value = res.data.body;
            console.log(Empleado.value);
            console.log(res.data.body);

            nombre.value =
              Empleado.value.at(0).primer_nombre+" "+
              Empleado.value.at(0).segundo_nombre

            apellido.value=
              Empleado.value.at(0).primer_apeliido+" "+
              Empleado.value.at(0).segundo_apellido

            CorreoI.value=
              Empleado.value.at(0).correo_institucional

            dni.value=
              Empleado.value.at(0).dni

            Genero.value=
              Empleado.value.at(0).genero

            fechai.value=
              Empleado.value.at(0).fecha_ingreso

            Fechan.value=
              Empleado.value.at(0).fecha_nacimiento

            Celular.value=
              Empleado.value.at(0).celular

            CorreoP.value=
              Empleado.value.at(0).Correo_personal

            Telefono.value=
              Empleado.value.at(0).telefono

            Plan2.value=
              Empleado.value.at(0).plan2

            Entrada.value=
              Empleado.value.at(0).entrada

            Salida.value=
              Empleado.value.at(0).salida

            CriterioX.value=
              Empleado.value.at(0).criterio_x

            Anexo1.value=
              Empleado.value.at(0).anexo_1

            Anexo1B.value=
              Empleado.value.at(0).anexo_1b

            Folio.value=
              Empleado.value.at(0).folio

            A14.value=
              Empleado.value.at(0).a14

            Modalidad.value=
              Empleado.value.at(0).modalidad

            RolT.value=
              Empleado.value.at(0).rol_trabajo

            A15.value=
              Empleado.value.at(0).anexo_15

            Dentrada.value=
              Empleado.value.at(0).d_entrada

            Dsalida.value=
              Empleado.value.at(0).d_salida

            EstadoC.value=
              Empleado.value.at(0).estado_civil

            Sueldo.value=
              Empleado.value.at(0).sueldo




          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const guardarUsuario = async () => {
      newUser.value = {
        id_empleado: id_empleado,
        primer_nombre: nombre1,
        segundo_nombre: npombre2,
        primer_apeliido: apellido1,
        segundo_apellido: apellido2,
        correo_institucional: correo,
        genero: genero,
        dni: "0807-1960-3697",
        fecha_ingreso: "2022-09-01",
        fecha_nacimiento: "2000-02-10",
        celular: 4344142992,
        Correo_personal: "dlestrange2l@themeforest.net",
        telefono: 9102827224,
        plan2: 289,
        entrada: null,
        salida: null,
        criterio_x: null,
        anexo_1: null,
        anexo_1b: null,
        folio: "2",
        a14: null,
        modalidad: "SEMI-P",
        rol_trabajo: "L-M-M-J",
        anexo_15: "Syntax error in formula '/(0|X).gen'",
        d_entrada: "10:39 AM",
        d_salida: "12:58 PM",
        estado_civil: "DIVORCIADO",
        sueldo: "$18675.11",
        Id_horario: "1",
        IdCentro: "4",
        IdFacultad: "4",
        IdPlanilla: "5",
        IdUnidad: "2",
        IdDependencia: "3",
        Id_reloj: "1",
        id_categoria: 1,
        id_jornada: 1,
        id_profesion: 4,
        id_puesto: 3,
        id_estatus: 9,
        id_nacionalidad: 4,
        id_otro_empleo: 1,
        id_obervacion: 2,
      };
      console.log(newUser.value);
      try {
        await axios({
          url: "http://localhost:4000/RR-HH/PAA/Empleado",
          method: "post",
          responseType: "json",
          data: newUser.value,
        })
          .then((res) => {
            console.log(res.data);
            $q.notify("Usuario Guardado");
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    return {
      toggleModificar:ref(false),
      nombre,
      apellido,
      CorreoI,
      Genero,
      dni,
      fechai,
      Fechan,
      Celular,
      CorreoP,
      Telefono,
      Plan2,
      Entrada,
      Salida,
      CriterioX,
      Anexo1,
      Anexo1B,
      Folio ,
      A14,
      Modalidad,
      RolT ,
      A15,
      Dentrada,
      Dsalida,
      EstadoC,
      Sueldo,
      slide: ref("style"),
      dialog: ref(false),
      drawerLeft: ref(false),
      drawerRight: ref(true),
      pagination,
      fullWidth: ref(false),
      search: ref(""),
      model: ref(null),
      options: ["M", "H"],
      model2: ref(null),
      option: ["Presencial", "Semipresencial", "Virtual"],
      model3: ref(null),
      option1: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
      model4: ref(null),
      option2: ["Soltero", "Casado", "Viudo"],
      columns,
      rows,
      newUser,
      guardarUsuario,
      id_empleado,
      nombre1,
      npombre2,
      apellido1,
      apellido2,
      genero,
      correo,
      Buscar,
      Empleado,
      buscarEmpleado,
      onSubmit() {
        //Que haga lo que tenga que hacer
        console.log("holaa");
      },
      pagesNumber: computed(() => {
        return Math.ceil(rows.length / pagination.value.rowsPerPage);
      }),
    };
  },
};
</script>
