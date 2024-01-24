## 💻 Projeto Meu Cachorro favorito 
- [Repo App](https://github.com/IsakielSouza/my-favorite-dogs):https://github.com/IsakielSouza/my-favorite-dogs
  
## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node]()
- [Expo]()
- [Typescript]()
- [Axios]()
- [Context-API]()
- [Async Storage]()
- [React Navigation native-stack]()
- [React Navigation bottom-tabs]()
- [Styled Components]()
- [React Hook Form]()
- [Material Icons]()
- [yup]()
- [React Native Svg]()
- [Expo Image Picker]()

## 🔖 API
## Micro serviço de autenticação:
- Base URL https://api-jwt-jl1g.onrender.com
- Repo: https://github.com/IsakielSouza/api-jwt

## Micro serviço The Dog:
- Api usada para popular app utilizado como referencia: https://publicapis.dev/
- https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z#intro

## 🚀 Como executar

Se você já instalou o Node e Expo em seu sistema, certifique-se de que a versão do Node é `>= 20.10.0`.
- Clone o repositório
- Instale as dependências com `npm`
- Execute comando `npx expo start`

```bash
# Clone this repository
$ git clone https://github.com/isakielsouza/my-dog-favorite.git

# Go into the repository
$ cd my-dog-favorite

# Install dependencies
$ npx install

# Run the app
$ npx expo start
```

## Faça Login:
![SignIn](/github/SignIn.png)
### Certifique-se obedecer os requisitos:
![SignIn-validação](/github/SignIn-validacao.png)

 ## Crie sua conta:
![SignUp](/github/SignUp.png)
### Certifique-se obedecer os requisitos:
![SignUp-validação](/github/SignUp-validacao.png)

Screen Home
![Home](/github/Home.png)

Screen Favorite
![Favorite](/github/Favorite.png)


# Principais funcionalidades do App:

- Login com Autenticação JWT
- Login automático com apos 1° sessão
- Cadastro de Usuário
- Sair da conta (SignOut)
- Listagem de dogs Aleatória
- Favoritar um Dog
- Dislike Dog(Remover favorito)
- Armazenamento no celular lista de dogs favoritos.


# Instruções Gerais:
[X] Crie um projeto Expo (último SDK) usando React Native, Styled Components, e TypeScript.
[X] Utilize a biblioteca Axios para integrar com a API de sua escolha.
[X] Implemente um sistema de autenticação utilizando JWT.
[X] Guarde as informações do login em cache para permitir o acesso sem a necessidade
de fazer login novamente assim como qualquer informação que deva ser armazenada e
exibida ao abrir o app.

# Parte 1: Configuração do Projeto
[X] Inicie um novo projeto Expo com TypeScript.
[X] Instale as bibliotecas necessárias: Styled Components, Axios e as demais de sua preferência.

# Parte 2: Implementação do CRUD
[X] Consuma alguma API aberta para popular o app com dados. A API pode ser uma de sua escolha ou utilize
o link abaixo como sugestão: https://publicapis.dev/
[X] Crie as telas necessárias para realizar as operações CRUD no aplicativo.
[X] No app deve ser possível favoritar algum tipo de dado. Faça isso armazenando as informações em cache

# Parte 3: Implementação do Sistema de Login
[X] Crie uma tela de login no aplicativo.
[X] Utilize JWT para autenticar os usuários. Implemente a lógica de autenticação usando a API fornecida.
[X] Armazene as informações do login em cache para permitir o acesso contínuo ao aplicativo sem a necessidade de fazer
login repetidamente.

# Parte 5: Estilo e Organização do Código
[X] Utilize Styled Components para a estilização do aplicativo.
[X] Mantenha uma estrutura de código organizada e seguindo as melhores práticas do React Native e TypeScript.

Observações:
[X] Documente o código conforme necessário.
[X] Ao concluir o teste, forneça um README explicando como executar o aplicativo/
[ ] Ao concluir, envie uma pasta compactada com o projeto para o e-mail
[ ] Esling para padronizar code