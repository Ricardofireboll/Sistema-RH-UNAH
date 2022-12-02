<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        :name="1"
        title="Introduccion"
        icon="settings"
        :done="step > 1"
        style="font-size: 20px"
      >
        En este espacio obtendra toda la documentacion de como utilizar el
        sistema. No es dificil de utilizar ya que la mayoria de aplicaciones se
        utilizan de esta manera. Pero en este hay ciertas restricciones a
        considerar, donde cada empleado de recursos humanos debera de utilizar
        el sistema de forma en la que haya sido acreditada.
        <br />
        <br />
        Aqui podra observar como crear un nuevo usuario para ingresar al
        sistema, como buscar los diferentes empleados que se encuentran en la
        UNAH, tambien se encuentran los cuatro diferentes roles con los que se
        trabaja en recursos humanos ya sea con la acreditacion de dias para la
        PAA, Como poder gestionar los diferentes empleados de la UNAH, tambien
        la parte de monitoreo de empleados y la asistencia de los empleados.
        <br />
        <br />
        Tambien se podra observar que en esta plataforma se pueden generar las
        distintas constancias tales como los dias de acreditacion por
        participacion de PAA, y podra generar reportes en la seccion de
        asistencia donde podra observar el record horario de cada empleado. Si
        tiene problemas para poder utilizar la plataforma le invitamos a que
        pueda seguir los siguientes pasos para que obtenga una mejor comprension
        de este.

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Login al sistema"
        icon="create_new_folder"
        :done="step > 2"
        style="font-size: 20px"
      >
        Al cargar el enlace se le presentara una ventana como esta, para poder
        ingresar el administrador del sistema le otorgara su debido correo y
        contraseña ya que solo el puede realizar dicho procedimiento. Ingresara
        al sistema colocando su respectivo correo y contraseña.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/login.png"
              />
            </div>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Regresar"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Menu principal"
        icon="style"
        :done="step > 3"
        style="font-size: 20px"
      >
        Luego de acceder al sistema lo dirigira al menu principal donde se
        encuentran cuatro iconos, el cual contienen los cuatros procesos con los
        que trabaja recursos humanos gestor de empleado, asistencia, monitoreo y
        PAA.
        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 340px;
                  width: 700px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/menu_principal.png"
              />
            </div>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Regresar"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Gestion de empleado"
        icon="create_new_folder"
        style="font-size: 20px"
        :done="step > 4"
      >
        En este proceso el empleado de recursos humanos podra buscar a cualquier
        empleado de la UNAH que este registrado en la plataforma solamente,
        ingresando el numero de empleado en el primer cuadro de texto que se le
        presenta.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 340px;
                  width: 700px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/gestion1.png"
              />
            </div>
          </div>
        </div>

        Tambien se puede hacer una busqueda mas resumida, por si debe de buscar
        varios empleados a la vez. Utilizando la pestaña de busqueda extendida.
        Puede buscar por fecha de contratacion, el genero de la persona, la
        modalidad en la que trabaja y los dias en los que labora.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 340px;
                  width: 700px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/gestion2.png"
              />
            </div>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 3"
            color="primary"
            label="Regresar"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Asistencia"
        icon="create_new_folder"
        :done="step > 5"
        style="font-size: 20px"
      >
        Cuando entre en la pestaña de asistencia le saldra la siguiente ventana,
        la cual podra trabajar con los distintos campos.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/asistencia1.png"
              />
            </div>
          </div>
        </div>
        Por consiguiente podra cargar los horarios que obtenga de los relojes
        marcadores y colocarlos en esta pestaña el cual guardara en cada
        empleado su record de puntualidad o inasistencia.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/asistencia2.png"
              />
            </div>
          </div>
        </div>
        Y para finalizar con esta pestaña, podra generar reportes de los
        empleados y asi poder llevar un registro diario o mensual de su
        asistencia a la universidad. Se puede colocar el nombre del archivo y
        guardar donde guste en su equipo. Tambien se puede editar el reporte e
        imprimirlo.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/asistencia3.png"
              />
            </div>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 6" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 4"
            color="primary"
            label="Regresar"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="6"
        title="Monitoreo"
        icon="create_new_folder"
        :done="step > 6"
        style="font-size: 20px"
      >
        En la parte de monitoreo hemos decidido realizarlo de forma digital, al
        darle click nos aparecera una ventana como esta, con el mapa se podra
        guiar para saber donde esta cada edificio.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 350px;
                  height: 400px;
                  width: 800px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/monitoreo1.png"
              />
            </div>
          </div>
        </div>
        Al darle click, a cualquiera de las zonas se nos despliega una lista de
        edificios los cuales estan divididos por zonas. Tambien nos aparece la
        cantidad de docentes registrados en los siguientes edificios y los
        cuales estan pendientes de revisar su asistencia.
        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 350px;
                  height: 400px;
                  width: 800px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/monitoreo2.png"
              />
            </div>
          </div>
        </div>
        Luego confirmamos si los docentes se encuentran laborando en dicho
        edificio, seleccionamos presente si se encuentran o ausente si no.
        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 350px;
                  height: 400px;
                  width: 800px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/monitoreo3.png"
              />
            </div>
          </div>
        </div>
        Nos sale una ventana de confirmacion, le damos aceptar y automaticamente
        se guarda.
        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 350px;
                  height: 400px;
                  width: 800px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/monitoreo4.png"
              />
            </div>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 7" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 5"
            color="primary"
            label="Regresar"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="7"
        title="PAA"
        icon="create_new_folder"
        :done="step > 7"
        style="font-size: 20px"
      >
        Finalizando con las pestañas, observaremos el contenido de la de PAA en
        esta se pueden buscar los empleados que contengan horas de compensacion
        por haber participado, y poder observar cuantos dias tiene el empleado.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/PAA1.png"
              />
            </div>
          </div>
        </div>
        Tambien se puede generar las constancia con la cual el empleado
        universitario podra dar legalidad de que sus horas fueron ya
        acreditadas. Con el cual puede tomarse esos dias como libres.
        <br />
        Tal como habiamos visto en asistencia esta ventana tiene las mismas
        funcionalidades que la anterior.
        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/PAA2.png"
              />
            </div>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 8" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 6"
            color="primary"
            label="Regresar"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="8"
        title="Editar empleado"
        icon="create_new_folder"
        :done="step > 8"
        style="font-size: 20px"
      >
        En esta ventana se pueden modificar los empleados que hayan sido
        registrados, por si hubo algun error al momento de ingresar sus datos.
        Para eso habilitamos el boton de modificar y automaticamente se podran
        cambiar los campos que habian sido llenados previamente.
        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/editar1.png"
              />
            </div>
          </div>
        </div>
        Tambien se pueden registrar nuevos empleados que hayan sido contratados
        por la UNAH, solo damos click en el boton de ingresar y automaticamente
        se nos abrira una pestaña en el cual podremos ingresar los datos del
        nuevo empleado, al finalizar solo daremos click en guardar.

        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/editar2.png"
              />
            </div>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 9" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 7"
            color="primary"
            label="Regresar"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="9"
        title="Final"
        icon="create_new_folder"
        :done="step > 9"
        style="font-size: 20px"
      >
        <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img
                style="
                  left: 300px;
                  height: 350px;
                  width: 750px;
                  border-radius: 15px;
                  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
                "
                src="../assets/img/final.png"
              />
            </div>
          </div>
        </div>
        Y esta seria toda la funcionalidad que tiene nuestro sistema de recursos
        humanos de la UNAH. Si tienen alguna duda y esto no fue de suficiente
        ayuda. Puede contactar a los desarrolladores el cual podran dar una
        explicacion mas detallada de el funcionamiento de este.

        <q-stepper-navigation>
          <q-btn @click="step = 1" color="primary" label="Final" />
          <q-btn
            flat
            @click="step = 8"
            color="primary"
            label="Regresar"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-purple-8 text-white q-px-lg">
          ¡Bienvenidos a la plataforma SEDP!
        </q-banner>
        <q-banner v-else-if="step === 2" class="bg-orange-8 text-white q-px-lg">
          Ingrese a la plataforma.
        </q-banner>
        <q-banner v-else-if="step === 3" class="bg-blue-8 text-white q-px-lg">
          ¡Puede ingresar a cualquiera!
        </q-banner>
        <q-banner v-else-if="step === 4" class="bg-red-8 text-white q-px-lg">
          Comenzar a buscar.
        </q-banner>
        <q-banner v-else-if="step === 5" class="bg-green-8 text-white q-px-lg">
          Revisar la asistencia.
        </q-banner>
        <q-banner v-else-if="step === 6" class="bg-cyan-8 text-white q-px-lg">
          Monitoreo del empleado docente en la UNAH.
        </q-banner>
        <q-banner v-else-if="step === 7" class="bg-blue-8 text-white q-px-lg">
          Acreditar horas.
        </q-banner>
        <q-banner v-else-if="step === 8" class="bg-yellow-8 text-white q-px-lg">
          Edite a cualquier empleado.
        </q-banner>
        <q-banner v-else-if="step === 9" class="bg-orange-8 text-white q-px-lg">
          Final.
        </q-banner>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      step: ref(1),
    };
  },
};
</script>
