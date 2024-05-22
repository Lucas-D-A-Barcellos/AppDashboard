# Dashboard de Vendas com AJAX e jQuery

## Descrição

Este projeto é uma aplicação web simples para treinar a utilização de requisições AJAX com jQuery. A aplicação exibe um dashboard que mostra o número de vendas e o total de vendas para um determinado período (competência). Os dados são atualizados dinamicamente ao selecionar diferentes competências, demonstrando a integração entre o front-end e o back-end utilizando AJAX.

## Funcionalidades

- Seleção de competência (mês e ano) para exibir dados de vendas.
- Requisições AJAX para buscar dados do servidor sem recarregar a página.
- Atualização dinâmica dos dados no dashboard.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (jQuery)
- PHP
- MySQL
- Bootstrap

## Estrutura do Projeto

- `index.html`: Página principal da aplicação contendo o layout do dashboard.
- `app.php`: Script PHP responsável por lidar com as requisições AJAX e retornar os dados do banco de dados.
- `script.js`: Arquivo JavaScript com a lógica de requisições AJAX utilizando jQuery.
- `documentacao.html`: Página HTML com a documentação do sistema.
- `suporte.html`: Página HTML com informações de suporte.

## Como Executar o Projeto

### Requisitos

- XAMPP ou qualquer servidor local com suporte para PHP e MySQL.
- Navegador web.

### Passos

1. Clone o repositório para o seu servidor local:

    ```bash
    git clone https://github.com/Lucas-D-A-Barcellos/AppDashboard.git
    ```

2. Importe o script de criação do banco de dados `querys.sql` para o seu MySQL.

3. Configure as credenciais de acesso ao banco de dados no arquivo `app.php`:

    ```php
    class Conexao {
        private $host = 'localhost';
        private $dbname = 'dashboard';
        private $user = 'root';
        private $pass = '';
    }
    ```

4. Inicie o servidor local e acesse a aplicação através do navegador:


### Utilização

1. Abra a aplicação no navegador.
2. Utilize o menu lateral para navegar entre as seções.
3. Selecione uma competência no dropdown para ver os dados de vendas atualizados dinamicamente no dashboard.

