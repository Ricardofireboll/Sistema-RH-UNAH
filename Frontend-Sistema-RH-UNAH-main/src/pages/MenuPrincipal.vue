<template>
  <div
    v-if="false"
    class="card-group d-flex justify-content-center"
    style="padding-top: 10rem; padding-left: 5rem; padding-right: 5rem"
  >
    <div class="row">
      <div class="col">
        <a to="/BusquedaEmpleado">
          <div class="card w-100">
            <img
              src="../assets/img/gestion-empleados.png"
              class="img-fluid"
              style="
                width: 75%;
                display: block;
                margin: auto;
                padding-top: 1rem;
              "
            />
            <div
              class="card-body justify-content-center"
              style="text-align: center"
            >
              <label style="color: black">Gestionar empleados</label>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a to="/Asistencia">
          <div class="card w-100">
            <img
              src="../assets/img/asistencia.png"
              class="img-fluid"
              style="
                width: 75%;
                display: block;
                margin: auto;
                padding-top: 1rem;
              "
            />
            <div
              class="card-body justify-content-center"
              style="text-align: center"
            >
              <label style="color: black">Asistencia</label>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a to="/Monitoreo">
          <div class="card w-100">
            <img
              src="../assets/img/monitoreo.png"
              class="img-fluid"
              style="
                width: 75%;
                display: block;
                margin: auto;
                padding-top: 1rem;
              "
            />
            <div
              class="card-body justify-content-center"
              style="text-align: center"
            >
              <label style="color: black">Monitoreo</label>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a to="PAA1">
          <div class="card w-100">
            <img
              src="../assets/img/paa-logo.png"
              class="img-fluid"
              style="
                width: 75%;
                display: block;
                margin: auto;
                padding-top: 1rem;
              "
            />
            <div
              class="card-body justify-content-center"
              style="text-align: center"
            >
              <label style="color: black">PAA</label>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="div-center q-ma-xl">
    <q-card class="row div-center q-pa-sm">
      <q-card class="menu-cards q-ma-md">
        <q-img src="../assets/img/gestion-empleados.png" class="images" />

        <q-card-section>
          <div class="text-overline text-orange-9">Modulo 1</div>
          <div
            class="text-h6 q-mt-sm q-mb-xs"
            style="font-family: 'Microsoft JhengHei'"
          >
            Gestion de Empleados
          </div>
          <div class="text-caption text-grey" style="text-align: justify">
            Controla y administra la informacion personal de los empleados,
            contando con busquedas personalizadas y de facil manejo
          </div>
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn
            color="primary"
            round
            icon="arrow_forward"
            to="BusquedaEmpleado"
          />
        </q-card-actions>
      </q-card>
      <q-card class="menu-cards q-ma-md">
        <q-img src="../assets/img/asistencia.png" class="images" />

        <q-card-section>
          <div class="text-overline text-orange-9">Modulo 2</div>
          <div
            class="text-h6 q-mt-sm q-mb-xs"
            style="font-family: 'Microsoft JhengHei'"
          >
            Asistencia
          </div>
          <div class="text-caption text-grey" style="text-align: justify">
            Supervisa y administra la informacion de asistencia para todos los
            empleados, con funcionalidades como agregacion de archivos .csv y
            reporteria.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn color="primary" round icon="arrow_forward" to="asistencia" />
        </q-card-actions>
      </q-card>
      <q-card class="menu-cards q-ma-md">
        <q-img src="../assets/img/monitoreo.png" class="images" />

        <q-card-section>
          <div class="text-overline text-orange-9">Modulo 3</div>
          <div
            class="text-h6 q-mt-sm q-mb-xs"
            style="font-family: 'Microsoft JhengHei'"
          >
            Monitoreo
          </div>
          <div class="text-caption text-grey" style="text-align: justify">
            Supervisa la asistencia de los docentes por medio de marcaciones que
            se registran en tiempo real, con interfaz optimizada para telefonos
            y tablets.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn color="primary" round icon="arrow_forward" to="monitoreo" />
        </q-card-actions>
      </q-card>
      <q-card class="menu-cards q-ma-md">
        <q-img src="../assets/img/paa-logo.png" class="images" />

        <q-card-section>
          <div class="text-overline text-orange-9">Modulo 4</div>
          <div
            class="text-h6 q-mt-sm q-mb-xs"
            style="font-family: 'Microsoft JhengHei'"
          >
            PAA
          </div>
          <div class="text-caption text-grey" style="text-align: justify">
            Registra y visualiza las participaciones de empleados en los
            procesos PAA hasta la fecha, permitiendote generar constancias de
            participacion personalizadas.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn color="primary" round icon="arrow_forward" to="PAA1" />
        </q-card-actions>
      </q-card>
    </q-card>
  </div>
</template>

<script></script>

<style scoped>
.card {
  margin: 0.5rem;
  justify-content: center;
  box-sizing: border-box;
  font-family: "Microsoft JhengHei", serif;
  background-color: white;
  border-radius: 25px;
}
.card:hover {
  box-shadow: 5px 6px 6px 2px #0000009e;
  transition: 0.5s;
  transform: scale(1.05);
}

.menu-cards {
  width: 100%;
  max-width: 280px;
}
.div-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.images {
  width: 280px;
  max-width: 280px;
}
</style>
