import LoanAmountInput from "../loanAmountInput"
import LoanRepaymentDurationSelector from "../loanRepaymentDurationSelector"
import LoanResult from "../loanResult"
import LoanTypeSelector from "../loanTypeSelector"
import './loanCard.scss';
const LoanCard = () => {
    return (
        <div className="loan__card">
            <LoanTypeSelector />
            <div className="loan__inputs">
                <LoanAmountInput />
                <LoanRepaymentDurationSelector />
            </div>
            <LoanResult />

        </div>
    )
}

export default LoanCard