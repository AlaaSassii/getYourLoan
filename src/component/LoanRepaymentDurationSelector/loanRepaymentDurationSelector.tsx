import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import './loanRepaymentDurationSelector.scss'

const LoanRepaymentDurationSelector = () => {

    return (
        <div className='loan__repayment__duration__selector__contaienr'>
            <label>Number of Months</label>
            <div className='loan__repayment__duration__selector'>
                <button><MdArrowBackIosNew /></button>
                <input
                    type="number"
                    value={12}
                />
                <button><MdArrowForwardIos /></button>
            </div>
        </div>
    )
}

export default LoanRepaymentDurationSelector