3. Lista Dinâmica
Objetivo: Criar uma lista onde o usuário pode adicionar e remover itens clicando neles.

<template>
  <div>
    <input v-model="novoItem" @keyup.enter="adicionarItem" placeholder="Adicionar item" />
    <ul>
      <li v-for="(item, index) in itens" :key="index" @click="removerItem(index)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novoItem: '',
      itens: []
    };
  },
  methods: {
    adicionarItem() {
      if (this.novoItem.trim()) {
        this.itens.push(this.novoItem);
        this.novoItem = '';
      }
    },
    removerItem(index) {
      this.itens.splice(index, 1);
    }
  }
};
</script>