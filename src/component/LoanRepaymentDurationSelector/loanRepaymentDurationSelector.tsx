import React from 'react'
import './loanRepaymentDurationSelector.scss'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const LoanRepaymentDurationSelector = () => {

    return (
        <div className='loan__repayment__duration__selector__contaienr'>
            <label>Number of Months</label>
            <div className='loan__repayment__duration__selector'>
                <button><MdArrowBackIosNew /></button>
                <input
                    type="text"
                />
                <button><MdArrowForwardIos /></button>
            </div>
        </div>
    )
}

export default LoanRepaymentDurationSelector