<script>
import { computed } from 'vue';
export default {
   data() {
      return {
         comp: 'Lista',
         id: 4,
         lista: [
            {
               id: 1,
               titulo: 'titulo 1',
               desc: 'saadgfdgdsgsdg',
               ligazon: 'www.fghfdh.com',
            },
            {
               id: 2,
               titulo: 'titulo 2',
               desc: 'ggggfdddd',
               ligazon: 'www.mhiytrh.com',
            },
            {
               id: 3,
               titulo: 'titulo 3',
               desc: 'sdfgsdg',
               ligazon: 'www.ghgfd.com',
            },
         ],
      };
   },
   provide() {
      return {
         lista: computed(() => this.lista),
         borrar: this.borrar,
         insertar: this.insertar,
      };
   },
   methods: {
      borrar(recurso) {
         this.lista = this.lista.filter((r) => r !== recurso);
      },
      insertar(t, d, l) {
         this.comp = 'Lista';
         this.lista.push({ id: this.id, titulo: t, desc: d, ligazon: l });
         this.id++;
      },
   },
};
</script>

<template>
   <nav>
      <h1>Lista recursos</h1>
   </nav>

   <main>
      <div class="opcion">
         <button type="button" @click="comp = 'Lista'">Ver recursos</button>
         <button type="button" @click="comp = 'Form'">Engadir recurso</button>
      </div>
      <div class="container">
         <keep-alive>
            <component :is="comp"></component>
         </keep-alive>
      </div>
   </main>
</template>

<style>
* {
   box-sizing: border-box;
}

html,
body {
   margin: 0;
   padding: 0;
}

nav {
   background-color: gray;
   padding: 15px;
}

nav h1 {
   margin: 0;
   text-align: center;
}

main {
   width: 80%;
   margin: auto;
   margin-top: 5%;
}

.container {
   margin-top: 5%;
   background-color: gray;
   padding: 20px 0;
}
</style>
