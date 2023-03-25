const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    carrinho: [],
    carrinhoTotal: 0,
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((r) => r.json())
        .then((r) => {
          this.produtos = r;
        });
    },
    adicionaItem() {
      this.produto.estoque--;
    },
  },
  created() {
    this.fetchProdutos();
  },
});
