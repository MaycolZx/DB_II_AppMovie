// neo4j.js
const neo4j = require('neo4j-driver');

const { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD } = process.env;

const driver = neo4j.driver('bolt://35.170.65.157:7687', neo4j.auth.basic('neo4j', 'pennant-cups-itineraries'));

const runCypherQuery = async (query) => {
    const session = driver.session();
  
    try {
      const result = await session.run(query);
      return result.records.map(record => record.toObject());
    } finally {
      await session.close();
    }
};  
module.exports = runCypherQuery;


// const session = driver.session();

// module.exports = session;
