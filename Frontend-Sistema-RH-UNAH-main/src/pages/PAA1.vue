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
    <q-btn color="secondary" label="Reportes" class="float-right q-mb-xl" @click="reporte = true"/>

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
        Formulario de agregacion
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn color="primary" flat label="Guardar" />
        <q-btn color="red" flat label="Cerrar" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>


  <q-dialog
    v-model="reporte"
    full-width
  >
    <q-card style="background-color: whitesmoke">
      <q-card-section>
        <div class="text-h6">Informe de participaciones</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row">
        <div class="col-6" id="informePDF" style="width: 816px;height: 1056px;background-color:white">
          <div>
            <img src="../assets/img/logo-unah-blue.png" style="width: 15rem; margin-bottom: 3rem; padding-left: 1.5rem">
            <img src="../assets/img/SDPE.png" style="width: 10rem; margin-bottom: 5.5rem;margin-left: 2rem">
            <img src="../assets/img/Yellowbox.png" style="width: 2.5rem;height: 12rem; margin-bottom: 2.5rem;margin-left: 15.5rem;
            padding-top: 1rem">
            <div>
              <p style="font-size: 14px;text-align: center;font-family:'Arial Black',serif">CONSTANCIA CONDENSADA DE PARTICIPACION PROCESO PAA</p>
              <p style="text-align: justify; margin-left: 4rem;margin-right: 4rem">
                La suscrita SECRETARIA EJECUTIVA DE DESARROLLO DE PERSONAL de la Universidad Nacional Autonoma
                de Honduras; a traves del Departamento de Efectivdad del Recurso Humano, hace constar que el empleado abajo
                detallado ha particpado activamente en los distintos procesos de aplicacion de la prueba de admision PAA por lo
                que se reconoce su labor participativa en estos  procesos institucionales y para los fines que al mismo le interesen
                y sean  pertinentes, se le detallan los datos de sus participaciones, comprendidas desde el año 2015 a la fecha:
              </p>
              <hr style="margin-right: 4rem;margin-left: 4rem;background-color: #1D1D1D;border: none;height: 2px">
              <div class="row" style="margin-left: 4rem;margin-right: 4rem">
                <div class="col">{{cuenta}}</div>
                <div class="col">{{nombre}}</div>
                <div class="col">Gerente de algo</div>
                <div class="col">unidad de algo</div>
              </div>
              <hr style="margin-right: 4rem;margin-left: 4rem;background-color: #1D1D1D;border: none;height: 2px">

            </div>
          </div>
        </div>
        <div class="column-xs flex-column" >


          <q-form class="" @submit="cambiarNombrePDF(nombrePDF)" align="center">
            <img class="q-my-xl" src="../assets/img/pdf.png" style="width: 30%">

            <q-input

              style="width: auto"
              class="q-mx-xl flex"
              filled
              v-model="nombrePDF"
              label="Nombre del archivo*"
              hint="Debe ingresar un nombre para guardar el archivo"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'No se agrego un nombre']"
            />
          </q-form>

          <div align="right" class="q-mr-xl">
            <q-btn class="q-mx-sm q-mt-md" color="primary" label="Guardar" @click="exportToPDF" />
            <q-btn class="q-mx-sm q-mt-md" color="red" label="Cerrar" v-close-popup />
          </div>

        </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">

      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
import { ref, computed } from 'vue'
import html2pdf from "html2pdf.js";


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
    let nombrePDF=ref('')
    //CONSTANTES PARA PRUEBAS ESTATICAS---------------
    const nombrePrueba='Mark Zucaritas Cruz Rodriguez'
    const idPrueba=40234
    const depPrueba='ESPECIALISTA EN ASEGURAMIENTO DE LA CALIDAD'
    const puestoPrueba='ESPECIALISTA EN SER ESPECIAL'
    //------------------------------------------------
    const cambiarNombrePDF = (valor) => {
      nombrePDF.value=valor
    }

    const pagination = ref({
      sortBy: 'id',
      descending: false,
      page: 2,
      rowsPerPage: 3
      // rowsNumber: xx if getting data from a server
    })

    return {
      cambiarNombrePDF,
      nombrePDF,
      model: ref('one'),
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet co',
      nombre:'Mark Zucaritas Diaz Rodriguez',
      cuenta:20181032517,
      centro:'Ciudad Universitaria',
      unidad:'Gestion y desarrollo',
      pagination,
      fullWidth: ref(false),
      reporte: ref(false),
      search: ref(''),
      columns,
      rows,

      onSubmit(){
        //Que haga lo que tenga que hacer

          console.log('holaa')
      },

      exportToPDF() {
        html2pdf(document.getElementById("informePDF"), {
          filename: "../Downloads/"+nombrePDF.value+".pdf",
        });
      },


      pagesNumber: computed(() => {
        return Math.ceil(rows.length / pagination.value.rowsPerPage)
      })
    }




  }
}
</script>

