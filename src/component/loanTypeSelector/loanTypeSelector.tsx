import useProducts from '../../hooks/useProducts'
import './loanTypeSelector.scss'

// - Each product should be displayed using the product.image property - When a product is changed, reset the loan and months to their respective minimums
const LoanTypeSelector = () => {
    const { products, pending, error } = useProducts()
    if (pending) return <h1>loading..</h1>
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