# Backend

Essa app tem como objetivo prover o backend. Basicamente a app disponibiliza uma API Rest de candidatos fake usando [JSON Server](https://github.com/typicode/json-server) e [Faker](https://github.com/Marak/faker.js).

GET http://localhost:3000/candidates

```json
[
  {
    "id": 3,
    "imageUrl":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWfkA6fPozy8qlbL8q282B2jWo10s-UK2bYFLv1b_v32r5TAF",
    "name": "Raoul Marquardt",
    "newThisWeek": true,
    "career": "Chief Security Representative",
    "lastCompanies": [
      "Thompson, Hintz and Walker",
      "Aufderhar, Goldner and Dach",
      "Predovic, Gutkowski and Lubowitz"
    ],
    "university": "Kentucky",
    "cities": ["Lake Bridgette", "Abeton"],
    "mainSkills": ["Creative", "Solutions"]
  }
]
```

# O App

Para tal segue algumas features sobre o app:

* Layout de acordo com o [Wireframe](https://projects.invisionapp.com/share/BXH5LB3HEMP#/screens)
* Candidatos ordenados por ordem alfabética
* Poder remover candidatos da lista
* Poder favoritar candidatos da lista

# Como subir esta App

## Via npm

Baixe o repositorio e rode os comandos a seguir e o servidor estará rodando em
`http://localhost:3000`

```
npm install
npm start
```

## Via docker

Baixe o repositorio e rode os comandos a seguir e o servidor estará rodando em
`http://localhost:3000`

```
docker build --no-cache -t frontend:test .
docker run -p 3000:3000 frontend:test
```
