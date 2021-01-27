import axios from "axios"
import { address } from "../types/types"


const url =  "https://viacep.com.br/ws"

export const getAdressByCep = async (cep: string): Promise<address> => {
    try{

        const result = await axios.get(`${url}/${cep}/json`)

        const myAddress: address = {
            street: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return myAddress

    }catch(error){
        throw new error({message: error.message})
    }
}