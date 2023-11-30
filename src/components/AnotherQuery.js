// pages/index.js
import React, { useEffect, useState } from 'react';
import runCypherQuery from '@/utils/neo4j'; // Ajusta la ruta según tu estructura de carpetas

const Home = ({ data , otherData}) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const query  = 'MATCH (p:Pelicula)-[:CLASIFICADA_COMO]->(c:Clasificacion) WHERE c.C1 IN ["PG", "PG-13"] RETURN p.P1 AS tituloPelicula, c.C1 AS clasificacion';
        // const query  = {otherData};

        // const query = 'MATCH (p:Person)-[:FRIENDS_WITH]->(friend:Person) WHERE p.name = "Alice" RETURN p, friend';
        const result = await runCypherQuery(otherData);
        
        console.log('Resultado de la consulta:', result);
        setResult(result);
      } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Resultados de la consulta:</h1>
      <ul>
        {result.map((record, index) => (
          <li key={index}>{JSON.stringify(record)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
