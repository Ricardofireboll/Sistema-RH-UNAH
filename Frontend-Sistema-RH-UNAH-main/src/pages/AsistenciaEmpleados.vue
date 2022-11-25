<template>
  <div v-if="false" class="row q-mx-xl q-py-xl">
    <div class="col-3 q-mx-sm">
      <q-select
        rounded
        outlined
        dense
        v-model="edificio"
        :options="options"
        label="Edificio"
      />
    </div>

    <div class="col-2 q-mx-sm">
      <q-input
        rounded
        outlined
        dense
        v-model="date"
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
              <q-date v-model="date">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <div class="col q-mx-md">
      <q-btn round icon="search" color="purple" />
    </div>
  </div>

  <div class="row q-mx-xl q-pa-xs col-xs-12 col-sm-6 col-md-4">
    <div class="col q-pa-md">
      <q-card class="asisst-Cards text-white bg-primary">
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-overline q-mx-sm">Total de registros</div>
            <div class="text-h5 q-ma-sm q-mb-xs">{{ asistenciasTotales }}</div>
          </q-card-section>
          <q-card-section class="col-5 flex flex-center q-ml-xl">
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="col q-pa-md">
      <q-card class="asisst-Cards text-white" style="background-color: #00c897">
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-overline q-mx-sm">Entradas puntuales</div>
            <div class="text-h5 q-ma-sm q-mb-xs">
              {{ asistenciasPuntuales }}
            </div>
          </q-card-section>
          <q-card-section align="right" class="col-5 flex flex-center q-ml-xl">
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="col q-pa-md">
      <q-card class="asisst-Cards text-white bg-orange">
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-overline q-mx-sm">Entradas inpuntuales</div>
            <div class="text-h5 q-ma-sm q-mb-xs">
              {{ asistenciasInpuntuales }}
            </div>
          </q-card-section>
          <q-card-section align="right" class="col-5 flex flex-right">
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="col q-pa-md">
      <q-card class="asisst-Cards text-white bg-negative">
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-overline q-mx-sm">
              Inasistencias injustifacadas
            </div>
            <div class="text-h5 q-ma-sm q-mb-xs">
              {{ asistenciasInjustificadas }}
            </div>
          </q-card-section>
          <q-card-section align="right" class="col-5 flex flex-right">
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>

  <div class="row q-ma-xl">
    <div class="col-6 q-pa-md">
      <q-card>
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-overline q-mx-sm">Empleado unico</div>
            <div class="text-caption text-grey q-ma-sm q-mb-xs">
              Realiza la busqueda de un empleado unico para conocer su record de
              asistencia
            </div>
          </q-card-section>
          <q-card-section class="col-5 flex flex-center">
            <q-img
              width="52%"
              class="rounded-borders"
              src="../assets/empleados.png"
            />
          </q-card-section>
        </q-card-section>
        <q-card-section align="right">
          <q-btn
            round
            color="primary"
            @click="modalEmpleado = true"
            icon="arrow_right_alt"
          />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-3 q-pa-md">
      <q-card>
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-overline q-mx-sm">Registros</div>
            <div class="text-caption text-grey q-ma-sm q-mb-xs">
              Ingresa datos de asistencia exportando un archivo .csv o de forma
              manual
            </div>
          </q-card-section>
          <q-card-section class="col-5 flex flex-center">
            <q-img class="rounded-borders" src="../assets/csv.png" />
          </q-card-section>
        </q-card-section>
        <q-card-section align="right">
          <q-btn round color="secondary" icon="add" @click="medium = true" />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-3 q-pa-md">
      <q-card>
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-overline q-mx-sm">Reportes</div>
            <div class="text-caption text-grey q-ma-sm q-mb-xs">
              Realiza reportes diarios para llevar registro de rendimiento entre
              empleados
            </div>
          </q-card-section>
          <q-card-section class="col-5 flex flex-center q-pr-lg">
            <q-img
              class="rounded-borders img-fluid"
              src="../assets/report.png"
            />
          </q-card-section>
        </q-card-section>
        <q-card-section align="right">
          <q-btn
            unelevated
            round
            color="orange"
            @click="carousel = true"
            icon="add"
            size="md"
            label=""
          />
        </q-card-section>
      </q-card>
    </div>
  </div>

  <!-----------------------------------------MODAL DE INGRESO DE ASISTENCIA-------------------------------->
  <q-dialog v-model="medium">
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">Escanear CSV</div>
      </q-card-section>

      <q-card-section class="q-mx-lg row">
        <!-------------------------------DE AQUI SALE EL ARCHIVO CSV----------------------------------------------->
        <q-file class="col q-mx-sm" accept=".csv" outlined v-model="archivoCSV">
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
        <q-btn
          :disable="archivoCSV === null"
          color="primary"
          icon="save"
          @click="enviarCSV"
        />
      </q-card-section>
      <!-- <q-card-section align="right" class="q-mx-lg">
        <q-toggle
          v-model="activarManual"
          checked-icon="check"
          color="red"
          label="Falto un registro?"
          unchecked-icon="clear"
        />
      </q-card-section> -->

      <!----------------------------------------INGRESO DE ASISTENCIA MANUAL--------------------------------------->
      <q-card-section v-if="activarManual">
        <q-form class="row">
          <q-time class="col q-ma-sm" v-model="manualTime" format24h />
          <div class="col q-mx-lg">
            <strong>Ingreso de datos</strong>
            <q-input
              class="q-mt-lg"
              rounded
              outlined
              dense
              v-model="manualID"
              type="number"
              hint="id"
            />
            <q-input
              rounded
              outlined
              dense
              v-model="manualDate"
              mask="date"
              hint="fecha"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <div align="right" class="q-my-md">
              <q-btn align="right" color="primary" label="Guardar" />
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn
          color="red"
          flat
          label="cerrar"
          @click="seamless = false"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-----------------------------------------------MODAL DE REPORTERIA----------------------------------------------->
  <q-dialog v-model="carousel" full-height full-width persistent>
    <q-carousel
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      v-model="slide"
      control-color="primary"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      height="200px"
      class="bg-white shadow-1 rounded-borders"
    >
      <q-carousel-slide :disable="slide === 2" :name="1" class="column no-wrap">
        <!--RECIEN AGREGADO-->
        <div class="q-gutter-md row items-center justify-center q-ma-sm">
          <q-icon name="warning" size="230px" color="negative" />
        </div>
        <div>
          <h6 class="q-gutter-md row items-center justify-center q-ma-sm">
            Debe revisar el historial de un empleado antes de empezar a generar
            reportes
          </h6>
        </div>
        <div class="q-gutter-md row items-center justify-center q-ma-xl">
          <q-btn
            size="lg"
            color="negative"
            label="Cerrar"
            @click="btnMostrarResultBusqueda = false"
            v-close-popup
          />
        </div>
        <!--------------------------------------------------------------------------------------------------------------->
      </q-carousel-slide>
      <!-------------------------------------------AQUI VA EL REPORTE DESPUES DE LA BUSQUEDA----------------------------->
      <q-carousel-slide
        :disable="Buscar === ''"
        :name="2"
        class="column no-wrap"
      >
        <div class="q-mt-md">
          <q-card-section>
            <div class="text-h6">Reporte de inasistencia</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row">
              <div
                class="col-6"
                id="informePDF"
                style="width: 816px; height: 1056px; background-color: white"
              >
                <div>
                  <img
                    src="../assets/img/logo-unah-blue.png"
                    style="
                      width: 15rem;
                      margin-bottom: 3rem;
                      padding-left: 1.5rem;
                    "
                  />
                  <img
                    src="../assets/img/SDPE.png"
                    style="
                      width: 10rem;
                      margin-bottom: 5.5rem;
                      margin-left: 2rem;
                    "
                  />
                  <img
                    src="../assets/img/Yellowbox.png"
                    style="
                      width: 2.5rem;
                      height: 12rem;
                      margin-bottom: 2.5rem;
                      margin-left: 15.5rem;
                      padding-top: 1rem;
                    "
                  />
                  <div>
                    <p
                      style="
                        font-size: 14px;
                        text-align: center;
                        font-family: 'Arial Black', serif;
                      "
                    >
                      REPORTE POR INCUMPLIMIENTO DE NORMAS LABORALES
                    </p>
                    <p
                      style="
                        text-align: justify;
                        margin-left: 4rem;
                        margin-right: 4rem;
                      "
                    >
                      La suscrita SECRETARIA EJECUTIVA DE DESARROLLO DE PERSONAL
                      de la Universidad Nacional Autonoma de Honduras; a traves
                      del Departamento de Efectivdad del Recurso Humano, hace
                      constar que el empleado abajo detallado a cometido
                      multiples faltas de asistencia:
                    </p>
                    <hr
                      style="
                        margin-right: 4rem;
                        margin-left: 4rem;
                        background-color: #1d1d1d;
                        border: none;
                        height: 2px;
                      "
                    />
                    <div
                      class="row"
                      style="margin-left: 4rem; margin-right: 4rem"
                    >
                      <div class="col">{{ idEmpleado }}</div>
                      <div class="col">
                        {{
                          primerNombre +
                          " " +
                          segundoNombre +
                          " " +
                          primerApellido +
                          " " +
                          segundoApellido
                        }}
                      </div>
                      <div class="col">{{ puesto_empleado }}</div>
                      <div class="col">N/A</div>
                    </div>
                    <hr
                      style="
                        margin-right: 4rem;
                        margin-left: 4rem;
                        background-color: #1d1d1d;
                        border: none;
                        height: 2px;
                      "
                    />
                    <div style="width: 816px; height: 470px">
                      <div class="q-pa-md">
                        <q-table
                          class="q-mx-xl"
                          flat
                          title=""
                          :rows="rowsEmployee"
                          :columns="columnsEmployee"
                          row-key="name"
                          :separator="'none'"
                          :hide-bottom="!edicion"
                          :filter="filter"
                        />
                        <div v-if="edicion" class="q-mx-xl">
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
                        </div>
                      </div>
                    </div>
                    <hr
                      style="
                        margin-right: 4rem;
                        margin-left: 4rem;
                        border-bottom: dotted 1px;
                        margin-bottom: 0;
                      "
                    />
                    <div style="margin-right: 4rem; margin-left: 4rem">
                      <img
                        src="../assets/img/blue-box-md.png"
                        style="
                          width: 1.5rem;
                          height: 3.5rem;
                          display: -webkit-box;
                          margin-left: auto;
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="column-xs flex-column">
                <q-form
                  class=""
                  @submit="cambiarNombrePDF(nombrePDF)"
                  align="center"
                >
                  <img
                    class="q-my-xl"
                    src="../assets/img/pdf.png"
                    style="width: 30%"
                  />

                  <q-input
                    style="width: auto"
                    class="q-mx-xl flex"
                    filled
                    v-model="nombrePDF"
                    label="Nombre del archivo*"
                    hint="Debe ingresar un nombre para guardar el archivo"
                    lazy-rulesrowsEmployee
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'No se agrego un nombre',
                    ]"
                  />
                </q-form>

                <div align="right" class="q-mr-xl">
                  <q-toggle
                    v-model="edicion"
                    checked-icon="check"
                    color="green"
                    unchecked-icon="clear"
                    label="Editar"
                  >
                    <q-tooltip class="bg-amber text-black shadow-4">
                      No se puede guardar hasta deshabilitar la edicion
                      <q-icon size="15px" name="warning" />
                    </q-tooltip>
                  </q-toggle>
                </div>

                <div align="right" class="q-mr-xl">
                  <q-btn
                    :disable="edicion"
                    class="q-mx-sm q-mt-md"
                    color="primary"
                    label="Guardar"
                    @click="exportToPDF"
                  />
                  <q-btn
                    class="q-mx-sm q-mt-md"
                    color="negative"
                    @click="(slide = 2) && (carousel = false)"
                    label="Cerrar"
                    v-close-popup
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-dialog>

  <q-dialog v-model="modalEmpleado" persistent>
    <q-card style="width: 800px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">
          Empleado
          <q-btn
            color="green"
            flat
            icon="autorenew"
            @click="(btnMostrarResultBusqueda = false) & (Buscar = '')"
          />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <!--LO NUEVO-->
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
            @click="(btnMostrarResultBusqueda = true) & (slide = 2)"
          />
        </q-form>
      </q-card-section>
      <q-card-section v-if="btnMostrarResultBusqueda" class="q-pt-none">
        <div class="row">
          <div class="col-4">
            <q-card style="max-width: 300px" class="q-ma-xs">
              <q-card-section align="center">
                <q-img
                  src="https://www.shareicon.net/download/2016/07/10/119669_people_512x512.png"
                  style="border-radius: 100%"
                  width="150px"
                  height="150px"
                />
                <p class="text-overline">Nombre:</p>
                <p class="text-overline">
                  {{ primerNombre + " " + segundoNombre }}
                </p>

                <p class="text-overline">ID: {{ idEmpleado }}</p>

                <p class="text-overline">Edificio: {{ edificioEmpleado }}</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-8">
            <q-table
              class="q-ma-xs"
              title="Record"
              dense
              :rows="rowsEmployee"
              :columns="columnsEmployee"
              row-key="idAsistencia"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn
          flat
          color="negative"
          label="Cerrar"
          @click="btnMostrarResultBusqueda = false"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!--MENSAJE DE EXITO-->
  <q-dialog v-model="seamless" seamless position="bottom">
    <q-card style="width: 350px">
      <q-linear-progress :value="1" style="color: #00c897" />

      <q-card-section class="row items-center no-wrap">
        <div>
          <div class="text-weight-bold">Guardado</div>
          <div class="text-grey">Los datos se ingresaron correctamente</div>
        </div>

        <q-space />

        <q-btn flat round icon="checklist" size="xl" style="color: #00c897" />

        <q-btn flat round icon="close" v-close-popup />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import html2pdf from "html2pdf.js";
// import * as converter from "json-2-csv";
import axios from "axios";

const columnsEmployee = [
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
    name: "Fecha",
    align: "center",
    label: "Fecha",
    field: "fecha",
    sortable: true,
  },
  {
    name: "hora_marcada",
    label: "hora_marcada",
    field: "hora_marcada",
    sortable: true,
  },
  { name: "llegada", label: "llegada", field: "llegada", sortable: true },
];
/*const rowsEmployee = [
  {
    name: "1",
    Fecha: "2022/11/12",
    Entrada: "8:05",
    Observacion: "Entro tarde",
  },
  {
    name: "1",
    Fecha: "2022/11/12",
    Entrada: "8:05",
    Observacion: "Entro tarde",
  },
  {
    name: "1",
    Fecha: "2022/11/12",
    Entrada: "8:05",
    Observacion: "Entro tarde",
  },
];
*/
const rowsEmployee = ref([]);
export default {
  setup() {
    let totalAusentes = ref(0);
    let totalPuntuales = ref(0);
    let totalInpuntuales = ref(0);
    let totalRegistros = ref(0);
    let seamless = ref(false);
    /********************************************************/
    const archivoCSV = ref(null);
    const asistenciasTotales = ref([]);
    const asistenciasPuntuales = ref([]);
    const asistenciasInpuntuales = ref([]);
    const asistenciasInjustificadas = ref([]);
    const enviarCSV = async () => {
      let formData = new FormData();
      formData.append("csv", archivoCSV.value);
      try {
        await axios
          .post("http://localhost:4000/RR-HH/Asistencia", formData)
          .then((res) => {
            console.log(res.data);
            seamless.value = true;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      traerInfoAsistencia();
    };
    const traerInfoAsistencia = async () => {
      try {
        await axios({
          url: "/RR-HH/Asistencia",
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            asistenciasTotales.value = res.data.body[0].Total;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: "/RR-HH/Asistencia/puntuales",
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            asistenciasPuntuales.value = res.data.body[0].Total_puntuales;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: "/RR-HH/Asistencia/inpuntuales",
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            asistenciasInpuntuales.value = res.data.body[0].Total_inpuntuales;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: "/RR-HH/Asistencia/injustificadas",
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            asistenciasInjustificadas.value =
              res.data.body[0].Total_injustificadas;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    traerInfoAsistencia();
    /********************************************************/

    let nombrePDF = ref("");
    let idEmpleado = ref();
    let primerNombre = ref("");
    let segundoNombre = ref("");
    let primerApellido = ref("");
    let segundoApellido = ref("");
    let edificioEmpleado = ref("B1");
    let puesto_empleado = ref("");

    var Empleado = ref([]);
    const Buscar = ref("");

    const buscarEmpleado = async () => {
      console.log(Buscar.value);
      try {
        await axios({
          url: `/RR-HH/Asistencia/asistenciaPersonal/${Buscar.value}`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            Empleado.value = res.data.body;
            console.log(Empleado.value);
            console.log(res.data.body);
            primerNombre.value = Empleado.value.at(0).Nombre;
            idEmpleado.value = Empleado.value.at(0).id_empleado;
            puesto_empleado.value = Empleado.value.at(0).nombre_puesto;
            rowsEmployee.value = [];
            for (let i = 0; i < Empleado.value.length; i++) {
              const element = {
                Nombre: Empleado.value[i].id,
                fecha: Empleado.value[i].fecha.slice(0, 10),
                hora_marcada: Empleado.value[i].hora_marcada,
                id: Empleado.value[i].id,
                id_empleado: Empleado.value[i].id_empleado,
                llegada: Empleado.value[i].llegada,
                nombre_puesto: Empleado.value[i].nombre_puesto,
              };
              rowsEmployee.value.push(element);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };

    // const puntuales = async () => {
    //   try {
    //     await axios({
    //       url: `/RR-HH/Asistencia/puntuales`,
    //       method: "get",
    //       responseType: "json",
    //     })
    //       .then((res) => {
    //         console.log(res.data.body);
    //         totalPuntuales.value = res.data.body.at(0).Total_puntuales;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // puntuales();

    // const inpuntuales = async () => {
    //   try {
    //     await axios({
    //       url: `/RR-HH/Asistencia/inpuntuales`,
    //       method: "get",
    //       responseType: "json",
    //     })
    //       .then((res) => {
    //         console.log(res.data.body);
    //         totalInpuntuales.value = res.data.body.at(0).Total_inpuntuales;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // inpuntuales();

    // const registrosTotales = async () => {
    //   try {
    //     await axios({
    //       url: `/RR-HH/Asistencia/`,
    //       method: "get",
    //       responseType: "json",
    //     })
    //       .then((res) => {
    //         console.log(res.data.body);
    //         totalRegistros.value = res.data.body.at(0).Total;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // registrosTotales();

    // const ausentes = async () => {
    //   try {
    //     await axios({
    //       url: `/RR-HH/Asistencia/injustificadas`,
    //       method: "get",
    //       responseType: "json",
    //     })
    //       .then((res) => {
    //         console.log(res.data.body);
    //         totalAusentes.value = res.data.body.at(0).Total_injustificadas;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // ausentes();

    const cambiarNombrePDF = (valor) => {
      nombrePDF.value = valor;
    };

    return {
      //-------------------------------------------
      puesto_empleado,
      seamless,
      //recien agregado-----------------------------------
      idEmpleado,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      edificioEmpleado,
      Empleado,
      Buscar,
      buscarEmpleado,

      rowsEmployee,
      columnsEmployee,
      //datos,
      //convertidor,
      cambiarNombrePDF,
      nombrePDF,
      edicion: ref(false),
      carousel: ref(false),
      slide: ref(1),
      manualTime: ref("19:00"),
      manualID: ref(0),
      manualDate: ref("2022/11/21"),
      totalAusentes,
      totalPuntuales,
      totalInpuntuales,
      totalRegistros,
      activarManual: ref(false),
      date: ref("2022/11/21"),
      edificio: ref(null),
      medium: ref(false),
      modalEmpleado: ref(false),
      options: ["B1", "B2", "ETC.."],
      btnMostrarResultBusqueda: ref(false),
      filter: ref(""),
      exportToPDF() {
        html2pdf(document.getElementById("informePDF"), {
          filename: nombrePDF.value + ".pdf",
          // filename: "../Downloads/" + nombrePDF.value + ".pdf",
        });
      },
      enviarCSV,
      traerInfoAsistencia,
      asistenciasTotales,
      asistenciasPuntuales,
      asistenciasInpuntuales,
      asistenciasInjustificadas,
      archivoCSV,
    };
  },
};
</script>

<style scoped>
.asisst-Cards {
  width: auto;
  max-width: 500px;
}
</style>
