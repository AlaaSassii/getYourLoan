import { ChangeEvent, useState } from 'react'
import { FiDollarSign } from 'react-icons/fi'
import './loanAmountInput.scss';
const LoanAmountInput = () => {
    const [loanAmountValue, setLoanAmountValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoanAmountValue(event.target.value)
    }
    return (
        <div className='loan__amount__input'>
            <div>
                <FiDollarSign />
            </div>
            <input
                type="text"
                placeholder=''
                onChange={handleChange}
            />
        </div>
    )
}

export default LoanAmountInput