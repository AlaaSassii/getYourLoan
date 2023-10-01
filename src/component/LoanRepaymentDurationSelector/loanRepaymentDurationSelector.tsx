import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import './loanRepaymentDurationSelector.scss'

// The month input component should:

// Allow only numbers
// When clicking on the arrow buttons it should go up and down by one
// On focused, the users should be able to increase/decrease by typing the Up and Down arrow key on the keyboard respectively
// Respect the min and max tenure properties of the selected product
const LoanRepaymentDurationSelector = () => {

    return (
        <div className='loan__repayment__duration__selector__contaienr'>
            <label>Number of Months</label>
            <div className='loan__repayment__duration__selector'>
                <button><MdArrowBackIosNew /></button>
                <input
                    type="number"
                    value={null}
                />
                <button><MdArrowForwardIos /></button>
            </div>
        </div>
    )
}

export default LoanRepaymentDurationSelector