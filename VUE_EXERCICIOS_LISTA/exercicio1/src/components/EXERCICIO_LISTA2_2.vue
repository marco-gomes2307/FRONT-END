2. Mostrar/Ocultar Texto
Objetivo: Criar um botão que, ao ser clicado, mostre ou oculte um texto na tela usando v-if.

<template>
  <div>
    <button @click="mostrarTexto = !mostrarTexto">Mostrar/Ocultar Texto</button>
    <p v-if="mostrarTexto">Este é um texto que pode ser ocultado.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarTexto: false
    };
  }
};
</script>