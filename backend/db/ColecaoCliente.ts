import ClientRepositorie from "../../core/ClientRepositorie";
import Client from "../../core/Client";
import firebase from "../config";

export default class ColecaoCliente implements ClientRepositorie {
    
    conversor = {
        toFirestore(cliente: Client){
            return {
                nome: cliente.name,
                idade: cliente.age,

            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.Snapshotoptions): Client {
            const dados = snapshot.data(options)
            return new Client(dados.nome, dados.idade, snapshot.id)
        }
    }
    
    async salvar(cliente: Client): Promise<Client> {
        if(cliente?.id){
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
        
    }
    async excluir(cliente: Client): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }
    async obterTodos(): Promise<Client[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
        .firestore().collection('clientes')
        .withConverter(this.#conversor)
    }
}