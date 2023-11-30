"use client"
import Neo4jC from "@/components/Neo4jComponent";
import TextInput from "@/components/TextInput";
import Checkbox from "@/components/CheckBox";
import { useState } from "react";
import GraphVisualization from '@/components/GraphVisualization';
import CheckboxComponent from '@/components/CheckboxComponent';
import session from '@/utils/neo4j'; // Importa el cliente Neo4j
import neo4jDriver from '@/utils/neo4j';


function HomePage(){
  //Another CheckBox
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const anotherHandleBox = async (checkboxValues) => {
    try {
      // Conectar a Neo4j usando el driver
      const session = neo4jDriver.session();
      // Construir y ejecutar consultas según las selecciones de checkboxes
      const cypherQuery = buildCypherQuery(checkboxValues);
      const result = await session.run(cypherQuery);
      // Procesar el resultado de la consulta
      console.log('Neo4j query result:', result.records);
      // Cerrar la sesión de Neo4j
      session.close();
    } catch (error) {
      console.error('Error executing Neo4j query:', error);
    }
  };
  const buildCypherQuery = (checkboxValues) => {
    // Construir la consulta Cypher según las selecciones de checkboxes
    // Este es solo un ejemplo, deberías ajustar según tu modelo de datos y lógica
    const checkboxes = Object.keys(checkboxValues).filter(
      (checkbox) => checkboxValues[checkbox]
    );

    const cypherQuery = `
      MATCH (n:Node)-[:RELATIONSHIP]->(m:Node)
      WHERE n.property IN [${checkboxes.map((checkbox) => `"${checkbox}"`).join(', ')}]
      RETURN n, m
    `;

    return cypherQuery;
  };



  //Check-Box
  const [isChecked, setIsChecked] = useState(false);
  const [resultData, setResultData] = useState(null);

  const handleCheckboxChange = async (newCheckedState) => {
    setIsChecked(newCheckedState);

    if (newCheckedState) {
      try {
        const result = await session.run('MATCH (n) return n limit 10')
        // const result = await session.run('MATCH (p:Pelicula)-[:CLASIFICADA_COMO]->(c:Clasificacion)WHERE cC1 IN ["PG", "PG-13"]RETURN p.P1 AS tituloPelicula, c.C1 AS clasificacion');
        setResultData(result.records.map(record => record.get('n').properties));
      } catch (error) {
        console.error('Error fetching data from Neo4j:', error);
      }
    } else {
      setResultData(null);
    }
  };
  //Text-Box
  const [displayText, setDisplayText] = useState('');
  const handleTextChange = (newText) => {
    setDisplayText(newText);
  };

  return(
    // <div>HomePage</div>
    <section>
      <div>
        <h1>Next.js Neo4j Integration</h1>
        <CheckboxComponent onCheckboxChange={anotherHandleBox} />
      </div>
      {/* <div>
        <h1>Visualización del Grafo Neo4j</h1>
        <GraphVisualization containerId="graph-container" />
      </div> */}
      <div>
        <h1>Texto Ingresado:</h1>
        <TextInput onTextChange={handleTextChange} />
        <p>{displayText}</p>
      </div>
      <Neo4jC></Neo4jC>
      <div>
        <h1>Realizar Consulta a Neo4j:</h1>
        <Checkbox onCheckboxChange={handleCheckboxChange} />
        {isChecked && (
          <div>
            <h2>Resultado de la Consulta:</h2>
            <ul>
              {resultData &&
                resultData.map((item, index) => (
                  <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </section>
    // ,<div>Hola</div>,
    // 
  )
}

export default HomePage