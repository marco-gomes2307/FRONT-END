4. Input de Nome
Objetivo: Criar um campo de entrada onde o usuário pode digitar seu nome e exibir "Bem-vindo, [nome digitado]!" em tempo real.

<template>
  <div>
    <input v-model="nome" placeholder="Digite seu nome" />
    <p>Bem-vindo, {{ nome }}!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: ''
    };
  }
};
</script>