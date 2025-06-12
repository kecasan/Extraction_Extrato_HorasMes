# Extrator de Dados de Frequência

Esta é uma extensão para navegadores baseados em Chromium (Google Chrome, Microsoft Edge, etc.) projetada para automatizar a extração e formatação de dados de frequência de uma página web específica.

O objetivo principal é converter uma tabela HTML complexa em um arquivo `.csv` limpo e pronto para ser importado em planilhas como o Microsoft Excel ou Google Sheets, economizando tempo e evitando erros manuais.

## Funcionalidades

-   **Extração com Um Clique:** Ativa a extração de dados através de um simples clique no ícone da extensão.
-   **Análise do DOM:** Lê o conteúdo HTML da página ativa para encontrar os dados relevantes.
-   **Filtragem Inteligente:** Isola as linhas da tabela que contêm informações dos funcionários, ignorando cabeçalhos e outros elementos.
-   **Extração de Dados Específicos:** Captura os seguintes campos para cada funcionário:
    -   Nome Completo
    -   Total de Horas Ausentes
    -   Total de Horas Excedentes
-   **Formatação para CSV:** Formata os dados extraídos em um formato CSV (valores separados por vírgula), com um cabeçalho apropriado (`Nome,Ausentes,Excedentes`).
-   **Download Automático:** Gera e inicia o download de um arquivo `dados_frequencia.csv` com os dados processados.

## Como Instalar e Usar

Como esta é uma extensão desenvolvida para um propósito específico, ela deve ser instalada localmente no modo de desenvolvedor.

1.  **Baixar o Projeto:** Clone ou baixe este repositório para o seu computador.
2.  **Acessar as Extensões:** Abra o seu navegador (Chrome/Edge), digite `chrome://extensions` na barra de endereço e pressione Enter.
3.  **Ativar o Modo de Desenvolvedor:** No canto superior direito da página, ative a opção "Modo de desenvolvedor".
4.  **Carregar a Extensão:** Clique no botão "Carregar sem compactação" e selecione a pasta do projeto que você baixou.
5.  **Pronto para Usar:** A extensão será instalada e seu ícone aparecerá na barra de ferramentas.

Para usar, simplesmente navegue até a página de frequência desejada, clique no ícone da extensão e, em seguida, no botão **"Extrair Dados"**. O arquivo `.csv` será baixado automaticamente.

## Estrutura do Projeto

-   `manifest.json`: Arquivo de configuração que define as permissões e o comportamento da extensão.
-   `popup.html`: A estrutura da pequena janela que aparece ao clicar no ícone da extensão.
-   `popup.js`: Controla a lógica do popup, como o clique no botão.
-   `content.js`: O script principal que é injetado na página para ler o HTML, processar os dados e iniciar o download.
