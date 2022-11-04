<template>
  <q-layout view="hHh lpR fFf" v-for="(user, i) in usuario" :key="i">
    <q-header elevated class="bg-primary text-white" style="height: 50px">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Departamento de Efectividad</q-toolbar-title>
        <q-toolbar-title id="holis"
          ><span class="q-mr-sm">{{
            user.Nombre1 +
            " " +
            user.Nombre2 +
            " " +
            user.Apellido1 +
            " " +
            user.Apellido2
          }}</span>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-btn-dropdown class="q-ml-sm" color="primary">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Configuraciones </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Ayuda</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="closedSetion">
                <q-item-section>
                  <q-item-label>Cerrar sesión</q-item-label>
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
      >
        <q-list padding>
          <q-item
            clickable
            v-ripple
            to="user"
            active-class="my-menu-link"
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
            to="perfilUser"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>

            <q-item-section> Perfil </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="PAA1"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>

            <q-item-section> PAA</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="BusquedaEmpleado"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>

            <q-item-section> Busqueda Empleados </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="GestorEmpleado"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>

            <q-item-section> Gestor Empleado </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 160px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">
            {{ user.Nombre1 + " " + user.Apellido1 }}
          </div>
          <div>@{{ user.Email }}</div>
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
          url: `http://localhost:4000/RR-HH/usuarios/${usuarioActual.value}`,
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
  background: #0098f7;
}
#holis {
  position: absolute;
  right: 10px;
}
</style>
