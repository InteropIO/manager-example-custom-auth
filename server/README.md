How to run :

1. Add a .npmrc file with the following content (placeholders can be filled in after setting up JFrog account)
```sh
registry=https://registry.npmjs.org
@interopio:registry=https://glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:_auth=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:email=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:always-auth=true
```

2. Make sure you have a MongoDB  running at **mongodb://localhost:27017/server** (you can change the connection string in the server.ts file if needed or switch to another database)

3. Execute 
```sh
npm i
npm run start
```

