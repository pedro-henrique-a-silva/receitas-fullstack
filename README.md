# App de Receitas Fullstack

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Rodando a Aplicação](#rodando-a-aplicação)
- [Endpoints Disponíveis](#endpoints-disponíveis)


Este repositório contém a implementação de uma aplicação fullstack de receitas, com duas versões de backend utilizando Express e NestJS, respectivamente. O projeto também inclui uma aplicação frontend que consome os serviços dos backends para exibir receitas de comidas e bebidas.

## Funcionalidades

- Visualização de receitas de comidas e bebidas.
- Opção para favoritar uma receita.
- Checklists para acompanhar as etapas de preparo das receitas.
- Funcionalidade de login com JWT para autorização de acesso à aplicação.
- Senhas dos usuários são criptografadas utilizando bcrypt.

## Tecnologias Utilizadas

### Frontend

- **Framework**: [React](https://reactjs.org/) com [Typescript](https://www.typescriptlang.org/)
- **Biblioteca de Componentes**: [Material UI](https://material-ui.com/)
- **Gerenciamento de Estado**: Context API
- **Hooks Customizados**

### Backend com Express

- **Framework**: [Express](https://expressjs.com/)
- **Banco de Dados**: [MySQL](https://www.mysql.com/)
- **ORMs**: [Sequelize](https://sequelize.org/), [Prisma ORM](https://www.prisma.io/)
- **Autenticação e Autorização**: JWT, Bcrypt
- **Princípios de Design**: POO, SOLID

### Backend com NestJS

- **Framework**: [NestJS](https://nestjs.com/)
- **Banco de Dados**: [MySQL](https://www.mysql.com/)
- **ORM**: [Prisma ORM](https://www.prisma.io/)
- **Autenticação e Autorização**: JWT, Bcrypt
- **Princípios de Design**: POO, SOLID

## Rodando a Aplicação

### Pré-requisitos

- Docker instalado na máquina.
- Estar na mesma pasta que o arquivo `docker-compose.yml`

### Comando para Iniciar os Containers (Express)

```
docker-compose up backend-express database frontend -d --build
```

Este comando iniciará os containers com o backend Express, o banco de dados MySQL e a aplicação frontend.

Após executar este comando, é necessário aguardar pelos logs do container do backend Express para verificar se o servidor está sendo iniciado corretamente. Por favor, esteja ciente de que durante o processo de inicialização, também é realizado o seeding do banco de dados, o que pode atrasar um pouco o início do servidor de backend. Para acompanhar os logs, utilize o seguinte comando:

```
docker logs api-receita-express -f
```

Espere até que os logs exibam a mensagem indicando que o servidor está em execução:

```
> backend@1.0.0 dev > ts-node-dev src/server.ts  [INFO] 17:38:50 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.3.3) 
> Running on port 3001
```

Isso indica que o backend Express está sendo executado na porta 3001.

### Comando para Iniciar os Containers (NestJS)

```
docker-compose up backend-nest database frontend -d --build
```

Este comando iniciará os containers com o backend NestJS, o banco de dados MySQL e a aplicação frontend.

Após executar este comando, é necessário aguardar pelos logs do container do backend NestJS para verificar se o servidor está sendo iniciado corretamente. Por favor, esteja ciente de que durante o processo de inicialização, também é realizado o seeding do banco de dados, o que pode atrasar um pouco o início do servidor de backend. Para acompanhar os logs, utilize o seguinte comando:

```
docker logs api-receita-nest -f
```

Espere até que os logs exibam a mensagem indicando que o servidor está em execução:

```
[Nest] 187  - 03/11/2024, 6:10:37 PM     LOG [NestApplication] Nest application successfully started +79ms

```

Isso indica que o backend NestJS está sendo executado corretamente.

#### Finalizando os Containers

Após o uso da aplicação, para finalizar os containers, execute o seguinte comando:

```
docker-compose down -v
```

Este comando encerrará todos os containers e também removerá os volumes associados.

Para acessar a aplicação frontend, visite: [http://localhost:3000](http://localhost:3000/)

O backend estará disponível em: [http://localhost:3001](http://localhost:3001/)

## Endpoints Disponíveis

### Autenticação de Usuário

#### Login de Usuário

- **Método**: POST
- **URL**: `http://localhost:3001/user/login`
- **Body**:
    
    `{   "username": "email2@email.com",   "password": "123456" }`
    
- **Resposta**:
    
    `{   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJlbWFpbDJAZW1haWwuY29tIiwiaWF0IjoxNzEwMTg3NTczLCJleHAiOjE3MTAyNzM5NzN9.ZNab7H_TAuJD19Oe2CYrzouFgH6TD_o7ISzx6gGFV8I" }`
    

#### Cadastro de Usuário

- **Método**: POST
- **URL**: `http://localhost:3001/user/signup`
- **Body**:
    
    `{   "name": "user04",   "username": "email4@email.com",   "password": "1234567" }`
    
- **Resposta**:
    
    `{   "name": "user04",   "username": "email4@email.com" }`
    

### Receitas

#### Listar Todas as Receitas de Comida

- **Método**: GET
- **URL**: `http://localhost:3001/meal`
- **Headers**: Autorization Bearer Token
- **Resposta**: Lista de objetos JSON representando receitas de comida.

#### Listar Todas as Receitas de Bebida

- **Método**: GET
- **URL**: `http://localhost:3001/drink`
- **Headers**: Autorization Bearer Token
- **Resposta**: Lista de objetos JSON representando receitas de bebida.

#### Listar Categorias de Receitas de Comida

- **Método**: GET
- **URL**: `http://localhost:3001/meal/category`
- **Headers**: Autorization Bearer Token
- **Resposta**: Lista de objetos JSON representando categorias de receitas de comida.

#### Listar Categorias de Receitas de Bebida

- **Método**: GET
- **URL**: `http://localhost:3001/drink/category`
- **Headers**: Autorization Bearer Token
- **Resposta**: Lista de objetos JSON representando categorias de receitas de bebida.

#### Listar Receitas de Comida por Categoria

- **Método**: GET
- **URL**: `http://localhost:3001/meal/category/Beef` 
- **Headers**: Autorization Bearer Token
- **Resposta**: Lista de objetos JSON representando receitas de comida na categoria especificada.

#### Listar Receitas de Bebida por Categoria

- **Método**: GET
- **URL**: `http://localhost:3001/drink/category/Cocktail` 
- **Headers**: Autorization Bearer Token
- **Resposta**: Lista de objetos JSON representando receitas de bebida na categoria especificada.

#### Obter Detalhes de uma Receita de Comida

- **Método**: GET
- **URL**: `http://localhost:3001/meal/13332` 
- **Headers**: Autorization Bearer Token
- **Resposta**: Objeto JSON representando os detalhes de uma receita de comida.

#### Obter Detalhes de uma Receita de Bebida

- **Método**: GET
- **URL**: `http://localhost:3001/drink/12450` 
- **Headers**: Autorization Bearer Token
- **Resposta**: Objeto JSON representando os detalhes de uma receita de bebida.

### Favoritos e Concluídos

#### Listar Receitas Favoritas de um Usuário

- **Método**: GET
- **URL**: `http://localhost:3001/favorites/`
- **Headers**: Autorization Bearer Token
- **Resposta**: Objeto JSON representando as receitas favoritas do usuário.

#### Listar Receitas Concluídas por um Usuário

- **Método**: GET
- **URL**: `http://localhost:3001/dones/`
- **Headers**: Autorization Bearer Token
- **Resposta**: Objeto JSON representando as receitas concluídas pelo usuário.

#### Marcar uma Receita como Favorita

- **Método**: POST
- **URL**: `http://localhost:3001/favorites`
- **Headers**: Autorization Bearer Token
- **Body**:
    
    jsonCopy code
    
    `{   "recipeId": 12450 }`
    
- **Resposta**:
    
    jsonCopy code
    
    `{   "favorite": true }`
    

#### Marcar uma Receita como Concluída

- **Método**: POST
- **URL**: `http://localhost:3001/dones`
- **Headers**: Autorization Bearer Token
- **Body**:
    
    jsonCopy code
    
    `{   "recipeId": 12450 }`
    
- **Resposta**:
    
    jsonCopy code
    
    `{   "dones": false }`
