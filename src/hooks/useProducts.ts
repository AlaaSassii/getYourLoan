import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from 'axios';
import { productsType } from "../types/productsType";

const useProducts = () => {
    const [products, setProducts] = useState<productsType>([])
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        setPending(true)
        axios.get<productsType>('/products.json')
            .then((response: AxiosResponse) => {
                setProducts(response.data)
                setPending(false)
            })
            .catch((error: AxiosError) => {
                setError(error.message)
                setPending(false)

            })
    })
    return { products, pending, error }

}
export default useProducts