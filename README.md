# Projeto de Blog

Este é um projeto de blog desenvolvido utilizando as tecnologias:

HTML

CSS

JavaScript

Django

MySQL

O blog permite o cadastro de títulos e conteúdos, armazena os dados em um banco de dados MySQL e permite a edição de posts existentes.

Como Rodar o Projeto

1. Clonar o Repositório

Baixe o projeto em sua máquina. Se estiver no GitHub, clone o repositório usando: git clone <URL_DO_REPOSITORIO>

2. Abrir no VS Code

Abra o Visual Studio Code.

Clique em File (ou Arquivo) > Open Folder (ou Abrir Pasta).

Navegue até a pasta onde o projeto foi baixado e clique em Selecionar Pasta.

3. Configurar as Variáveis do Banco de Dados

No arquivo settings.py, configure as credenciais do banco de dados na seção DATABASES:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nome_do_banco',
        'USER': 'seu_usuario',
        'PASSWORD': 'sua_senha',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

4. Rodar as Migrações

No terminal do VS Code, execute os seguintes comandos para criar as tabelas do banco de dados:
python manage.py makemigrations
python manage.py migrate

5. Rodar o Servidor de Desenvolvimento

Ainda no terminal, inicie o servidor do Django: python manage.py runserver

6. Acessar o Projeto no Navegador

Abra o navegador e acesse o projeto.
