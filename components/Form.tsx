import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    ChangeClient?: (cliente: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps){
    const id = props.client?.id
    const [nome, setNome] = useState(props.client?.name ?? '')
    const [idade, setIdade] = useState(props.client?.age ?? 0)
    return(
        
        <div>
            {id ? (<Input 
                    reading
                    text="Código" 
                    value={id}
                    className="mb-5"
                />
            ) : false}

            <Input 
                text="Nome" 
                value={nome}
                change={setNome}
                className="mb-5"
            />

            <Input 
                text="Idade" 
                type="number" 
                value={idade}
                change={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Button className="mr-2" 
                onClick={() => props.ChangeClient?.(new Client(nome, +idade, id))}>
                    {id ? 'Alterar': 'Salvar'}
                </Button>
                <Button onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}