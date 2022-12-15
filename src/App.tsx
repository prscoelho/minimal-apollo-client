import { useLazyQuery, gql } from "@apollo/client";
import { useEffect } from "react";

let GET_EXAMPLE = gql`
  query Example($id: Int!) {
    example(id: $id) {
      id
    }
  }
`;

function App() {
  let [fetch, queryResult] = useLazyQuery(GET_EXAMPLE, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only'
  });

  useEffect(() => {
    console.log(queryResult);
  }, [queryResult]);

  const fetchError = () => {
    fetch({ variables: { id: 0 } });
  };

  const fetchSuccess = () => {
    fetch({ variables: { id: 1 } });
  };

  return (
    <div className="App">
      <button onClick={fetchError}>Fetch Error</button>
      <button onClick={fetchSuccess}>Fetch Success</button>
    </div>
  );
}

export default App;
