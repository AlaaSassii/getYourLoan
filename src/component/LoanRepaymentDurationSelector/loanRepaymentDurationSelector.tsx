import { FC } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import './loanRepaymentDurationSelector.scss'

// The month input component should:

// Allow only numbers
// When clicking on the arrow buttons it should go up and down by one
// On focused, the users should be able to increase/decrease by typing the Up and Down arrow key on the keyboard respectively
// Respect the min and max tenure properties of the selected product
type loanRepaymentDurationSelectorProps = {
    numberOfMonth: null | number,
    increaseNumberOfMonth: () => void,
    decreaseNumberOfMonth: () => void,
    handleKeyPress: (event: KeyboardEvent) => void
}
const LoanRepaymentDurationSelector: FC<loanRepaymentDurationSelectorProps> = ({ numberOfMonth, increaseNumberOfMonth, decreaseNumberOfMonth, handleKeyPress }) => {

    return (
        <div className='loan__repayment__duration__selector__contaienr'>
            <label>Number of Months</label>
            <div className='loan__repayment__duration__selector'>
                <button onClick={() => decreaseNumberOfMonth}><MdArrowBackIosNew /></button>
                <input
                    type="text"
                    value={numberOfMonth === null ? 0 : numberOfMonth}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={() => increaseNumberOfMonth}><MdArrowForwardIos /></button>
            </div>
        </div>
    )
}

export default LoanRepaymentDurationSelector