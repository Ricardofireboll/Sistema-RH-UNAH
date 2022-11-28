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
                @click="(dialog = true) && (Edificio = 'B1')"
              >
                <q-item-section avatar>
                  <q-icon name="engineering" />
                </q-item-section>
                <q-item-section>B1</q-item-section>
                <span
                  v-if="pendientes !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes }}</span
                >
              </q-item>
              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="(dialog = true) && (Edificio = 'B2')"
              >
                <q-item-section avatar>
                  <q-icon name="engineering" />
                </q-item-section>
                <q-item-section>B2</q-item-section>
                <span
                  v-if="pendientes1 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes1 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="(dialog = true) && (Edificio = 'C1')"
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section>C1</q-item-section>
                <span
                  v-if="pendientes2 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes2 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="(dialog = true) && (Edificio = 'C2')"
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section>C2</q-item-section>
                <span
                  v-if="pendientes3 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes3 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="(dialog = true) && (Edificio = 'C3')"
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section>C3</q-item-section>
                <span
                  v-if="pendientes4 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes4 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="(dialog = true) && (Edificio = 'J1')"
              >
                <q-item-section avatar>
                  <q-icon name="spa" />
                </q-item-section>
                <q-item-section>J1</q-item-section>
                <span
                  v-if="pendientes5 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes5 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="norte"
                @click="(dialog = true) && (Edificio = '1847')"
              >
                <q-item-section avatar>
                  <q-icon name="fiber_new" />
                </q-item-section>
                <q-item-section>1847</q-item-section>
                <span
                  v-if="pendientes6 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes6 }}</span
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
                @click="(dialog = true) && (Edificio = 'D1')"
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section> D1</q-item-section>
                <span
                  v-if="pendientes7 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes7 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="(dialog = true) && (Edificio = 'F1')"
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section> F1</q-item-section>
                <span
                  v-if="pendientes8 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes8 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="(dialog = true) && (Edificio = 'A1')"
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section> A1</q-item-section>
                <span
                  v-if="pendientes9 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes9 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="(dialog = true) && (Edificio = 'A2')"
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section> A2</q-item-section>
                <span
                  v-if="pendientes10 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes10 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="(dialog = true) && (Edificio = 'E1')"
              >
                <q-item-section avatar>
                  <q-icon name="menu_book" />
                </q-item-section>
                <q-item-section>E1</q-item-section>
                <span
                  v-if="pendientes11 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes11 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="(dialog = true) && (Edificio = 'Canchas Voleibol')"
              >
                <q-item-section avatar>
                  <q-icon name="sports_volleyball" />
                </q-item-section>
                <q-item-section>Canchas Voleibol</q-item-section>
                <span
                  v-if="pendientes12 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes12 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="sur"
                @click="(dialog = true) && (Edificio = 'Canchas Basketball')"
              >
                <q-item-section avatar>
                  <q-icon name="sports_basketball" />
                </q-item-section>
                <q-item-section>Canchas Basketball</q-item-section>
                <span
                  v-if="pendientes13 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes13 }}</span
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
                @click="(dialog = true) && (Edificio = 'K1')"
              >
                <q-item-section avatar>
                  <q-icon name="satellite" />
                </q-item-section>
                <q-item-section>K1</q-item-section>
                <span
                  v-if="pendientes14 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes14 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="este"
                @click="(dialog = true) && (Edificio = 'K2')"
              >
                <q-item-section avatar>
                  <q-icon name="satellite" />
                </q-item-section>
                <q-item-section>K2</q-item-section>
                <span
                  v-if="pendientes15 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes15 }}</span
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
                @click="(dialog = true) && (Edificio = 'G1')"
              >
                <q-item-section avatar>
                  <q-icon name="biotech" />
                </q-item-section>
                <q-item-section>G1</q-item-section>
                <span
                  v-if="pendientes16 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes16 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="(dialog = true) && (Edificio = 'I1')"
              >
                <q-item-section avatar>
                  <q-icon name="biotech" />
                </q-item-section>
                <q-item-section>I1</q-item-section>
                <span
                  v-if="pendientes17 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes17 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="(dialog = true) && (Edificio = 'Edificio de Salud')"
              >
                <q-item-section avatar>
                  <q-icon name="medical_services" />
                </q-item-section>
                <q-item-section>Edificio de Salud</q-item-section>
                <span
                  v-if="pendientes18 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes18 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="(dialog = true) && (Edificio = 'Estadio de atletismo')"
              >
                <q-item-section avatar>
                  <q-icon name="directions_run" />
                </q-item-section>
                <q-item-section>Estadio de atletismo</q-item-section>
                <span
                  v-if="pendientes19 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes19 }}</span
                >
              </q-item>

              <q-item
                clickable
                v-ripple
                exact
                class="oeste"
                @click="(dialog = true) && (Edificio = 'Polideportivo')"
              >
                <q-item-section avatar>
                  <q-icon name="sports_handball" />
                </q-item-section>
                <q-item-section>Polideportivo</q-item-section>
                <span
                  v-if="pendientes20 !== 0"
                  style="font-size: 0.7rem"
                  class="text-overline text-warning"
                  >Pendientes: {{ pendientes20 }}</span
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
        <q-table
          title="Pendientes"
          :rows="rows"
          :columns="columns"
          row-key="name"
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
          @click="seamlessT = true"
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
          @click="seamlessT = true"
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

const rows = [
  {
    name: "Carlos Cruz",
    aula: "201",
    clase: "Calculo 2",
    seccion: "1800",
    id: 12,
  },
  {
    name: "Arnulfo Moreno",
    aula: "308",
    clase: "Calculo 1",
    seccion: "1500",
    id: 15,
  },
];

const timeStamp = Date.now();
const hoy = date.formatDate(timeStamp, "YYYY/MM/DD");
export default {
  setup() {
    return {
      selected: ref([]),
      columns,
      rows,
      filter: ref(""),
      estado: ref(null),
      numero: ref(10),
      pendientes: ref(2),
      pendientes1: ref(2),
      pendientes2: ref(2),
      pendientes3: ref(2),
      pendientes4: ref(2),
      pendientes5: ref(4),
      pendientes6: ref(2),
      pendientes7: ref(2),
      pendientes8: ref(0),
      pendientes9: ref(2),
      pendientes10: ref(2),
      pendientes11: ref(2),
      pendientes12: ref(2),
      pendientes13: ref(6),
      pendientes14: ref(2),
      pendientes15: ref(2),
      pendientes16: ref(9),
      pendientes17: ref(5),
      pendientes18: ref(2),
      pendientes19: ref(2),
      pendientes20: ref(2),
      date: ref(hoy),
      dialog: ref(false),
      maximizedToggle: ref(true),
      confirmP: ref(false),
      confirmA: ref(false),
      seamlessT: ref(false),
      seamlessF: ref(false),
      Edificio: ref(""),
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
