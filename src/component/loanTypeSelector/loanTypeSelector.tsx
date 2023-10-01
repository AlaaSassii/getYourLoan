import { FC } from 'react'
import { productsType } from '../../types/productsType'
import './loanTypeSelector.scss'

// - Each product should be displayed using the product.image property - When a product is changed, reset the loan and months to their respective minimums
type loanTypeSelectorProps = {
    products: productsType
}

const LoanTypeSelector: FC<loanTypeSelectorProps> = ({ products }) => {

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