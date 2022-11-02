<template>
  <q-page padding class="column items-center text-center">
    <div id="formulario-newUser" class="shadow-10">
      <span>Registro Usuario</span>
      <q-form @submit.prevent="guardarUsuario">
        <div class="row items-center text-center">
          <!-- col 1 -->
          <div class="col-4">
            <div class="row">
              <div class="col-6 q-pa-lg">
                <q-input
                  v-model="primerNombre"
                  text-center
                  label="Primer Nombre"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Ingresar primer nombre',
                  ]"
                />
                <q-input
                  class="q-mt-md"
                  v-model="primerApellido"
                  label="Primer Apellido"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Ingresar primer apellido',
                  ]"
                />
              </div>
              <div class="col-6 q-pa-lg">
                <q-input
                  v-model="segundoNombre"
                  label="Segundo Nombre"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Ingresar segundo nombre',
                  ]"
                />
                <q-input
                  class="q-mt-md"
                  v-model="segundoApellido"
                  label="Segundo Apellido"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Ingresar segundo apellido',
                  ]"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 q-pa-md">
                <q-input
                  v-model="fechaNacimiento"
                  type="date"
                  hint="Fecha de Nacimiento"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Ingresar fecha de nacimiento',
                  ]"
                />
                <q-input
                  class="q-mt-md"
                  v-model="telefono"
                  type="tel"
                  label="Telefono"
                  mask="(###) #### - ####"
                  unmasked-value
                  :rules="[
                    (val) => (val && val.length > 0) || 'Ingresar telefono',
                  ]"
                />
              </div>
            </div>
          </div>

          <!-- col 2 -->

          <div class="col-4">
            <div class="row">
              <div class="col-12 q-pa-lg">
                <q-input
                  v-model="email"
                  type="email"
                  label="Correo electronico"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Ingresar correo electronico',
                  ]"
                />
                <q-input
                  v-model="password"
                  label="Password"
                  class="q-mt-lg"
                  color="purple-12"
                  :type="isPwd ? 'password' : 'text'"
                  :rules="[
                    (val) => (val && val.length > 0) || 'Ingresar contraseña',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col-12 q-pa-md">
                <q-select
                  v-model="departamento"
                  hint=" "
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  :options="options"
                  label="Departamento"
                  emit-value
                  map-options
                  :rules="[
                    (val) => (val && val.length > 0) || 'Seleccione una opción',
                  ]"
                />
                <q-input
                  class="q-mt-sm"
                  v-model="direccion"
                  label="Dirección"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Ingresar primer nombre',
                  ]"
                />
              </div>
            </div>
          </div>
          <!-- col 3 -->
          <div class="col-4 q-pa-lg">
            <div class="row">
              <div class="col-12 q-pa-lg">
                <q-uploader v-model="img" style="max-width: 300px" />
                <q-btn
                  color="primary"
                  class="q-mt-lg"
                  type="submit"
                  label="Guardar"
                />
                <q-btn
                  color="primary"
                  @click="holas"
                  class="q-mt-lg q-ml-lg"
                  label="hola"
                />
              </div>
            </div>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    const newUser = ref("");
    const primerNombre = ref("");
    const segundoNombre = ref("");
    const primerApellido = ref("");
    const segundoApellido = ref("");
    const img = ref();
    const telefono = ref("");
    const fechaNacimiento = ref("");
    const email = ref("");
    const isPwd = ref(true);
    const password = ref("");
    const direccion = ref("");
    const departamento = ref(null);
    const hola = ref("");
    const options = [
      {
        label: "Administrador",
        value: "1",
      },
      {
        label: "PAA",
        value: "2",
      },
      {
        label: "Monitoreo",
        value: "3",
      },
      {
        label: "Planilla",
        value: "4",
      },
    ];

    const guardarUsuario = async () => {
      newUser.value = {
        ID_Usuario: "0",
        ID_Departamento: departamento,
        Nombre1: primerNombre,
        Nombre2: segundoNombre,
        Apellido1: primerApellido,
        Apellido2: segundoApellido,
        Fecha_Nacimiento: fechaNacimiento,
        Direccion: direccion,
        Imagen: " ",
        Email: email,
        Password: password,
        Telefono: telefono,
      };
      console.log(newUser.value);
      try {
        await axios({
          url: "http://localhost:4000/RR-HH/usuarios",
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
    const holas = () => {
      console.log(img.value);
    };
    return {
      newUser,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      img,
      telefono,
      fechaNacimiento,
      email,
      isPwd,
      password,
      direccion,
      departamento,
      options,
      guardarUsuario,
      hola,
      holas,
    };
  },
};
</script>

<style scoped>
#formulario-newUser {
  width: 1200px;
  height: 500px;
  border-radius: 25px;
  border: solid 1px violet;
  padding: 25px;
}
#hola {
  width: 150px;
  height: 50px;
  background-color: blue;
}
</style>
