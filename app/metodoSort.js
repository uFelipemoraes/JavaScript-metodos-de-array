/*let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}*/

let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

// Variável de controle para rastrear a ordem atual da classificação
let ordemCrescente = true;

function ordenarLivrosPorPreco() {
    let livrosOrdenados;

    if (ordemCrescente) {
        // Classificar do menor para o maior preço
        livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    } else {
        // Classificar do maior para o menor preço
        livrosOrdenados = livros.sort((a, b) => b.preco - a.preco);
    }

    // Alternar a ordem de classificação
    ordemCrescente = !ordemCrescente;

    exibirOsLivrosNaTela(livrosOrdenados);
}
