<template>
  <div
    class="q-ma-md col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
  >
    <div
      class="q-ma-md col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
    >
      <q-card>
        <q-card-section class="text-overline">ZONAS</q-card-section>
        <q-card-section>
          <q-list bordered class="rounded-borders" style="max-width: 100%">
            <q-expansion-item
              expand-separator
              icon="location_on"
              label="Norte"
              header-class="text-green"
            >
              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="
                  (dialog = true) && (Edificio = 'B1') && obtenerMonitoreo('B1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="engineering" />
                </q-item-section>
                <q-item-section>B1</q-item-section>
                <span
                  v-if="pendientesB1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesB1 }}</span
                >
              </q-item>
              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="
                  (dialog = true) && (Edificio = 'B2') && obtenerMonitoreo('B2')
                "
              >
                <q-item-section avatar>
                  <q-icon name="engineering" />
                </q-item-section>
                <q-item-section>B2</q-item-section>
                <span
                  v-if="pendientesB2 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesB2 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="
                  (dialog = true) && (Edificio = 'C1') && obtenerMonitoreo('C1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section>C1</q-item-section>
                <span
                  v-if="pendientesC1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesC1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="
                  (dialog = true) && (Edificio = 'C2') && obtenerMonitoreo('C2')
                "
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section>C2</q-item-section>
                <span
                  v-if="pendientesC2 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesC2 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="
                  (dialog = true) && (Edificio = 'C3') && obtenerMonitoreo('C3')
                "
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section>C3</q-item-section>
                <span
                  v-if="pendientesC3 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesC3 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="
                  (dialog = true) && (Edificio = 'J1') && obtenerMonitoreo('J1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="spa" />
                </q-item-section>
                <q-item-section>J1</q-item-section>
                <span
                  v-if="pendientesJ1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesJ1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="
                  (dialog = true) &&
                    (Edificio = '1847') &&
                    obtenerMonitoreo('1847')
                "
              >
                <q-item-section avatar>
                  <q-icon name="fiber_new" />
                </q-item-section>
                <q-item-section>1847</q-item-section>
                <span
                  v-if="pendientes1847 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes1847 }}</span
                >
              </q-item>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="location_on"
              label="Sur"
              header-class="text-blue"
              caption=""
            >
              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="
                  (dialog = true) && (Edificio = 'D1') && obtenerMonitoreo('D1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section> D1</q-item-section>
                <span
                  v-if="pendientesD1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesD1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="
                  (dialog = true) && (Edificio = 'F1') && obtenerMonitoreo('F1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section> F1</q-item-section>
                <span
                  v-if="pendientesF1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesF1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="
                  (dialog = true) && (Edificio = 'A1') && obtenerMonitoreo('A1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section> A1</q-item-section>
                <span
                  v-if="pendientesA1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesA1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="
                  (dialog = true) && (Edificio = 'A2') && obtenerMonitoreo('A2')
                "
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section> A2</q-item-section>
                <span
                  v-if="pendientesA2 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesA2 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="
                  (dialog = true) && (Edificio = 'E1') && obtenerMonitoreo('E1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section>E1</q-item-section>
                <span
                  v-if="pendientesE1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesE1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="
                  (dialog = true) &&
                    (Edificio = 'Canchas Voleibol') &&
                    obtenerMonitoreo('Canchas Voleibol')
                "
              >
                <q-item-section avatar>
                  <q-icon name="sports_volleyball" />
                </q-item-section>
                <q-item-section>Canchas Voleibol</q-item-section>
                <span
                  v-if="pendientesCanchasVoleibol !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesCanchasVoleibol }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="
                  (dialog = true) &&
                    (Edificio = 'Canchas Basketball') &&
                    obtenerMonitoreo('Canchas Basketball')
                "
              >
                <q-item-section avatar>
                  <q-icon name="sports_basketball" />
                </q-item-section>
                <q-item-section>Canchas Basketball</q-item-section>
                <span
                  v-if="pendientesCanchasBasketball !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesCanchasBasketball }}</span
                >
              </q-item>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="location_on"
              label="Este"
              header-class="text-purple"
            >
              <q-item
                clickable
                v-ripple
                exact
                class="este"
                @click="
                  (dialog = true) && (Edificio = 'K1') && obtenerMonitoreo('K1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="satellite" />
                </q-item-section>
                <q-item-section>K1</q-item-section>
                <span
                  v-if="pendientesK1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesK1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="este"
                @click="
                  (dialog = true) && (Edificio = 'K2') && obtenerMonitoreo('K2')
                "
              >
                <q-item-section avatar>
                  <q-icon name="satellite" />
                </q-item-section>
                <q-item-section>K2</q-item-section>
                <span
                  v-if="pendientesK2 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesK2 }}</span
                >
              </q-item>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="location_on"
              label="Oeste"
              header-class="text-pink"
            >
              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="
                  (dialog = true) && (Edificio = 'G1') && obtenerMonitoreo('G1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="biotech" />
                </q-item-section>
                <q-item-section>G1</q-item-section>
                <span
                  v-if="pendientesG1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesG1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="
                  (dialog = true) && (Edificio = 'I1') && obtenerMonitoreo('I1')
                "
              >
                <q-item-section avatar>
                  <q-icon name="biotech" />
                </q-item-section>
                <q-item-section>I1</q-item-section>
                <span
                  v-if="pendientesI1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesI1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="
                  (dialog = true) &&
                    (Edificio = 'Edificio de Salud') &&
                    obtenerMonitoreo('Edificio de Salud')
                "
              >
                <q-item-section avatar>
                  <q-icon name="medical_services" />
                </q-item-section>
                <q-item-section>Edificio de Salud</q-item-section>
                <span
                  v-if="pendientesEdificioSalud !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesEdificioSalud }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="
                  (dialog = true) &&
                    (Edificio = 'Estadio de atletismo') &&
                    obtenerMonitoreo('Estadio de atletismo')
                "
              >
                <q-item-section avatar>
                  <q-icon name="directions_run" />
                </q-item-section>
                <q-item-section>Estadio de atletismo</q-item-section>
                <span
                  v-if="pendientesEstadioAtletismo !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesEstadioAtletismo }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="
                  (dialog = true) &&
                    (Edificio = 'Polideportivo') &&
                    obtenerMonitoreo('Polideportivo')
                "
              >
                <q-item-section avatar>
                  <q-icon name="sports_handball" />
                </q-item-section>
                <q-item-section>Polideportivo</q-item-section>
                <span
                  v-if="pendientesPolideportivo !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientesPolideportivo }}</span
                >
              </q-item>
            </q-expansion-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
    <q-responsive
      :ratio="16 / 9"
      class="q-ma-md col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
    >
      <q-card class="q-pa-md" style="width: 1200px; max-width: 100%">
        <q-img src="../assets/mapita_retocado.png" />
      </q-card>
    </q-responsive>
  </div>

  <!--                  CUADRO DE PENDIENTES                    -->
  <q-dialog
    v-model="dialog"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-white">
      <q-bar>
        <q-space />

        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="q-mx-sm text-h6">Marcar como:</div>
        <div class="q-mx-sm q-py-md">
          <q-btn
            :disable="selected.length === 0"
            rounded
            label="Presentes"
            class="bg-positive text-white q-mr-md"
            @click="confirmP = true"
          />
          <q-btn
            :disable="selected.length === 0"
            rounded
            label="Ausentes"
            class="bg-negative text-white"
            @click="confirmA = true"
          />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-mx-sm text-h6 text-center">Edificio: {{ Edificio }}</div>
        <q-table
          title="Pendientes"
          :rows="rows"
          :columns="columns"
          row-key="id"
          selection="multiple"
          v-model:selected="selected"
          :filter="filter"
          grid
          hide-header
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:item="props">
            <div
              class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
              :style="props.selected ? 'transform: scale(0.95);' : ''"
            >
              <q-card
                :class="props.selected ? 'bg-grey-2' : 'bg-amber-14 text-white'"
              >
                <q-card-section>
                  <q-checkbox
                    dense
                    v-model="props.selected"
                    :label="props.row.name"
                  />
                </q-card-section>
                <q-separator />
                <q-list dense>
                  <q-item
                    v-for="col in props.cols.filter(
                      (col) => col.name !== 'desc'
                    )"
                    :key="col.name"
                  >
                    <q-item-section>
                      <q-item-label>{{ col.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label caption>{{ col.value }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>
            </div>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-dialog>

  <!--                 CONFIRMAR PRESENCIA                    -->
  <q-dialog v-model="confirmP" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="save" color="primary" text-color="white" />
        <span class="q-ml-sm"
          >Seguro que desea mandar {{ selected.length }} docentes con el
          siguiente estado de <q-badge color="green"> presente </q-badge>?
        </span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="negative" v-close-popup />
        <q-btn
          flat
          label="Confirmar"
          @click="enviarEstado('Presente')"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--                  CONFIRMAR AUSENCIA                   -->
  <q-dialog v-model="confirmA" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="save" color="primary" text-color="white" />
        <span class="q-ml-sm"
          >Seguro que desea mandar {{ selected.length }} docentes con el
          siguiente estado de <q-badge color="red"> ausente </q-badge>?
        </span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="negative" v-close-popup />
        <q-btn
          flat
          label="Confirmar"
          @click="enviarEstado('Ausente')"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--                  GAURDADO CORRECTAMENTE                    -->
  <q-dialog v-model="seamlessT" seamless position="bottom">
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

  <!--                  ERROR AL GUARDAR                   -->
  <q-dialog v-model="seamlessF" seamless position="bottom">
    <q-card style="width: 350px">
      <q-linear-progress :value="1" style="color: #e0144c" />

      <q-card-section class="row items-center no-wrap">
        <div>
          <div class="text-weight-bold">Error</div>
          <div class="text-grey">No se pudieron guardar los datos</div>
        </div>

        <q-space />

        <q-btn
          flat
          round
          icon="error_outline"
          size="xl"
          style="color: #e0144c"
        />

        <q-btn flat round icon="close" v-close-popup />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { date } from "quasar";
import axios from "axios";

const columns = [
  {
    name: "desc",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "id", label: "ID", field: "id" },
  {
    name: "aula",
    align: "center",
    label: "Aula",
    field: "aula",
    sortable: true,
  },
  { name: "clase", label: "Clase", field: "clase", sortable: true },
  { name: "seccion", label: "Seccion", field: "seccion" },
];

const rows = ref([]);
// const rows = [
//   {
//     name: "Carlos Cruz",
//     aula: "201",
//     clase: "Calculo 2",
//     seccion: "1800",
//     id: 12,
//   },
//   {
//     name: "Arnulfo Moren",
//     aula: "308",
//     clase: "Calculo 2",
//     seccion: "1500",
//     id: 15,
//   },
//   {
//     name: "Arnulfo Moreno",
//     aula: "308",
//     clase: "Calculo 2",
//     seccion: "1500",
//     id: 1,
//   },
//   {
//     name: "Arnulfo Moreno",
//     aula: "308",
//     clase: "Calculo 1",
//     seccion: "1500",
//     id: 15,
//   },
// ];

const timeStamp = Date.now();
const hoy = date.formatDate(timeStamp, "YYYY/MM/DD");
const year = date.formatDate(timeStamp, "YYYY");
const hora = date.formatDate(timeStamp, "hh:mm:ss ");
export default {
  setup() {
    const seamlessT = ref(false);
    const Monitoreo = ref([]);
    const Edificio = ref("");
    const selected = ref([]);
    const pendientesB1 = ref("");
    const pendientesB2 = ref("");
    const pendientesC1 = ref("");
    const pendientesC2 = ref("");
    const pendientesC3 = ref("");
    const pendientesJ1 = ref("");
    const pendientes1847 = ref("");
    const pendientesD1 = ref("");
    const pendientesF1 = ref("");
    const pendientesA1 = ref("");
    const pendientesA2 = ref("");
    const pendientesE1 = ref("");
    const pendientesCanchasVoleibol = ref("");
    const pendientesCanchasBasketball = ref("");
    const pendientesK1 = ref("");
    const pendientesK2 = ref("");
    const pendientesG1 = ref("");
    const pendientesI1 = ref("");
    const pendientesEdificioSalud = ref("");
    const pendientesEstadioAtletismo = ref("");
    const pendientesPolideportivo = ref("");

    const obtenerMonitoreo = async (edificio) => {
      sessionStorage.setItem("Edificio", edificio);
      Edificio.value = sessionStorage.getItem("Edificio");
      console.log("Edificio:  " + Edificio.value);
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/${edificio}`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            Monitoreo.value = res.data.body;
            pendientesB1.value = res.data.body.length;
            rows.value = [];
            for (let i = 0; i < Monitoreo.value.length; i++) {
              const element = {
                name: Monitoreo.value[i].nombre_docente,
                aula: Monitoreo.value[i].aula,
                clase: Monitoreo.value[i].nombre_asignatura,
                seccion: Monitoreo.value[i].seccion,
                id: Monitoreo.value[i].id_monitoreo,
              };
              rows.value.push(element);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const enviarEstado = async (estado) => {
      let stringJSON = JSON.stringify(selected.value);
      let json = JSON.parse(stringJSON);
      console.log(json);
      // console.log("Holis" + JSON.stringify(selected.value));
      // console.log(hoy);
      // console.log(year);
      // console.log(hora);
      for (let i = 0; i < json.length; i++) {
        try {
          await axios({
            url: `/RR-HH/Monitoreo/Estado/?id=${json[i].id}&estado=${estado}&hora=11:00:00`,
            method: "put",
            responseType: "json",
          })
            .then((res) => {})
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      }
      obtenerMonitoreo(Edificio.value);
      seamlessT.value = true;
      selected.value = [];
      cantidadPendientes();
    };
    const cantidadPendientes = async () => {
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/B1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesB1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/B2`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesB2.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/C1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesC1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/C2`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesC2.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/C3`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesC3.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/J1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesJ1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/1847`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientes1847.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/D1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesD1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/F1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesF1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/A1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesA1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/A2`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesA2.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/E1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesE1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/Canchas Voleibol`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesCanchasVoleibol.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/Canchas Basketball`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesCanchasBasketball.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/K1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesK1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/K2`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesK2.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/G1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesG1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/I1`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesI1.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/Edificio de Salud`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesEdificioSalud.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/Estadio de Atletismo`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesEstadioAtletismo.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      try {
        await axios({
          url: `/RR-HH/Monitoreo/Edificio/Polideportivo`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            pendientesPolideportivo.value = res.data.body.length;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    cantidadPendientes();
    return {
      selected,
      columns,
      rows,
      filter: ref(""),
      estado: ref(null),
      numero: ref(10),
      pendientesB1,
      pendientesB2,
      pendientesC1,
      pendientesC2,
      pendientesC3,
      pendientesJ1,
      pendientes1847,
      pendientesD1,
      pendientesF1,
      pendientesA1,
      pendientesA2,
      pendientesE1,
      pendientesCanchasVoleibol,
      pendientesCanchasBasketball,
      pendientesK1,
      pendientesK2,
      pendientesG1,
      pendientesI1,
      pendientesEdificioSalud,
      pendientesEstadioAtletismo,
      pendientesPolideportivo,
      date: ref(hoy),
      dialog: ref(false),
      maximizedToggle: ref(true),
      confirmP: ref(false),
      confirmA: ref(false),
      seamlessT,
      seamlessF: ref(false),
      Edificio: ref(""),

      /***********************************/
      Monitoreo,
      obtenerMonitoreo,
      enviarEstado,
      cantidadPendientes,
    };
  },
};
</script>

<style scoped>
.norte:hover {
  color: white;
  background: #82cd47;
}
.sur:hover {
  color: white;
  background: #5f9df7;
}

.este:hover {
  color: white;
  background: mediumpurple;
}

.oeste:hover {
  color: white;
  background: lightpink;
}

/* @media {
} */

.grid-style-transition {
  transition: transform 0.28s, background-color 0.28s;
}
</style>
