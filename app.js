let listaGenerica = [];

let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

let nomePessoas = [];
let opcao;
// do...while: O bloco de código sempre é executado pelo menos uma vez, mesmo que a condição seja falsa logo no início. A condição é verificada depois da execução do bloco.
// while: O bloco de código só executa se a condição for verdadeira logo no início. A condição é verificada antes da execução do bloco.
do {
    opcao = Number(prompt(
        'Digite o número da opção desejada:\n' +
        '1 - Adicionar um nome\n' +
        '2 - Remover um nome\n' +
        '3 - Remover um nome repetido(segunda aparição nas posições da lista)\n' +
        '4 - Listar uma posição específica\n' +
        '5 - Exibir lista completa\n' +
        '6 - Sair'
    ));

    if (isNaN(opcao) || !Number.isInteger(opcao) || opcao < 1 || opcao > 6) {
        alert('Opção inválida. Por favor, digite um número inteiro entre 1 e 5.');
        continue;
    }

    switch (opcao) {
        case 1:
            let nome = prompt('Digite o nome que deseja adicionar:');
            nomePessoas.push(nome);
            break;
        case 2:
            let nomeRemover = prompt('Digite o nome que deseja remover:');
            let index = nomePessoas.indexOf(nomeRemover);
            if (index !== -1) {
                nomePessoas.splice(index, 1);
                alert(`O nome ${nomeRemover} foi removido com sucesso!`);
            } else {
                alert(`O nome ${nomeRemover} não foi encontrado na lista.`);
            }
            break;
        case 3:
            let nomeRemoverRepetido = prompt('Digite o nome repetido que deseja remover em sua segunda aparição nas posições da lista:');
            let primeiroIndex = nomePessoas.indexOf(nomeRemover);
            if (primeiroIndex !== -1) {
                // Procura a próxima ocorrência após o primeiro
                let segundoIndex = nomePessoas.indexOf(nomeRemoverRepetido, primeiroIndex + 1);
                // nomePessoas.indexOf(nomeRemover, primeiroIndex + 1) procura pelo valor de nomeRemoverRepetido no array nomePessoas, mas começa a busca a partir da posição logo após o primeiro encontrado (primeiroIndex + 1).
                // Assim, se houver mais de uma ocorrência do nome, ele encontra a segunda (ou próxima) ocorrência.
                if (segundoIndex !== -1) {
                    nomePessoas.splice(segundoIndex, 1);
                    alert(`A segunda ocorrência de ${nomeRemoverRepetido} foi removida com sucesso!`);
                } else {
                    alert(`Não existe uma segunda ocorrência de ${nomeRemoverRepetido} na lista.`);
                }
            } else {
                alert(`${nomeRemoverRepetido} não foi encontrado na lista.`);
            }
            break;
        case 4:
            let posicao = Number(prompt('Digite a posição do nome que deseja listar (começando de 0):'));
            if (Number.isInteger(posicao) && posicao >= 0 && posicao < nomePessoas.length) {
                alert(`O nome na posição ${posicao} é: ${nomePessoas[posicao]}`);
            } else {
                alert('Posição inválida.');
            }
            break;
        case 5:
            alert(`Lista completa de nomes: ${nomePessoas.join(', ')}`);
            break;
        case 6:
            alert('Saindo do programa.');
            break;
    }
} while (opcao !== 6);

