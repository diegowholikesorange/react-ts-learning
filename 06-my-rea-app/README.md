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
### Server
1. Test query in playground:
    ```
    query{
      hello(name:"Guru")
    }
    ```
### Client    
1. Create src/components/HelloWorld/query.ts
    ```
    import gql from 'graphql-tag';
    
    export const HELLO_QUERY = gql`
        query HelloQuery {
            hello(name:"Guru")
        }
    `
    ```
1. Add the generator (https://graphql-code-generator.com/docs/getting-started/#installation)
    ```
       yarn add graphql
       yarn add -D @graphql-codegen/cli
       $(npm bin)/graphql-codegen init
    ```
   in the init process, specify the following parameters:
   
   - What type of application are you building? ```Application built with React```
   - Where is your schema?: (path or url) ```http://localhost:4000```
   - Where are your operations and fragments?: ```./src/components/**/*.{ts,tsx}```
   - Pick plugins: use defaults
       - TypeScript (required by other typescript plugins)
       - TypeScript Operations (operations
        and fragments)
       - TypeScript React Apollo (typed components and HOCs)
   - Where to write the output: ```src/generated/graphql.tsx```
   - Do you want to generate an introspection file? ```No```
   - How to name the config file? ```codegen.yml```
   - What script in package.json should run the codegen? ```codegen```
   
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
   This generates the file 
    ```
    06-my-rea-app/my-rea-client/src/generated/graphql.tsx
    ```
1. Create 

# Troubleshooting
## Error: listen EADDRINUSE :::4000
Just run a 
```
killall -9 node
```

## Cannot find module '@apollo/react-common'.  TS2307
When running ```yarn start``` in the client. Fix:
```
npm install @apollo/react-common
yarn
```


# Setting up Dependencies
## Installing Node & Yarn on Linux
```
nvm install stable
npm install -g npm
node install yarn
```

# References
https://blog.logrocket.com/build-a-graphql-react-app-with-typescript/
