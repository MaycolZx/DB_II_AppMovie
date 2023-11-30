// // components/GraphVisualization.js
// import React, { useEffect } from 'react';
// import NeoVis from 'neovis.js';

// const GraphVisualization = ({ containerId }) => {
//   useEffect(() => {
//     const config = {
//       container_id: containerId,
//       server_url: 'bolt://44.199.230.246:7687', // Reemplaza con tu URI de Neo4j
//       server_user: 'neo4j',       // Reemplaza con tu usuario de Neo4j
//       server_password: 'hotel-establishments-eddies', // Reemplaza con tu contraseña de Neo4j
//       labels: {
//         'Person': {
//           caption: 'name',
//           size: 'pid',
//         },
//       },
//       relationships: {
//         'FOLLOWS': {
//           thickness: 'weight',
//           caption: false,
//         },
//       },
//     };

//     const graph = new NeoVis(config);

//     // const query = `
//     //   MATCH (p:Person)-[r:FOLLOWS]->(f:Person)
//     //   RETURN p, r, f
//     //   LIMIT 100
//     // `;
//     // const query = `MATCH (n) RETURN n LIMIT 5`;
//     const query = `MATCH (n)-[r]->(m) RETURN n, r, m LIMIT 10`;
    
//     graph.renderWithCypher(query);
//   }, [containerId]);

//   return <div id={containerId} style={{ height: '400px' }}></div>;
// };

// export default GraphVisualization;
