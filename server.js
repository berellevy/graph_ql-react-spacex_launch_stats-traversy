
const bodyParser =  require('body-parser');
const express = require('express')

const { graphqlHTTP} = require('express-graphql')
const schema = require( './schema.js')

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));