<template>
  <div
    class="card-group d-flex justify-content-center"
    style="padding-top: 10rem; padding-left: 5rem; padding-right: 5rem"
  >
    <div class="row">
      <div class="col">
        <a href="admin/registUser">
          <div class="card w-100">
            <img
              src="../assets/img/registro.png"
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
              <label style="color: black">Registrar usuario</label>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a href="#">
          <div class="card w-100">
            <img
              src="../assets/img/roles.png"
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
              <label style="color: black">Administrar roles</label>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a href="#">
          <div class="card w-100">
            <img
              src="../assets/img/bell.png"
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
              <label style="color: black">Notificaciones</label>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/menu">
          <div class="card w-100">
            <img
              src="../assets/img/homepage.png"
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
              <label style="color: black">Menu Principal</label>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

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
