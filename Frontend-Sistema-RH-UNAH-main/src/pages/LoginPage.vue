<template>
  <div id="div-principal" class="row container-fluid">
    <div id="div-contenido" class="col-7">
      <img
        class="img-cuadritos"
        style="top: 15%; right: 40%; width: 50px"
        src="../assets/img/Cuadritos-1.png"
        alt="Error"
      />
      <img
        class="img-cuadritos"
        style="top: 56%; right: 70%; width: 130px"
        src="../assets/img/Cuadritos-1.png"
        alt="Error"
      />
      <img
        class="img-cuadritos"
        style="bottom: 0%; right: 10%; width: 60px"
        src="../assets/img/Cuadritos-2.png"
        alt="Error"
      />
      <img
        class="img-cuadritos"
        style="top: 5%; right: 55%; width: 70px"
        src="../assets/img/Cuadritos-3.png"
        alt="Error"
      />
      <img
        class="img-cuadritos"
        style="top: 58%; right: 10%; width: 70px"
        src="../assets/img/Cuadritos-3.png"
        alt="Error"
      />
      <img
        class="img-cuadritos"
        style="bottom: 2%; left: 5%; width: 30px"
        src="../assets/img/Cuadritos-3.png"
        alt="Error"
      />
      <img
        class="img-cuadritos"
        style="top: 40%; right: 35%; width: 130px"
        src="../assets/img/Cuadritos-4.png"
        alt="Error"
      />
      <img id="img-lucem" src="../assets/img/LUCEM-ASPICIO.png" alt="Error" />
      <img id="img-logo-unah" src="../assets/img/log0-unah.png" alt="Error" />
      <div id="marco-yellow">
        <img id="img-admin" src="../assets/img/img-admin.jpg" alt="Error" />
      </div>
      <p id="texto-contenido">
        Somos la unidad especialista en generar valor agregado, consultores,
        promotores del cambio institucional; fomentando una nueva cultura
        organizacional con sentido de pertenencia, garantizando excelencia en la
        calidad de servicio, ambiente laboral saludable, incorporando,
        manteniendo y reteniendo talento humano que cumpla las expectativas
        institucionales y personales.
      </p>
    </div>
    <!-- Login -->
    <div id="div-login" class="col-5">
      <img id="img-SEDP" src="../assets/img/SDPE.png" alt="Error" />
      <q-form padding @submit.prevent="prosesarFormulario">
        <q-input
          class="q-mt-lg"
          label="Email"
          v-model="email"
          :rules="[(val) => (val && val.length > 0) || 'Ingresar correo']"
        />
        <q-input
          v-model="password"
          label="Password"
          class="q-mt-lg"
          color="purple-12"
          :type="isPwd ? 'password' : 'text'"
          :rules="[(val) => (val && val.length > 0) || 'Ingresar contrase??a']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div class="d-flex justify-content-between align-items-center"></div>
        <q-btn
          color="primary"
          class="full-width q-mt-xl"
          label="Iniciar Sesi??n "
          type="submit"
          padding="15px"
        />
      </q-form>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const isPwd = ref(true);
    const prosesarFormulario = () => {
      if (!email.value.trim() || !password.value.trim()) {
        console.log("campos vacios");
        return;
      } else {
        try {
          axios({
            url: "http://localhost:4000/RR-HH/login",
            method: "post",
            responseType: "json",
            data: {
              Email: email.value,
              Password: password.value,
            },
          })
            .then((res) => {
              console.log(res.data);
              if (
                res.data.body.validacion == "Usuario y contrase??a verificada"
              ) {
                if (res.data.body.datos.user.ID_Departamento == 1) {
                  router.push("/admin");
                } else {
                  router.push("/user");
                }
              } else if (
                res.data.body.validacion == "Usuario y contrase??a invalidos"
              ) {
                $q.notify("Usuario y contrase??a incorrectos");
              } else {
                $q.notify("No se puede conectar con el servidor");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      }
    };
    return {
      email,
      password,
      prosesarFormulario,
      isPwd,
    };
  },
};
</script>

<style>
#div-principal {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

#div-contenido {
  height: 100vh;
  background-color: #3379d6;
  position: relative;
}

#img-lucem {
  width: 300px;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.3;
}

#img-logo-unah {
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
}

#marco-yellow {
  width: 390px;
  height: 280px;
  position: absolute;
  background-color: #ffbf00;
  border-radius: 25px;
  top: 23%;
  left: -3%;
}

#img-admin {
  width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#texto-contenido {
  font-family: "Calistoga";
  font-size: 15px;
  text-align: justify;
  position: absolute;
  padding: 25px;
  bottom: 0px;
  color: white;
}

#div-login {
  height: 100vh;
  background-color: rgb(255, 255, 255);
  position: relative;
  padding: 60px;
  text-align: center;
}

#img-SEDP {
  width: 270px;
  margin-bottom: 70px;
}
.img-cuadritos {
  position: absolute;
}
</style>
