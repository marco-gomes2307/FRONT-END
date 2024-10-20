1. Contador de Cliques
Objetivo: Criar um contador que aumenta e diminui com dois botões.

<template>
  <div>
    <h1>{{ contador }}</h1>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      this.contador--;
    }
  }
};
</script>