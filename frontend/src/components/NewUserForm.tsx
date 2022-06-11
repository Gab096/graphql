import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { GET_USER } from "../App";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

const NewUserForm = () => {
  const [name, setName] = useState("");
  const [Createuser, { data, loading, error }] = useMutation(CREATE_USER);

  async function HandleCreateUser(event: FormEvent) {
    event.preventDefault();
    if (!name) {
      return;
    }
    await Createuser({
      variables: {
        name,
      },
      refetchQueries: [GET_USER],
    });
    console.log(data);
  }
  return (
    <form onSubmit={HandleCreateUser}>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit">ENVIAR</button>
    </form>
  );
};

export default NewUserForm;
