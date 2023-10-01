import { ChangeEvent, useState } from 'react'
import { FiDollarSign } from 'react-icons/fi'
import './loanAmountInput.scss';
// The money input component should:

// Allow only numbers
// Display the value formatted as money (e.g 3500.45 should be 3,500.44)
// Respect the min and max amounts of the selected product
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