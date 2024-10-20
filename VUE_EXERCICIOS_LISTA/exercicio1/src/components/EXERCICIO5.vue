Exercício 5: Entrada de Texto com v-model

<template>
  <div>
    <input type="text" v-model="nome" placeholder="Digite seu nome" />
    <p>Você digitou: {{ nome }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: ""
    };
  }
};
</script>
