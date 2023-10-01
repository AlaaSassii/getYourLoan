import { ChangeEvent, useState } from 'react'
import { FiDollarSign } from 'react-icons/fi'
import './loanAmountInput.scss';
const LoanAmountInput = () => {
    const [loanAmountValue, setLoanAmountValue] = useState('24.000')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoanAmountValue(event.target.value)
    }
    return (
        <div className='loan__amount__input__container'>
            <label>loan amount</label>
            <div className='loan__amount__input'>
                <div>
                    <FiDollarSign />
                </div>
                <input
                    type="text"
                    placeholder=''
                    value={loanAmountValue}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default LoanAmountInput