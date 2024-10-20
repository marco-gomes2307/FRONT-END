Exercício 3: Mostrar/Ocultar Texto

<template>
  <div>
    <button @click="mostrar = !mostrar">
      {{ mostrar ? "Ocultar" : "Mostrar" }} Texto
    </button>
    <p v-if="mostrar">Aqui está o texto!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false
    };
  }
};
</script>