# PokeReact

THis is a App with which show some pokemos and its stats.

It was develop by React.

It shows like that.

<br/>

![img](/img/screen.png)

<br/>
<br/>

## Before to Start

1. Install Node
2. Install npm
3. Install React

## To show on browser

1. Run
```powershell
$ npx install
```
2. Run
```powershell
$ npm start
```
- Open your browser at http://localhost:1234

## If you can use Docker

### Requirements

- Docker

_Docker dependencies_

- Node
- Yarn
- Parcel v1
- React & React DOM

### Get started

- Clone the repo
- build the attached Docker image
  ```bash
  docker build -t codeableorg/pokereact .
  ```
- Run your docker container with yarn install

  ```bash
  docker run --name pokereact -it -v $(pwd):/app --rm codeableorg/pokereact yarn install
  ```

- Run your docker container without a command, it will run the one set by default (`yarn start`).
  ```bash
  docker run --name pokereact -it -v $(pwd):/app -p 1234:1234 -p 12345:12345 --rm codeableorg/pokereact
  ```
- Open your browser at http://localhost:1234

<br/><br/>

Ready, you can enjoy!

<br/><br/>

*Made by Monito Inc. 🙊*


