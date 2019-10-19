# My REA App

## Project Creation

The frontend was created with [Create React App](https://github.com/facebook/create-react-app):
```
npx create-react-app my-rea-client --typescript
```
and is started with 
```yarn start```.

The grapqhl server was created with Graphql boilerplate [GraphQL Boilerplates](https://github.com/graphql-boilerplates/typescript-graphql-server):
```
npm install -g graphql-cli
graphql create my-rea-server
```
and is started using ```yarn start```. Then use the playground on http://localhost:4000/.

## History of Creation
1. Server: tested query in playground:
    ```
    query{
      hello(name:"Guru")
    }
    ```
1. Client: created src/components/HelloWorld/query.ts
1. Add the generator (https://graphql-code-generator.com/docs/getting-started/#installation)
    ```
       yarn add graphql
       yarn add -D @graphql-codegen/cli
       $(npm bin)/graphql-codegen init
    ```
   in the init process, specify the following parameters:
   
   - What type of application are you building? Application built with React
   - Where is your schema?: (path or url) http://localhost:4000
   - Where are your operations and fragments?: ./src/components/**/*.{ts,tsx}
   - Pick plugins: TypeScript (required by other typescript plugins), TypeScript Operations (operations
    and fragments), TypeScript React Apollo (typed components and HOCs)
   - Where to write the output: src/generated/graphql.tsx
   - Do you want to generate an introspection file? No
   - How to name the config file? codegen.yml
   - What script in package.json should run the codegen? codegen
   
   Then run
   ```
   yarn
   ```
   
1. Update codegen.yml to read like this:
```
overwrite: true
schema: "http://localhost:4000"
documents: "./src/components/**/*.{ts,tsx}"
generates:
  src/generated/graphql.tsx:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
    config:
      withHooks: true
```

1. Run the generation
    ```
    npm run codegen
    ```
   This generates files 

