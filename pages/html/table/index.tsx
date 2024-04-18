import Head from "./next/head";

export default function Home() {
  return (
    <>
      <div>
        <h2>Ejemplo de tabla</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan</td>
              <td>25</td>
              <td>Madrid</td>
            </tr>
            <tr>
              <td>María</td>
              <td>30</td>
              <td>Barcelona</td>
            </tr>
            <tr>
              <td>Pedro</td>
              <td>22</td>
              <td>Valencia</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
