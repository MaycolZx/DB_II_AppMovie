import CheckBoxComponentTotal from "@/components/CheckTotal";

export default function OptionNeto() {
    const queryOne  = 'MATCH (p:Pelicula)-[:CLASIFICADA_COMO]->(c:Clasificacion) WHERE c.C1 IN ["PG", "PG-13"] RETURN p.P1 AS tituloPelicula, c.C1 AS clasificacion';
    const queryTwo  = 'MATCH (p:Pelicula) RETURN p.P1 AS tituloPelicula, p.P2 AS popularidad ORDER BY p.P2 DESC LIMIT 10';
    const queryThree  = 'MATCH (p:Pelicula)-[:ESTA_EN]->(i:Idiomas)  RETURN i.E1 AS Idioma, COUNT(p.P1) AS Numero_de_Peliculas ORDER BY Numero_de_Peliculas DESC';
    const queryFour  = 'MATCH (p:Pelicula)-[:PRODUCIDA_EN]->(pa:Pais) WHERE p.P2 >= 2018 AND p.P2 <= 2020 RETURN p.P1 AS Pelicula, pa.PA1 AS Pais, p.P2 AS Estreno ORDER BY p.P2';
    const queryFive  = 'MATCH (p:Pelicula)-[:CLASIFICADA_COMO]->(c:Clasificacion) WHERE p.P5 IS NOT NULL WITH c.C1 AS Clasificacion, COUNT(p.P5) AS FrecuenciaDuracion ORDER BY FrecuenciaDuracion DESC WITH Clasificacion, FrecuenciaDuracion, REDUCE(s = 0, x IN COLLECT(FrecuenciaDuracion) | s + x) AS TotalFrecuencia WITH Clasificacion, FrecuenciaDuracion, TotalFrecuencia, REDUCE(s = 0, x IN COLLECT(FrecuenciaDuracion) | CASE WHEN s + x >= TotalFrecuencia / 2.0 THEN x ELSE s END) AS MedianaFrecuencia RETURN Clasificacion, MedianaFrecuencia ORDER BY MedianaFrecuencia DESC LIMIT 2';

    const querySix  = 'MATCH (g:Genero)-[:ASOCIADO_A]->(p:Premios) WITH g.GE1 AS Genero, COUNT(p) AS Numero_de_Premios WITH Genero, Numero_de_Premios, sum(Numero_de_Premios) AS Total_de_Premios WITH Genero, Numero_de_Premios, CASE WHEN Total_de_Premios > 0 THEN toFloat(Numero_de_Premios) / Total_de_Premios ELSE 0 END AS Probabilidad ORDER BY Probabilidad DESC LIMIT 1 RETURN Genero, Probabilidad';


    const querySeven  = 'MATCH(p:Pelicula)-[:DIRIGIDA_POR]->(d:Director) WITH d, COUNT(p.P1) AS Peliculas ORDER BY Peliculas DESC LIMIT 10 WITH COLLECT(d) AS TopDirectores UNWIND TopDirectores AS d MATCH (d)<-[:DIRIGIDA_POR]-(p:Pelicula)<-[:PARTE_DE]-(r:Reparto) WITH d, r, p UNWIND [r.R1, r.R2, r.R3, r.R4, r.R5, r.R6] AS actor WITH d, actor, COLLECT(DISTINCT p.P1) AS Peliculas WHERE SIZE(Peliculas) > 1 RETURN d.D1 AS Director, actor AS Actor, Peliculas AS Peliculas ORDER BY Director, Actor';

    const queryEight  = 'MATCH (p:Pelicula)-[:PRODUCIDA_POR]->(e:Empresa) WITH p, e, AVG(p.P3) AS Promedio ORDER BY Promedio DESC WITH e, COLLECT({Pelicula: p.P1, Calificacion: Promedio}) AS datosPelicula WITH e, datosPelicula[0] AS MejorPelicula, datosPelicula[-1] AS PeorPelicula RETURN e.E1 AS Empresa,MejorPelicula.Pelicula AS MejorPelicula,MejorPelicula.Calificacion AS MejorCalificacion,PeorPelicula.Pelicula AS PeorPelicula,PeorPelicula.Calificacion AS PeorCalificacion';


    const queryNine  = 'MATCH (p:Pelicula)-[:DIRIGIDA_POR]->(d:Director) WITH d.D1 AS Director, COUNT(p) AS Peliculas ORDER BY Peliculas DESC LIMIT 5 WITH collect(Director) AS TopDirectors MATCH (p:Pelicula)-[:DIRIGIDA_POR]->(d:Director), (p)-[:GANO_UN]->(pe:Premios), (p)-[:PERTENECE_A]->(g:Genero) WHERE d.D1 IN TopDirectors WITH d.D1 AS Director, g.GE1 AS Genero, p.P2 AS Año, COUNT(pe) AS Premios RETURN Director, Genero, Año, Premios ORDER BY Premios DESC, Genero, Año LIMIT 5';
    const queryTen  = 'MATCH (actor:Reparto)-[:PARTE_DE]->(p:Pelicula)-[:PRODUCIDA_EN]->(pais:Pais) WITH actor, pais, count(p) AS numeroPeliculas, collect(p) AS peliculas ORDER BY numeroPeliculas DESC WITH pais, head(collect({actor: actor, numeroPeliculas: numeroPeliculas, peliculas: peliculas})) AS datosActor RETURN pais.PA1 AS Pais, datosActor.actor.R1 AS Actor, datosActor.numeroPeliculas AS NumeroPeliculas';
  return (
    <div>
      <div>
        {/* <h1>Clasificacion por Edad</h1> */}
        <CheckBoxComponentTotal labelText="CLASIFICACION POR EDAD" queryNueva={queryOne} />
      </div>
      <div>
        {/* <h1>Popularidad pelicula</h1> */}
        <CheckBoxComponentTotal labelText="Popularidad pelicula" queryNueva={queryTwo}/>
      </div>
      <div>
        {/* <h1>Idiomas con mas peliculas</h1> */}
        <CheckBoxComponentTotal labelText="Idiomas con mas peliculas" queryNueva={queryThree}/>
      </div>
      <div>
        {/* <h1>Filtrar por anios de estreno</h1> */}
        <CheckBoxComponentTotal labelText="Filtrar por anios de estreno" queryNueva={queryFour}/>
      </div>
      <div>
        {/* <h1>La mediana de la clasificacion por duracion</h1> */}
        <CheckBoxComponentTotal labelText="La mediana de la clasificacion por duracion" queryNueva={queryFive}/>
      </div>
      <div>
        {/* <h1>Probabilidad de que un genero reciba mas premios</h1> */}
        <CheckBoxComponentTotal labelText="Probabilidad de que un genero reciba mas premios" queryNueva={querySix}/>
      </div>
      <div>
        {/* <h1>
          De los 10 directores con mas peliculas, actores que han trabajado con
          uno de esos directores en más de una película, dar el numero de pelis
        </h1> */}
        <CheckBoxComponentTotal labelText="De los 10 directores con mas peliculas, actores que han trabajado con uno de esos directores en más de una película, dar el numero de pelis" queryNueva={querySeven}/>
      </div>
      <div>
        {/* <h1>
          LA EMPRESA MEJOR CALIFICADA POR PELICULA Y LA PEOR CALIFICADA POR
          PELICULA
        </h1> */}
        <CheckBoxComponentTotal labelText="La empresa mejor calificada por pelicula y la peor calificada por pelicula" queryNueva={queryEight}/>
      </div>
      <div>
        {/* <h1>
          De los 5 , directores que dirigieron mas peliculas, dame el director
          mas premiado por genero y el año de estreno en que salio la pelicula
          en la que fue premiado.
        </h1> */}
        <CheckBoxComponentTotal labelText="De los 5 , directores que dirigieron mas peliculas, dame el director mas premiado por genero y el año de estreno en que salio la pelicula en la que fue premiado." queryNueva={queryNine}/>
      </div>
      <div>
        {/* <h1>ACTOR MAS POPULAR POR NUMERO DE PELICULAS POR CADA PAIS</h1> */}
        <CheckBoxComponentTotal labelText="Actor mas popular po numero de peliculas por cada pais" queryNueva={queryTen}/>
      </div>
    </div>
  );
}
