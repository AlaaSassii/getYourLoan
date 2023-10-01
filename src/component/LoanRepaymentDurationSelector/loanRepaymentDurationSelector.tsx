import { FC, KeyboardEvent } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import './loanRepaymentDurationSelector.scss'

type loanRepaymentDurationSelectorProps = {
    numberOfMonth: null | number,
    increaseNumberOfMonth: () => void,
    decreaseNumberOfMonth: () => void,
    handleKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
}
const LoanRepaymentDurationSelector: FC<loanRepaymentDurationSelectorProps> = ({ numberOfMonth, increaseNumberOfMonth, decreaseNumberOfMonth, handleKeyPress }) => {

    return (
        <div className='loan__repayment__duration__selector__contaienr'>
            <label>Number of Months</label>
            <div className='loan__repayment__duration__selector'>
                <button onClick={() => decreaseNumberOfMonth()}><MdArrowBackIosNew /></button>
                <input
                    type="text"
                    value={numberOfMonth === null ? 0 : numberOfMonth}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={() => increaseNumberOfMonth()}><MdArrowForwardIos /></button>
            </div>
        </div>
    )
}

export default LoanRepaymentDurationSelector