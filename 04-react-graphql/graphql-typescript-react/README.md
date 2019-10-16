Page that downloads SpaceEx launches and 
details from the SpaceX GraphQL API. The
 update of launch details when selecting a different
 launch in the list on the left does not work (I stopped there).


I followed this tutorial

https://blog.logrocket.com/build-a-graphql-react-app-with-typescript/

but used the updated SpaceX URL 

https://api.spacex.land/graphql/

To start:
```yarn start```

To regenerate the types and hooks:
```yarn codegen```
 
- The schema is remote on spaceex
- The generator downloads the schema and creates types (interfaces) with all fields in graphql.tsx
- The generator also creates query types (typed hooks) for the query expressions defined in the component's query.ts
