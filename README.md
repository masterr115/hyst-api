# HystAPI

# 🇧🇷 Português

<br>

### Project

<br>
Este projeto é baseado na consulta de API's brasileiras, formatando da melhor forma visual, bem como uma melhor busca.

---

# 🧪 Tecnologias usadas

- [TypeScript](https://www.typescriptlang.org) & [Node.js](https://nodejs.org/en/)
- [Axios](https://github.com/axios/axios)
- [Express](https://expressjs.com/pt-br/)
- API's governamentais

---

## 🚀 Começando

Clone o projeto e acesse a pasta

```bash
$ git clone https://github.com/Masterr115/hyst-api.git && cd hyst-api
```

Siga os passos abaixo:

```bash
# Instale as dependências
$ yarn install --production

# Gere o projeto
$ yarn build

# Inicie o projeto
$ yarn start
```

---

# 💻 Rotas (Get)

<br>

```
BASEURL: https://localhost:8080/v1
```

<br>

- `/getStates` : Procure todos os estados existentes em nosso território brasileiro
- `/getCities?state=UF` : Procure todas as cidades de um determinado estado

* Pode ser adicionado uma query na rota acima para uma pesquisa mais completa, `/getCities?state=UF&`_complete=true_

- `/getStateInfo?state=UF` : Procure todas as informações de um determinado estado brasileiro.
- `/getCityInfo?city=Nome&state=UF&` : Procure informações de uma determinada cidade brasileira.
- `/getCEP?cep=CEP` : Procure as informações de um determinado CEP.
- `/geoIP?ip=IP` : Procure informações através de um determinado IP.

- `/getCnpjInfo?cpnj=CPNJ` : Procure informações sobre determinado CNPJ. (Não válido para MEI).

- `/packgeTracking?code=CODE` : Procure informações de uma determinada encomenda nas maiores transportadoras do mercado.

<br>

# 🇺🇸 ENGLISH

<br>

### Project

<br>
This project is based on the consultation of Brazilian API's, formatting in the best visual way, as well as a better search.

---

# 🧪 Tecnologies used

- [TypeScript](https://www.typescriptlang.org) & [Node.js](https://nodejs.org/en/)
- [Axios](https://github.com/axios/axios)
- [Express](https://expressjs.com/pt-br/)
- Government API's

---

## 🚀 Getting started

Clone the project and access the folder

```bash
$ git clone https://github.com/Masterr115/hyst-api.git && cd hyst-api
```

Follow the steps below

```bash
# Install the dependencies
$ yarn install --production

# Build project
$ yarn build

# Start the project
$ yarn start
```

---

# 💻 Routes (GET)

- `/getStates` : Search all the existing states in our Brazilian territory `(Get)`
- `/getCities?state=UF` : Search all cities in a given state

* A query can be added to the route above for a more complete search, `/getCities?state=UF&`_complete=true_

- `/getStateInfo?state=UF` : Search for all the information of a certain Brazilian state
- `/getCityInfo?city=Name&state=UF&` : Search for information about a specific Brazilian city
- `/getCEP?cep=CEP` : Search informations of determined CEP.
- `/geoIP?ip=IP` : Search for information through a given IP.

- `/getCnpjInfo?cpnj=CPNJ` : Look for information about a specific CNPJ. (Not valid for MEI)

- `/packgeTracking?code=CODE` : Search for information about a specific order on the largest carriers in the market

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

Made with 💜 by [André Contiero](https://github.com/Masterr115) 👋
