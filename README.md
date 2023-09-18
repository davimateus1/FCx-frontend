# Plataforma de Gestão de Usuários e Emissão de Relatórios

Bem-vindo ao README detalhado do projeto da Plataforma de Gestão de Usuários e Emissão de Relatórios da FCx Labs! Este guia irá ajudá-lo a configurar e executar tanto o front-end quanto o back-end do projeto em sua máquina.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- Node.js
- Yarn

## Front-end

### Configuração do Front-end

1. Baixe o ZIP ou clone o projeto.

2. Abra o projeto no Visual Studio Code (VSCode).

3. No terminal do VSCode, execute o seguinte comando para instalar as dependências necessárias:

```bash
yarn 
```

4. Renomeie o arquivo `.env.example` para `.env`.

5. O back-end foi definido para rodar sempre na porta 3030 do localhost, então não se preocupe com o valor da variável `VITE_API_URL` no arquivo `.env`.

### Executando o Front-end

6. No terminal do VSCode, execute o seguinte comando para iniciar o front-end:

```bash
yarn dev 
```

7. O projeto estará disponível na porta 3000 do seu localhost. Acesse-o em seu navegador:

```bash
http://localhost:3000 
```

## A API utilizada está presente no seguinte repositório: [FCx-backend](https://github.com/davimateus1/FCx-backend)
