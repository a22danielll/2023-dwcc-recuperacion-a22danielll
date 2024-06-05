<script>
export default {
   inject: ['lista', 'borrar'],
};
</script>

<template>
   <div class="wrapper">
      <Recurso
         v-for="recurso in lista"
         v-bind="recurso"
         @borrar="borrar(recurso)"></Recurso>
   </div>
</template>

<style scoped>
.wrapper > :not(:last-child) {
   margin-bottom: 15px;
}
</style>