import { useState, useEffect } from 'react'
import './loanTypeSelector.scss'
import { productsType } from '../../types/productsType'

import axios, { AxiosResponse, AxiosError } from 'axios'
const LoanTypeSelector = () => {
    const [products, setProducts] = useState<productsType>([])
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get<productsType>('/products.json')
            .then((response: AxiosResponse) => {
                setProducts(response.data)
            })
            .catch((error: AxiosError) => {
                setError(error.message)
            })
    })
    if (error) return <h1>{error}</h1>
    return (
        <div className='loan__type__selector'>
            {
                products.map(
                    (product, index) => (
                        <div className={`product__${index}`}>
                            <img src={product.image} alt={product.name} />
                        </div>
                    )
                )
            }
        </div>
    )
}

export default LoanTypeSelector