# Crud_quarkus_backend_frontend
Aplicação web full-stack desenvolvida no 4º período da faculdade de Análise e Desenvolvimento de Sistenas, para a materia de programação web - Frontend. A API simula uma tela de cadastro de carros, que exibe os dados dos mesmo e permite a interação com as operações de CRUD.

Backend:
- Desenvolvido no IntelliJ.
- Utilizou-se o Java juntamente com o Quarkus, um framework leve e de alto desempenho para aplicativos Java nativos na nuvem.
- O Quarkus foi indicado para desenvolver o backend devido à sua eficiência, facilidade de uso e suporte para a construção de aplicativos Java com baixo tempo de inicialização e baixo consumo de memória.
- No backend, foram implementadas as funcionalidades de conexão com o banco de dados e a lógica de negócios para realizar operações CRUD (Create, Read, Update e Delete) sobre os dados.
- Foram desenvolvidos endpoints RESTful para expor os serviços CRUD, permitindo a comunicação entre o frontend e o backend por meio de requisições HTTP.
- Foram utilizadas bibliotecas ou ferramentas adicionais, como Hibernate para mapeamento objeto-relacional (ORM) e conexão com o banco de dados.

Frontend:
- Desenvolvido no Visual Studio Code.
- Utilizou-se HTML (HyperText Markup Language), CSS (Cascading Style Sheets) e JavaScript, as tecnologias fundamentais da web, para desenvolver a interface do usuário (UI) e a experiência do usuário (UX) no navegador.
- O HTML foi usado para estruturar o conteúdo da página, definir formulários, tabelas e outros elementos da UI.
- O CSS foi utilizado para estilizar e dar aparência visual à UI, incluindo layout, cores, tipografia, etc.
- O JavaScript foi utilizado para adicionar interatividade à UI, como validação de formulários e manipulação do DOM (Document Object Model).

Para executar o projeto:
- Mudar as configurações de acesso como nome, senha e url (se necessário) ao banco de dados SQL Server que estão disponíveis no arquivo: src\resources\application.properties.
- Criar o banco de dados no SQL Server.
- O script para criação da tabela e insert de registros já estão disponíveis nos arquivos contidos na pasta: src\resources\db. ao executar o projeto os dois arquivos são executados automaticamente no banco criando tanto a tabela quanto os inserts para testes.
- Para inicializar o projeto basta executar no cli o comando ./mvnw quarkus:dev ou simplesmente rodar o projeto na IDE.
