import { gql, useQuery } from "@apollo/client";
import NewUserForm from "./components/NewUserForm";

type User = {
  id: string;
  name: string;
};

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery(GET_USER);
  console.log(data);
  if (loading) {
    return <p>carregando...</p>;
  }
  return (
    <>
      <ul>
        {data?.users.map((i: User) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
      <NewUserForm />
    </>
  );
}

export default App;
