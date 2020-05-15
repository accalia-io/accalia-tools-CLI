# Accalia-Tools CLI

Create your Full-Stack project

# Installation

- Using npm:

> `npm install -g @accalia.io/accalia-tools` 

- Using yarn: 

> `yarn global add @accalia.io/accalia-tools` 

## Project Usage

- Creates a `ProjectName` directory and installs **api**, **web** and **app**:

```sh
accalia-tools init ProjectName
```

- Creates a `ProjectName` directory but only installs **api** and **app**:

```sh
accalia-tools init ProjectName --only=api,app,web
```

- Install only **web** on current directory:

```sh
accalia-tools init . --only=web
```

## Backend Options

- Create a empty Model using Sequelize:

```sh
accalia-tools generate:model ModelName
```

- Create a empty Model using Mongoose:

```sh
accalia-tools generate:model ModelName
```

- Create a empty Controller:

```sh
accalia-tools generate:controller ControllerName
```

- Create a CRUD controller using Sequelize:

```sh
accalia-tools generate:crud ModelName
```

- Create a CRUD controller using Sequelize and create Model:

```sh
accalia-tools generate:crud ModelName --model
```

## Frontend Options

- Create a Component:

```sh
accalia-tools generate:component ComponentName
```

- Create a Page:

```sh
accalia-tools generate:controller PageName
```

# License

MIT - see LICENSE
