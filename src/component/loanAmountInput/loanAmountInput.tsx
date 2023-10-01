import { FC } from 'react';
import { ChangeEvent } from 'react'
import { FiDollarSign } from 'react-icons/fi'
import './loanAmountInput.scss';
import { formatNumber } from '../../helpers/formatNumber';
import { productType } from '../../types/productsType';
// The money input component should:

// Allow only numbers
// Display the value formatted as money (e.g 3500.45 should be 3,500.44)
// Respect the min and max amounts of the selected product
type loanAmoutInputProps = {
    product: null | productType
    loanAmout: null | number,
    handleChangeLoanAmoutn: (event: ChangeEvent<HTMLInputElement>) => void,
}

const LoanAmountInput: FC<loanAmoutInputProps> = ({ loanAmout, product, handleChangeLoanAmoutn, }) => {

    return (
        <div className='loan__amount__input__container'>
            <label>loan amount</label>
            <div className='loan__amount__input'>
                <div>
                    <FiDollarSign />
                </div>
                <input
                    value={loanAmout === null ? '0' : formatNumber(loanAmout.toString())}
                    onChange={handleChangeLoanAmoutn}
                />
            </div>
        </div>
    )
}

export default LoanAmountInput