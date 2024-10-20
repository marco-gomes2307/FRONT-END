Exercício 4: Lista de Itens com v-for

<template>
  <ul>
    <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      itens: ["Item 1", "Item 2", "Item 3"]
    };
  }
};
</script>