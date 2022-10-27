<template>


  <q-form @submit="onSubmit"
          class="q-gutter-md row items-center justify-center q-ma-xl">
    <div>
      <q-btn-toggle
        v-model="model"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="primary"
        color="white"
        text-color="primary"
        :options="[
          {label: 'ID', value: 'one'},
          {label: 'Nombre', value: 'two'}
        ]"
      />
    </div>

    <q-input v-model="search" filled type="search"  style="width: 25rem">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-btn label="Buscar" type="submit" color="primary" style="height: 3.4rem" />
  </q-form>

  <div class="q-pa-xl">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      control-color="blue"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      arrows
      height="300px"
      class="bg-white text-bg-dark shadow-1 rounded-borders"
    >
      <!--Info del perfil-->
      <q-carousel-slide name="style" class="column no-wrap ">

        <div class="row">
          <div class="q-ma-md float-left">
            <img  class="q-ma-sm" style="width: 10rem" src="../assets/img/usuario.png"/>
          </div>
          <div class="q-mx-md q-mt-lg text-left d-flex">
            Nombre
            <div class="q-my-sm text-left d-flex">
              {{ nombre }}
            </div>
            Cuenta
            <div class="q-my-sm text-left d-flex">
              {{ cuenta }}
            </div>
          </div>

          <div class="q-mx-md q-mt-lg text-left d-flex">
            Centro
            <div class="q-my-sm text-left d-flex">
              {{ centro }}
            </div>
            Unidad
            <div class="q-my-sm text-left d-flex">
              {{ unidad }}
            </div>
          </div>

          <div class="q-mx-md q-mt-lg text-left d-flex">
            Nombre
            <div class="q-my-sm text-left d-flex">
              {{ nombre }}
            </div>
            Cuenta
            <div class="q-my-sm text-left d-flex">
              {{ cuenta }}
            </div>
          </div>
        </div>


      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          Aqui ira informacion extra
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          Aqui iran los dias disponibles y gastados de vacaciones
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div class="q-pa-xl" >
    <q-table
      title="Participaciones"
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
    >
      <template v-slot:pagination="scope">
        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="first_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
        />

        <q-btn
          icon="chevron_left"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
        />

        <q-btn
          icon="chevron_right"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
        />

        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="last_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
        />
      </template>
    </q-table>
  </div>

  <div class="q-mx-xl q-gutter-sm">

    <q-btn color="primary" label="Agregar" class="float-right q-mb-xl" @click="fullWidth = true"/>
    <q-btn color="secondary" label="Reportes" class="float-right q-mb-xl"/>

  </div>


  <q-dialog
    v-model="fullWidth"
    full-width
  >
    <q-card>
      <q-card-section>
        <div class="text-h6">Full Width</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Click/Tap on the backdrop.
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn color="primary" flat label="Guardar" />
        <q-btn color="red" flat label="Cerrar" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
import { ref, computed } from 'vue'

const columns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre', sortable: true },
  { name: 'anio', label: 'Año', field: 'anio', sortable: true },
  { name: 'periodo', label: 'Periodo', field: 'periodo' },
  { name: 'edificio', label: 'Edificio', field: 'edificio' },
  { name: 'aula', label: 'Aula', field: 'aula' },
  { name: 'funcion', label: 'Funcion', field: 'funcion' },
  { name: 'fecha', label: 'Fecha', field: 'fecha', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'horas', label: 'Horas', field: 'horas', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    id: 1,
    anio: 2015,
    nombre:'Mark',
    periodo: 3,
    edificio: 'C1',
    aula:102,
    funcion:'Supervisor',
    fecha:'15/10/15',
    horas:3
  },
  {
    id: 2,
    anio: 2021,
    nombre:'Mark',
    periodo: 3,
    edificio: 'B2',
    aula:102,
    funcion:'Aplicador',
    fecha:'15/10/15',
    horas:1
  },
  {
    id: 3,
    anio: 2016,
    nombre:'Mark',
    periodo: 3,
    edificio: 'C2',
    aula:102,
    funcion:'Supervisor',
    fecha:'15/10/15',
    horas:2
  },
  {
    id: 3,
    anio: 2016,
    nombre:'Mark',
    periodo: 3,
    edificio: 'C2',
    aula:102,
    funcion:'Supervisor',
    fecha:'15/10/15',
    horas:2
  },
  {
    id: 3,
    anio: 2016,
    nombre:'Mark',
    periodo: 3,
    edificio: 'C2',
    aula:102,
    funcion:'Supervisor',
    fecha:'15/10/15',
    horas:2
  },
  {
    id: 3,
    anio: 2016,
    nombre:'Mark',
    periodo: 3,
    edificio: 'C2',
    aula:102,
    funcion:'Supervisor',
    fecha:'15/10/15',
    horas:2
  },
  {
    id: 3,
    anio: 2016,
    nombre:'Mark',
    periodo: 3,
    edificio: 'C2',
    aula:102,
    funcion:'Supervisor',
    fecha:'15/10/15',
    horas:2
  },
  {
    id: 3,
    anio: 2016,
    nombre:'Mark',
    periodo: 3,
    edificio: 'C2',
    aula:102,
    funcion:'Supervisor',
    fecha:'15/10/15',
    horas:2
  }
]

export default {
  setup () {
    const pagination = ref({
      sortBy: 'id',
      descending: false,
      page: 2,
      rowsPerPage: 3
      // rowsNumber: xx if getting data from a server
    })

    return {
      model: ref('one'),
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet co',
      nombre:'Mark Zucaritas Diaz Rodriguez',
      cuenta:20181032517,
      centro:'Ciudad Universitaria',
      unidad:'Gestion y desarrollo',
      pagination,
      fullWidth: ref(false),
      search: ref(''),
      columns,
      rows,

      onSubmit(){
        //Que haga lo que tenga que hacer

          console.log('holaa')
      },

      pagesNumber: computed(() => {
        return Math.ceil(rows.length / pagination.value.rowsPerPage)
      })
    }
  }
}
</script>

