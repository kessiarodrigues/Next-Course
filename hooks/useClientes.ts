import Client from "../core/Client"
import { useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClientRepositorie from "../core/ClientRepositorie";
import { useEffect } from "react"
import useTableOrForm from "./useTableorForm";

export default function useClientes(){
    const repo: ClientRepositorie = new ColecaoCliente

    const { showTable, showForm, formVisible, tableVisible  } = useTableOrForm()

  const [cliente, setCliente] = useState<Client>(Client.vazio());
  const [clientes, setClientes] = useState<Client[]>([]);
  

  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      showTable()
    })
  }

  function clientSelected(client: Client) {
    setCliente(cliente);
    showForm()
  }

  async function clientDelete(client: Client) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function newClient() {
    setCliente(Client.vazio());
    showForm()
  }

  async function saveClient(cliente: Client) {
    await repo.salvar(cliente)
    obterTodos()
  }
  return{
    tableVisible,
    newClient,
    saveClient,
    clientDelete,
    clientSelected,
    obterTodos,
    cliente,
    clientes,
    showTable
  }
}