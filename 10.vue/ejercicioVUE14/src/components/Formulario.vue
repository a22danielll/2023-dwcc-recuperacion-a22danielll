<script>
export default {
   inject: ['insertar'],
   data() {
      return {
         title: '',
         desc: '',
         ligazon: '',
         show: false,
      };
   },
   methods: {
      procesarInfo() {
         if (this.title === '' || this.desc === '' || this.ligazon === '') {
            this.show = true;
            return;
         } else this.insertar(this.title, this.desc, this.ligazon);
         this.title = this.desc = this.ligazon = '';
      },
   },
};
</script>

<template>
   <form>
      <div class="field">
         <label>Titulo:</label>
         <input type="text" v-model="title" />
      </div>

      <div class="field">
         <label>Descrición:</label>
         <input type="text" v-model="desc" />
      </div>

      <div class="field">
         <label>Ligazón:</label>
         <input type="text" v-model="ligazon" />
      </div>

      <button type="button" @click="procesarInfo">Engadir</button>
   </form>

   <Teleport to="body">
      <Vmodal v-if="show" @close-modal="(v) => (this.show = v)">
         <h1>Campos valeiros</h1>
      </Vmodal>
   </Teleport>
</template>

<style scoped>
form {
   width: 70%;
   margin: auto;
   background-color: white;
   border: 1px solid black;
}

.field,
button {
   margin-bottom: 20px;
   margin-left: 20px;
}

label,
input {
   display: block;
}
</style>
