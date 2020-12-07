# Node - Typescript - Docker - MySQL Example

**Run without docker**

- Create `.env` file example

```.env
  SERVER_PORT=3000
  DATABASE_HOST=db
  DATABASE_USER=root
  DATABASE_PORT=3306
  DATABASE_PASSWORD=thangtran
  DATABASE_NAME=test
```

- `yarn`

- Run `yarn dev` for dev or `yarn build` and `yarn start` for production

**Run with docker** `docker-compose -f docker-compose.dev.yml up`
