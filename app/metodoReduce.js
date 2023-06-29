function calcularValorTotalDeLivrosDisponiveis(livro) {
    return livro.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}