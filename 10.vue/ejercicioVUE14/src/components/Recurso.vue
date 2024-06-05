<script>
export default {
   props: {
      id: Number,
      titulo: String,
      desc: String,
      ligazon: String,
   },
   emits: ['borrar'],
};
</script>

<template>
   <article id="{{ id }}">
      <div class="top">
         <h1>{{ titulo }}</h1>
         <button type="button" @click="$emit('borrar')">X</button>
      </div>

      <p>{{ desc }}</p>
      <a href="{{ ligazon }}">{{ ligazon }}</a>
   </article>
</template>

<style scoped>
article {
   width: 80%;
   margin: auto;
   border: 1px solid black;
   background-color: white;
   padding: 15px;
}

.top {
   display: flex;
   justify-content: space-between;
}

h1 {
   margin: 0;
}

button {
   color: red;
}
</style>
