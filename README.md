# API ProAgro

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

API proposta para atender a necessidade de armazenar, verificar e validar registros referentes a perdas de colheita originadas das ações da natureza.

A solução foi desenvolvida com a integração do Angular 10 para o front-end, Django 3.1.7 para o backend e Google Maps para uma visualização dos dados mais intuitiva e clara, já que a aplicação foi desenvolvida pensando que o usuário final possa utilizá-la, sendo o mesmo devidamente cadastrado e autenticado.

### Pré-requisitos

Antes de começar de utilizar a aplicação, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

 - [Python-3.8.0](https://www.python.org/downloads/release/python-380/) - Linguagem utilizada no banckend, 
 - [PostgresSQL](https://www.postgresql.org/download/) - Banco de dados vinculado ao backend, 
 - [Key Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key), a aplicação funcionaria normalmente sem o mapa, mas foi utilizado para uma visão mais intuita dos dados, 
 - [Node.js]() - para a utilização do pacote [npm]() no front-end,
 - Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

# Clone este repositório
```bash
$ git clone <git@github.com:joswan2567/API-ProAgro.git>
```
# Altere o Interpretador Python Global
O backend foi desenvolvido em um espaço virtual onde se encontra as dependências necessárias para o projeto, porém necessita de um intepretador Python Global para ser ativada. Adicione o caminho do seu interpretador Python no arquivo pyenv.cfg
```bash
$ cd .\proj_sof\

# pyenv.cfg

home = \PATH_PYTHON-3.8.0
implementation = CPython
version_info = 3.8.0.final.0
virtualenv = 20.4.3
include-system-site-packages = false
base-prefix = \PATH_PYTHON-3.8.0
base-exec-prefix = \PATH_PYTHON-3.8.0
base-executable = \PATH_PYTHON-3.8.0\python.exe
```
 Ative o espaço virtual 

```bash
$ cd .\Scripts\
$ .\activate
```
# Vincule um Banco de Dados ao Django
O banco de dados usando no [deploy do projeto](https://apiproagro.herokuapp.com/perdas) foi o PostgreSQL, mas poderia ser usado qualquer outro banco suportado pelo Django. Altere as credenciais do seu banco de dados no arquivo settings.py

```bash
$ cd ./proj_sof/backend/backend

# settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nome_data_base',
        'USER': 'usuario_data_base',
        'PASSWORD': 'senha_data_base',
        'HOST': 'host_database',
        'PORT': 'porta_database',
    }
}
```

Depois de configurado, podemos fazer a criação da tabelas no banco de dados e rodar a aplicação django:
```bash
$ cd .\proj_sof\backend
$ python .\manage.py makemigrations
$ python .\manage.py migrate
$ python .\manage.py runserver
```
Se tudo estiver okay, isso aparecerá no console:
```bash
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
April 08, 2021 - 20:44:03
Django version 3.1.7, using settings 'backend.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

### 🎲 Rodando o Front End (Web)
Esse repositório já contém os arquivos estáticos usados no front-end gerados pelo Angular no diretório /backend/static/ang. Mas se houver necessidade de alterar ou adicionar algo no front-end, precisaremos rodar a aplicação angular.

# Adicione uma key Google Maps API
Para a utilização do mapa é necessário [criar uma key](https://cursos7.com.br/como-gerar-uma-api-key-do-google-maps-para-o-tema-impreza/). Depois de criada adicione no arquivo [app.module.ts]

```bash
$ cd ./proj_sof/frontend/src/app

# app.module.ts
...
imports: [
    ...
    AgmCoreModule.forRoot({
      apiKey: 'Your_Key'
    })
  ],
  ...
```
# Instale as dependências
Vá até o diretório do front-end e instale as dependências
```bash
$ cd .\proj_sof\frontend
$ npm install
```
Se quiser rodar somente o front-end execute $ npm start, ou se preferir exportar os arquivos estáticos para a aplicação django execute $ ng build --prod, o caminho de exportação já está configurado em [angular.json]()
```bash
...
"build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            "outputPath": "./../backend/backend/static/ang",
            "index": "src/index.html",
            "main": "src/main.ts",
...
```

##### Tendo esse pontos de acordo, a aplicação rodará normalmente.

