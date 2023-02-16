import Layout from "../components/Layout";
import Table from "../components/Table";
import Button from "../components/Button";
import Form from "../components/Form";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    
    clientSelected,
    clientDelete,
    cliente,
    clientes,
    newClient,
    saveClient,
    tableVisible,
    showTable
  } = useClientes();
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-red-300 to-blue-600 text-white">
      <Layout title="Cadastro de Unicórnios">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" onClick={newClient}>
                Novo Unicórnio
              </Button>
            </div>
            <Table
              clients={clientes}
              clientSelected={clientSelected}
              clientDelete={clientDelete}
            />
          </>
        ) : (
          <Form
            client={cliente}
            ChangeClient={saveClient}
            cancel={() => showTable()}
          />
        )}
      </Layout>
    </div>
  );
}
