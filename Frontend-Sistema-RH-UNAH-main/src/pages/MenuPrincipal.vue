<template>
  <div
    class="card-group d-flex justify-content-center"
    style="
      padding-top: 10rem;
      padding-left: 5rem;
      padding-right: 5rem;
      background-color: rgb(255, 255, 255);
    "
  >
    <div class="row">
      <div class="col">
        <a href="/user/BusquedaEmpleado">
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
        <a href="#">
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
        <a href="#">
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
        <a href="/user/PAA">
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
</template>

<script></script>

<style>
.card {
  margin: 0.5rem;
  justify-content: center;
  box-sizing: border-box;
  font-family: "Microsoft JhengHei", serif;
}
.card:hover {
  box-shadow: 5px 6px 6px 2px #e9ecef;
  transition: 0.5s;
  transform: scale(1.05);
}
</style>
