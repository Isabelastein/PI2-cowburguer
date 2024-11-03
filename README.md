## Pré-requisitos

Antes de clonar o repositório, certifique-se de que você possui os seguintes itens instalados em seu computador:

1. **Conta no GitHub:** Crie uma conta em [github.com](https://github.com) se ainda não tiver uma.
2. **Git:** Instale o Git, que você pode baixar em [git-scm.com](https://git-scm.com).
3. **Node.js:** O projeto requer o Node.js para executar o servidor. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
4. **Visual Studio Code (opcional):** Para editar o código do projeto, você pode usar o Visual Studio Code, que é um editor de código leve e poderoso. Baixe em [code.visualstudio.com](https://code.visualstudio.com).

## Como Clonar

Para obter uma cópia do projeto em sua máquina local, siga os passos abaixo:

1. **Abra o terminal** (ou prompt de comando) em sua máquina.
2. **Clone o repositório** usando o comando abaixo:
   git clone https://github.com/SEU_USUARIO/Cowburguer.git
Substitua SEU_USUARIO pelo seu nome de usuário do GitHub.

3. **Navegue até o diretório do projeto**:
cd Cowburguer

4.**Instale as dependências do projeto usando o npm (gerenciador de pacotes do Node.js)**:
npm install

5. **Inicie o servidor para acessar o sistema de cardápio**:
node server.js
Abra seu navegador e acesse o cardápio online em http://localhost:3000.

Sinta-se à vontade para explorar o código!

## **Cowburguer - Sistema de Cardápio Online**
Bem-vindo ao repositório do Cowburguer, um sistema de cardápio online projetado para facilitar a experiência dos clientes de uma hamburgueria. Este projeto combina tecnologias web modernas com um banco de dados para fornecer uma interface interativa e acessível.

**Descrição do Projeto**
O Cowburguer permite que os usuários vejam um cardápio interativo de hambúrgueres, onde podem obter informações detalhadas sobre cada item. O sistema foi desenvolvido utilizando um framework web com integração a um banco de dados PostgreSQL, garantindo uma gestão eficiente dos dados do cardápio. Além disso, o projeto incorpora práticas de acessibilidade para assegurar que todos os usuários possam navegar com facilidade.

**Funcionalidades**
Cardápio Dinâmico: Visualização de hambúrgueres com detalhes e imagens.
Interatividade: Usuários podem clicar nos itens do cardápio para obter mais informações.
Acessibilidade: O design é otimizado para ser acessível a todos os usuários.
API RESTful: Permite a manipulação e a consulta de dados no banco de dados.

**Tecnologias Utilizadas**
Front-end: HTML5, CSS3, JavaScript
Back-end: Node.js, Express.js
Banco de Dados: PostgreSQL
Controle de Versão: Git

**Estrutura do Projeto**
config.js: Configurações de conexão com o banco de dados.
test-connection.js: Script para testar a conexão com o banco de dados.
package.json: Gerenciador de pacotes para dependências do projeto.
entrada.html: Página de boas-vindas para os usuários.
home.html: Página do cardápio com informações sobre os hambúrgueres.
