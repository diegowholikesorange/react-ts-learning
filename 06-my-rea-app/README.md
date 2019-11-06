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
1. Add Apollo packages
    ```
    yarn add apollo-boost react-apollo react-apollo-hooks graphql-tag graphql
    ```
1. Add Apollo client to web-app
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import ApolloClient from 'apollo-boost';
    import { ApolloProvider } from 'react-apollo';
    import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
    import './index.css';
    import App from './App';
    
    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
    });
    
    ReactDOM.render(
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <App/>
            </ApolloHooksProvider>
        </ApolloProvider>,
        document.getElementById('root'),
    );
    
    ```    
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
1. Create a simple component ```/src/components/HelloWorld/HelloWorld.tsx```
    ```
    import * as React from 'react';
    import { HelloQuery } from '../../generated/graphql';
    
    interface Props {
        data: HelloQuery;
    }
    
    const HelloWorld: React.FC<Props> = ({ data }) => (
        <div>
            {data.hello}
        </div>
    );
    
    export default HelloWorld;
    ```
1. Create a container to deal with the query and loading logic ```/src/components/HelloWorld/index.tsx```:
    ```
    import * as React from 'react';
    import {useHelloQuery} from "../../generated/graphql";
    import HelloWorld from "./HelloWorld";
    
    const HelloWorldContainer = () => {
    
        const { data, error, loading } = useHelloQuery();
    
        if (loading) {
            return <div>Loading...</div>;
        }
        if (error || !data) {
            return <div>ERROR: error</div>;
        }
        return <HelloWorld data={data} />;
    };
    
    export default HelloWorldContainer;
    ```    
1. Run server via ```yarn start```, then client via ```yarn start```

# Troubleshooting
## Error: listen EADDRINUSE :::4000
Just run a 
```
killall -9 node
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
