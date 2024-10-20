Exercício 1: Exibir uma Mensagem

<template>
  <p>{{ mensagem }}</p>
</template>

<script>
export default {
  data() {
    return {
      mensagem: "Bem-vindo ao Vue.js!"
    };
  }
};
</script>
