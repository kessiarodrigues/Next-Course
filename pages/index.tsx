import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Client>(Client.vazio());
  const [visivel, setVisivel] = useState<"table" | "form">("table");

  const clients = [
    new Client("Rainbow", 34, 1),
    new Client("Ruby", 18, 2),
    new Client("Diamond", 23, 3),
    new Client("Sparkle", 32, 4),
  ];

  function clientSelected(client: Client) {
    setCliente(cliente);
    setVisivel('form');
  }
  function clientDelete(client: Client) {}

  function newClient() {
    setCliente(Client.vazio());
    setVisivel('form');
  }

  function saveClient(cliente: Client) {
    console.log(cliente);
    setVisivel('table');
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-red-300 to-blue-600 text-white">
      <Layout title="Cadastro de Unicórnios">
        {visivel === "table" ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" onClick={newClient}>
                Novo Unicórnio
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDelete={clientDelete}
            />
          </>
        ) : (
          <Form
            client={cliente}
            ChangeClient={saveClient}
            cancel={() => setVisivel("table")}
          />
        )}
      </Layout>
    </div>
  );
}
