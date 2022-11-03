<template>
  <q-form
    @submit.prevent="buscarEmpleado"
    class="q-gutter-md row items-center justify-center q-ma-xl"
  >
    <!-- <div>
      <q-btn-toggle
        v-model="typeSearch"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="primary"
        color="white"
        text-color="primary"
        :options="[
          { label: 'ID', value: 'one' },
          { label: 'Nombre', value: 'two' },
        ]"
      />
    </div> -->

    <q-input
      v-model="Buscar"
      filled
      label="Buscar por codigo e empleado"
      type="search"
      style="width: 25rem"
      :rules="[(val) => (val && val.length > 0) || 'Ingresar correo']"
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

  <div class="row q-px-xl q-mx-xl">
    <div class="col-2 flex flex-center">
      <q-toggle
        size="lg"
        v-model="extendSearchToggle"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="Busqueda extendida"
      />
    </div>
    <div class="col-3 flex flex-center">
      <q-toggle
        size="lg"
        v-model="rangeDateSearchToggle"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="Rango por fecha de contratacion"
      />
    </div>
  </div>

  <div class="row q-px-xl q-mx-xl">
    <div
      class="flex flex-center q-pa-md col"
      style="max-width: 200px"
      v-if="rangeDateSearchToggle"
    >
      <p class="flex" style="color: grey; font-size: 16px">Fecha Inicial</p>
      <q-input
        rounded
        outlined
        dense
        v-model="dateIni"
        mask="date"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="dateIni">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <div
      class="flex flex-center q-pa-md col"
      style="max-width: 200px"
      v-if="rangeDateSearchToggle"
    >
      <p class="flex" style="color: grey; font-size: 16px">Fecha Final</p>
      <q-input
        rounded
        outlined
        dense
        v-model="dateFin"
        mask="date"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="dateFin">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <div class="q-pt-xl q-mt-sm col" v-if="rangeDateSearchToggle">
      <q-btn
        rounded
        outline
        label="Filtrar"
        @click="fechas"
        color="grey"
        text-color="blue"
        icon-right="filter_list"
      />
    </div>
  </div>

  <div class="q-px-xl q-mx-xl" v-if="extendSearchToggle">
    <p class="q-px-md" style="color: grey; font-size: 16px">
      Busqueda Extendida
    </p>
  </div>

  <div class="row q-px-xl q-mx-xl q-mt-md" v-if="extendSearchToggle">
    <div class="q-pa-md col" style="max-width: 200px">
      <div class="q-gutter-md">
        <q-select
          rounded
          outlined
          dense
          v-model="depto"
          :options="options1"
          label="Departamento"
        />
      </div>
    </div>

    <div class="q-pa-md col" style="max-width: 150px">
      <div class="q-gutter-md">
        <q-select
          rounded
          outlined
          dense
          v-model="unidad"
          :options="options2"
          label="Unidad"
        />
      </div>
    </div>

    <div class="q-pa-md col" style="max-width: 150px">
      <div class="q-gutter-md">
        <q-select
          rounded
          outlined
          dense
          v-model="centro"
          :options="options3"
          label="Centro"
        />
      </div>
    </div>

    <div class="q-pa-md col" style="max-width: 200px">
      <div class="q-gutter-md">
        <q-select
          rounded
          outlined
          dense
          v-model="dependencia"
          :options="options4"
          label="Dependencia"
        />
      </div>
    </div>

    <div class="q-pa-md col" style="max-width: 180px">
      <div class="q-gutter-md">
        <q-select
          rounded
          outlined
          dense
          v-model="profesion"
          :options="options5"
          label="Profesion"
        />
      </div>
    </div>

    <div class="q-pa-md col" style="max-width: 200px">
      <div class="q-gutter-md">
        <q-select
          rounded
          outlined
          dense
          v-model="filter"
          :options="options6"
          label="Genero"
        />
      </div>
    </div>

    <div class="q-pa-md col" style="max-width: 200px">
      <div class="q-gutter-md">
        <q-select
          rounded
          outlined
          dense
          v-model="nacionalidad"
          :options="options7"
          label="Nacionalidad"
        />
      </div>
    </div>

    <div class="q-pa-md col">
      <q-btn
        rounded
        outline
        label="Filtrar"
        color="grey"
        text-color="blue"
        icon-right="filter_list"
      />
    </div>
  </div>

  <div class="q-pa-xl">
    <q-table
      grid
      card-class="text-black"
      title="Empleados"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Buscar entre resultados"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card>
            <q-card-section class="text-center">
              <strong>{{
                props.row.primer_nombre +
                " " +
                props.row.segundo_nombre +
                " " +
                props.row.primer_apeliido +
                " " +
                props.row.segundo_apellido
              }}</strong>
            </q-card-section>
            <q-separator />
            <q-card-section class="flex">
              <q-img
                :src="url"
                style="height: 100px; max-width: 100px; border-radius: 100%"
              />
              <div class="q-px-md">
                <p>Correo: {{ props.row.correo_institucional }}</p>
                <p>ID: {{ props.row.id_empleado }}</p>
                <p>Genero: {{ props.row.genero }}</p>
              </div>
            </q-card-section>
            <div class="row justify-end q-pa-md" style="">
              <q-btn
                color="primary"
                icon-right="person"
                outline
                label="Perfil"
              />
            </div>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

const columns = [
  {
    name: "primer_nombre",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) =>
      row.primer_nombre +
      " " +
      row.segundo_nombre +
      " " +
      row.primer_apeliido +
      " " +
      row.segundo_apellido,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "id_empleado",
    align: "center",
    label: "ID",
    field: "id_empleado",
    sortable: true,
  },
  { name: "Image", label: "Image", field: "image", sortable: true },
];

const rows = ref([]);
const url = ref(
  "https://www.shareicon.net/download/2016/07/10/119669_people_512x512.png"
);
export default {
  setup() {
    const Buscar = ref("");
    const dateIni = ref("2015/02/01");
    const dateFin = ref("2022/02/01");

    var Empleados = ref([]);
    var Empleado = ref([]);

    const traerEmpleados = async () => {
      try {
        await axios({
          url: "http://localhost:4000/RR-HH/PAA/empleados",
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            Empleados.value = res.data.body;
            console.log(Empleados.value);
            console.log(res.data.body);
            rows.value = Empleados.value;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    traerEmpleados();
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
            rows.value = Empleado.value;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const fechas = async () => {
      console.log(dateIni.value + " " + dateFin.value);
      try {
        await axios({
          url: `http://localhost:4000/RR-HH/empleados/fechas?fecha1=${dateIni.value}&fecha2=${dateFin.value}`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            Empleado.value = res.data.body;
            console.log(Empleado.value);
            console.log(res.data.body);
            rows.value = Empleado.value;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const traerDepartamentos = () => {};
    const traerUnidad = () => {};
    const traerCentros = () => {};
    const traerDependencia = () => {};
    const traerProfesion = () => {};
    const traerGenero = () => {};
    const traerNAcionalidad = () => {};
    return {
      // typeSearch: ref("one"),
      date: ref("2019/02/01"),
      extendSearchToggle: ref(false),
      dateSearchToggle: ref(false),
      rangeDateSearchToggle: ref(false),
      depto: ref(null),
      unidad: ref(null),
      centro: ref(null),
      dependencia: ref(null),
      profesion: ref(null),
      genero: ref(null),
      nacionalidad: ref(null),
      filter: ref(""),

      columns,
      rows,
      url,

      options1: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      options2: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      options3: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      options4: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      options5: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      options6: ["M", "F"],
      options7: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],

      Buscar,
      dateIni,
      dateFin,
      Empleados,
      Empleado,
      buscarEmpleado,
      traerEmpleados,
      fechas,
      traerDepartamentos,
      traerUnidad,
      traerCentros,
      traerDependencia,
      traerProfesion,
      traerGenero,
      traerNAcionalidad,
    };
  },
};
</script>

<style scoped></style>
