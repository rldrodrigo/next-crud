import { useState } from "react";
import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import Botao from '../components/Botao'

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto='Código'
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entrada
                texto='Nome'
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada
                texto='Idade'
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}