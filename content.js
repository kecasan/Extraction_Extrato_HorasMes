// 1. EXTRAIR CÓDIGO FONTE
// Pega o HTML completo da página atual
const pageSourceHTML = document.documentElement.outerHTML;

// 2. FILTRAR O CÓDIGO
// Função que processa o HTML e retorna o texto formatado em CSV
function processarHTML(html) {
  // ALTERAÇÃO 1: Adiciona o cabeçalho para as colunas do CSV
  let resultadoFinal = 'Nome,Ausentes,Excedentes\n';

  // Usa o DOMParser para transformar a string HTML em um documento manipulável
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Seleciona todas as linhas de funcionário na tabela
  const linhasFuncionarios = doc.querySelectorAll('tr.entr, tr.entr1');

  linhasFuncionarios.forEach(linha => {
    const nomeTag = linha.querySelector('a');
    const celulas = linha.querySelectorAll('td');

    if (nomeTag && celulas.length >= 10) {
      const nome = nomeTag.innerText.trim();
      let ausentes = celulas[5].innerText.trim();
      let excedentes = celulas[8].innerText.trim();
      
      if (!ausentes.includes(':')) {
        ausentes = '0:00';
      }
      if (!excedentes.includes(':')) {
        excedentes = '0:00';
      }

      // ALTERAÇÃO 2: Formata a linha com vírgulas em vez de quebras de linha
      resultadoFinal += `"${nome}",${ausentes},${excedentes}\n`;
    }
  });

  return resultadoFinal;
}

// 3. JUNTAR TUDO EM UM ARQUIVO .CSV
const dadosProcessados = processarHTML(pageSourceHTML);

if (dadosProcessados.split('\n').length > 1) { // Verifica se há dados além do cabeçalho
  // Função para acionar o download do arquivo
  function baixarArquivo(nomeArquivo, conteudo) {
    const a = document.createElement('a');
    // Define o tipo MIME para CSV, para que o sistema operacional o reconheça corretamente
    const file = new Blob([conteudo], { type: 'text/csv;charset=utf-8;' });
    a.href = URL.createObjectURL(file);
    a.download = nomeArquivo;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ALTERAÇÃO 3: Muda o nome do arquivo para .csv
  baixarArquivo('dados_frequencia.csv', dadosProcessados);
}