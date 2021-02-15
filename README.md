The process which used to install dependencies in react-typescript project
 
yarn add graphql graphql-tag @apollo/client

yarn add -D @graphql-codegen/cli

yarn add -D @graphql-codegen/typescript-operations

yarn graphql-codegen init

This will launch a CLI wizard. Do the following steps:


Application built with React.

The schema is located at https://spacexdata.herokuapp.com/graphql.

Set your operations and fragments location to ./src/components/**/*.{ts,tsx} so that it will search all our TypeScript files for query declarations.

Use the default plugins “TypeScript”, “TypeScript Operations”, “TypeScript React Apollo.”

Update the generated destination to src/generated/graphql.tsx (.tsx is required by the react-apollo plugin).

Do not generate an introspection file.

Use the default codegen.yml file.

Make your run script codegen.

Now install the plugins the CLI tool added to your package.json by running the yarn command in your CLI.

We will also make one update to our codegen.yml file so that it will also generate typed React Hook queries by adding the withHooks: true configuration option. Your configuration file should look like the following:

   overwrite: true
   schema: 'https://spacexdata.herokuapp.com/graphql'

   documents: './src/components/**/*.ts'

   generates:

   src/generated/graphql.tsx:  

      plugins:

      - 'typescript'

      - 'typescript-operations'

      - 'typescript-react-apollo'

      config:

         withHooks: true
  
