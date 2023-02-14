import { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
    client: Client
}

export default function Form(props: FormProps){
    const id = props.client?.id
    const [nome, setNome] = useState()
    return(
        
        <div>
            <Input text="Nome" value=""/>
            <Input text="Idade" type="number" value=""/>
        </div>
    )
}