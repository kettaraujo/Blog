# Projeto de Blog

Este é um projeto de blog desenvolvido utilizando as tecnologias:

    - HTML
    - CSS
    - JavaScript
    - Django
    - SQLite

O blog permite o cadastro de títulos e conteúdos de um post, armazena os dados em um banco de dados SQLite e permite a edição de posts existentes.

## Como Rodar o Projeto

# 1. Clonar o Repositório

Baixe o projeto em sua máquina. Se estiver no GitHub, clone o repositório usando: git clone https://github.com/kettaraujo/Blog

# 2. Abrir no VS Code

    Abra o Visual Studio Code.
    Clique em File, depois em Open Folder.
    Navegue até a pasta onde o projeto foi baixado e clique em Selecionar Pasta.
   
# 3. Configurar o Banco de Dados

No arquivo settings.py, a configuração padrão do Django já utiliza o SQLite como banco de dados automaticmente. Confirme se a seção DATABASES está assim:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
# 4. Rodar as Migrações

No terminal do VS Code, execute os seguintes comandos para criar as tabelas no banco de dados:

    python manage.py makemigrations
    python manage.py migrate

# 5. Rodar o Servidor de Desenvolvimento

Ainda no terminal, inicie o servidor do Django com o comando:

    python manage.py runserver

# 6. Acessar o Projeto no Navegador
    clique no endereço http que aparece no terminal e abra no navegador.

    

# Considerações e decisões relevantes

jango é um framework que eu não tinha muita afinidade, já que não havia realizado projetos utilizando essa tecnologia antes, apenas assisti algumas aulas. Porém, aceitei o desafio e embarquei em uma jornada de aprendizado enriquecedora, mesmo sendo um projeto básico senti que aprendi bastante. Decidi utilizar Django no lugar do Express porque acredito que a linguagem Python, proporciona uma base sólida para projetos robustos e escaláveis.

Para o front-end, optei por HTML, CSS e JavaScript, pois essas tecnologias permitem criar interfaces intuitivas e responsivas para o usuáio, além de serem altamente personalizáveis para atender às necessidades especídicas do projeto.

Como plano de melhorias futuras, pretendo implementar uma tela de login. Com isso, o nome do usuário será exibido como autor dos posts, tornando o sistema mais personalizado. Também planejo incluir a funcionalidade de upload de imagens e permitir que os usuários estilizem suas postagens com cores e backgrounds customizados.

O projeto foi organizado seguindo estas etapas:

    Levantamento de requisitos e ferramentas: Identifiquei as ferramentas e tecnologias necessárias.
    Planejamento: Estruturei o projeto, estimei o tempo necessário dividindo as tarefas em partes menores.
    Planejamento do banco de dados: Utilizei a plataforma Workbench para modelar o banco de dados e ter uma ideia de quais colunas utilizaria.
    Desenvolvimento do front-end: Criei a interface do usuário utilizando HTML, CSS e JavaScript.
    Implementação do back-end com Django: Desenvolvi a lógica do sistema e integrei com o banco de dados.
    Testes: Realizei testes para garantir que o sistema funcionasse conforme esperado.

A experiência de aprendizado foi incrível! Adorei fazer parte desse mini projeto e agradeço pela recepção da entrega. Senti-me parte de algo maior, o que reforçou minha motivação e entusiasmo ao longo do processo.


