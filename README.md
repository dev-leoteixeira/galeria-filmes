## Título 
> MVP, projeto final PIPOCAFILMES do 3° módulo da Pós-Graduação em Desenvolvimento Full-Stack da PUC-RIO.

## Funcionalidades
> Tela de login:
- Avisar quando os campos estão vázios na tentativa de login
- Avisar quando não encontrar login no localstorage(key: user_db)

> Tela de Cadastro:
- Adicionar um novo login no localstorage(key: user_db)
- Criar verificação de login já cadastrado no localstorage(key: user_db)
- Criar verificação de e-mail, avisar quando não for iguais.
- Verificar quantidade de caracteres no password, não pode ser menor que 6, (mínimo uma letra / mínimo um numero).

> Tela de Filmes:
- Exibe a lista de filmes
- Exibe opção de assistir trailer dos filmes
- Exibe opção de ver sinopse dos filmes
- Adiciona filmes aos favoritos
- Exibe ícone dos favoritos
- Adicionar um token no locastorage(key: user_token) quando o login for efetuado
- Remover Token quando realizar logoff

> Tela Favoritos:
- Exibe os filmes favoritos
- Exibe opção de assistir trailer dos filmes
- Exibe opção de ver sinopse dos filmes
- Remove filmes da lista dos favoritos

## Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
git clone 
```
Instalar o npm
```
npm i
```
Executar o projeto
```
npm run start
```
> O Projeto será iniciado em : http://localhost:3000

# Projeto Figma

> https://www.figma.com/proto/1rPQm8VLVFHbMP9nCtE7Ih/Mvp-Sprint3-Galeria-Filmes?t=kohVqlqGz10qmHCd-1


## Histórico de comandos
Iniciando o projeto com React
```
npx create-react-app
```
Instalando bibliotecas style-components
```
yarn add style-components
```
Instalando bibliotecas react-router-dom
```
yarn add react-router-dom
```
