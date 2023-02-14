import Client from "../core/Client";
import { IconEdition, IconTrash } from "./icons";

interface TableProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientDelete?: (client: Client) => void;
}

export default function Table(props: TableProps) {

  const renderingActions = props.clientDelete || props.clientSelected

  function renderingCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {renderingActions ? <th className="p-4">Ações</th> : false }
      </tr>
    );
  }

  function renderingData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderingActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.clientSelected ? (
          <button onClick={() => props.clientSelected?.(client)} className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50">
            {IconEdition}
          </button>
        ) : (
          false
        )}

        {props.clientDelete ? (
          <button onClick={() => props.clientDelete?.(client)} className="flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50">
            {IconTrash}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-white bg-gradient-to-r from-purple-500 to-purple-700">
        {renderingCabecalho()}
      </thead>
      <tbody>{renderingData()}</tbody>
    </table>
  );
}
