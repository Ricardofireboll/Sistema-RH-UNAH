<template>
  <q-layout view="hHh lpR fFf" v-for="(user, i) in usuario" :key="i">
    <q-header
      elevated
      class="text-white wave wave1"
      style="height: 50px; background-color: #002e94"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>RH-UNAH</q-toolbar-title>
        <q-toolbar-title id="holis"
          ><span
            style="font-family: 'Leelawadee UI'; font-size: 1rem"
            class="q-mr-sm"
            >{{
              user.Nombre1 +
              " " +
              user.Nombre2 +
              " " +
              user.Apellido1 +
              " " +
              user.Apellido2
            }}</span
          >
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-btn-dropdown class="q-ml-sm" color="primary">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label
                    ><q-icon class="q-mr-sm" name="settings" />
                    Configuraciones</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label
                    ><q-icon class="q-mr-sm" name="help" /> Ayuda</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="closedSetion">
                <q-item-section>
                  <q-item-label
                    >Cerrar sesión
                    <q-icon
                      class="q-ml-sm"
                      size="1rem"
                      name="logout"
                      color="negative"
                  /></q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="desktop"
      elevated
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
        :thumb-style="thumbStyle"
      >
        <q-list padding>
          <div
            class="text-subtitle3 q-pa-sm text-overline q-pl-md"
            style="font-size: 0.7rem"
          >
            Principal
          </div>
          <q-item
            clickable
            v-ripple
            to="user"
            active-class="my-menu-link"
            class="menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="admin"
            active-class="my-menu-link-admin"
            class="menu-link-admin"
            exact
          >
            <q-item-section avatar>
              <q-icon name="admin_panel_settings" />
            </q-item-section>

            <q-item-section> Administrador </q-item-section>
          </q-item>

          <q-separator />

          <div
            class="text-subtitle3 q-pa-sm text-overline q-pl-md"
            style="font-size: 0.7rem"
          >
            Funcionalidades
          </div>

          <q-expansion-item
            expand-separator
            icon="manage_accounts"
            label="Funciones de administrador"
            caption=""
            default-closed
            class="text-subtitle3 q-pa-sm"
          >
            <q-item
              clickable
              v-ripple
              to="registUser"
              active-class="my-menu-link-admin"
              class="menu-link-admin"
              exact
            >
              <q-item-section avatar>
                <q-icon name="control_point" />
              </q-item-section>

              <q-item-section> Crear usuario </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              to="roles"
              active-class="my-menu-link-admin"
              class="menu-link-admin"
              exact
            >
              <q-item-section avatar>
                <q-icon name="groups" />
              </q-item-section>

              <q-item-section> Administrar roles </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="schema"
            label="Modulos"
            caption=""
            default-closed
            class="text-subtitle3 q-pa-sm"
          >
            <q-item
              v-if="false"
              clickable
              v-ripple
              to="perfilUser"
              active-class="my-menu-link"
              class="menu-link"
              exact
            >
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section> Perfil </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              to="PAA1"
              active-class="my-menu-link"
              class="menu-link"
              exact
            >
              <q-item-section avatar>
                <q-icon name="text_snippet" />
              </q-item-section>

              <q-item-section> PAA</q-item-section>
            </q-item>

            <q-expansion-item
              expand-separator
              icon="people"
              label="Empleados"
              caption=""
              default-closed
            >
              <q-item
                clickable
                v-ripple
                to="BusquedaEmpleado"
                active-class="my-menu-link"
                exact
                class="q-pl-xl menu-link"
              >
                <q-item-section avatar>
                  <q-icon name="search" />
                </q-item-section>

                <q-item-section> Busqueda </q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                to="GestorEmpleado"
                active-class="my-menu-link"
                exact
                class="q-pl-xl menu-link"
              >
                <q-item-section avatar>
                  <q-icon name="edit" />
                </q-item-section>

                <q-item-section> Gestion </q-item-section>
              </q-item>
            </q-expansion-item>

            <q-item
              clickable
              v-ripple
              to="Asistencia"
              active-class="my-menu-link"
              class="menu-link"
              exact
            >
              <q-item-section avatar>
                <q-icon name="access_time" />
              </q-item-section>

              <q-item-section> Asistencia </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              to="Monitoreo"
              active-class="my-menu-link"
              class="menu-link q-mb-xl"
              exact
            >
              <q-item-section avatar>
                <q-icon name="remove_red_eye" />
              </q-item-section>

              <q-item-section> Monitoreo </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="../assets/img/fondo_unah.png"
        style="height: 160px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">
            {{ user.Nombre1 + " " + user.Apellido1 }}
          </div>
          <div>
            {{ user.Email }}
            <a href="/perfilUser">
              <q-icon
                color="white"
                id="setting"
                style="float: right"
                size="1.3rem"
                active-class="my-menu-link"
                to=""
                name="settings"
              />
            </a>
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const usuarioActual = ref("");
    var usuario = ref([]);
    const user = async () => {
      try {
        usuarioActual.value = sessionStorage.getItem("User");
        await axios({
          url: `/RR-HH/usuarios/${usuarioActual.value}`,
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            usuario.value = res.data.body;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    user();
    return {
      thumbStyle: {
        right: "0px",
        borderRadius: "10px",
        backgroundColor: "#ffbf00",
        width: "8px",
        opacity: "0.75",
      },

      usuarioActual,
      usuario,
      user,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      closedSetion() {
        sessionStorage.removeItem("User");
        router.push("/");
      },
    };
  },
};
</script>

<style lang="scss">
.my-menu-link {
  color: white;
  background: #ffbf00;
  border-radius: 10px;
  margin: 1rem;
}
.menu-link:hover {
  color: white;
  background: #ffbf00;
  border-radius: 10px;
  margin: 1rem;
  transition: 0.4s;
  transition-delay: 0.1s;
}
.my-menu-link-admin {
  color: white;
  background: #002e94;
  border-radius: 10px;
  margin: 1rem;
  transition: 0.4s;
  transition-delay: 0.1s;
}

.menu-link-admin:hover {
  color: white;
  background: #002e94;
  border-radius: 10px;
  margin: 1rem;
  transition: 0.4s;
  transition-delay: 0.1s;
}

#holis {
  position: absolute;
  right: 10px;
}

#setting:hover {
  transition: 0.3s;
  transform: scale(1.1);
}

.wave {
  background: url("../assets/wavey.png");
}

.wave.wave1 {
  animation: animate 120s linear infinite;
  color: #2f855a;
}
@keyframes animate {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1000px;
  }
}
</style>
