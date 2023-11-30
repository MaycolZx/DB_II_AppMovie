// Neo4jComponent.js
"use client"
import React, { useEffect, useState } from 'react';
import session from '@/utils/neo4j'; // Importa el cliente Neo4j

const Neo4jComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromNeo4j = async () => {
      try {
        const result = await session.run('MATCH (n) RETURN n LIMIT 5');
        // const result  = await session.run('MATCH (p:Pelicula)-[:CLASIFICADA_COMO]->(c:Clasificacion) WHERE c.C1 IN ["PG", "PG-13"] RETURN p.P1 AS tituloPelicula, c.C1 AS clasificacion')
        setData(result.records.map(record => record.get('n').properties));
      } catch (error) {
        console.error('Error fetching data from Neo4j:', error);
      }
    };

    fetchDataFromNeo4j();
  }, []);

  return (
    <div>
      <h2>Data from Neo4j</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Neo4jComponent;
