import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";

export default function Home() {
  const clients = [
    new Client("Ana", 34, 1),
    new Client("Bia", 18, 2),
    new Client("Clara", 23, 3),
    new Client("Maria", 32, 4),
  ];

  function clientSelected(client: Client) {}
  function clientDelete(client: Client) {}

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-red-300 to-blue-600 text-white">
      <Layout title="Cadastro">
        <div className="flex justify-end">
          <Button className="mb-4">Novo Cliente</Button>
        </div>
        <Table
          clients={clients}
          clientSelected={clientSelected}
          clientDelete={clientDelete}
        />
      </Layout>
    </div>
  );
}
