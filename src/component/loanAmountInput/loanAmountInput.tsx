import { Dispatch, FC, SetStateAction } from 'react';
import { ChangeEvent } from 'react'
import { FiDollarSign } from 'react-icons/fi'
import './loanAmountInput.scss';
import { formatNumber } from '../../helpers/formatNumber';

type loanAmoutInputProps = {
    loanAmout: null | number,
    loanAmountErrorMessage: null | string
    inputFocused: boolean,
    setInputFocused: Dispatch<SetStateAction<boolean>>
    handleChangeLoanAmount: (event: ChangeEvent<HTMLInputElement>) => void,
}

const LoanAmountInput: FC<loanAmoutInputProps> = ({ loanAmout, loanAmountErrorMessage, inputFocused, setInputFocused, handleChangeLoanAmount, }) => {

    return (
        <div className='loan__amount__input__container'>
            {loanAmountErrorMessage && <p className='error__message'>{loanAmountErrorMessage}</p>}
            <label>loan amount</label>
            <div className='loan__amount__input'>
                <div>
                    <FiDollarSign />
                </div>
                <input
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    value={loanAmout === null ? '0' : inputFocused ? loanAmout : formatNumber(loanAmout.toString())}
                    onChange={handleChangeLoanAmount}
                />
            </div>
        </div>
    )
}

export default LoanAmountInput