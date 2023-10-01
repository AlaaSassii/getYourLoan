import LoanAmountInput from "../loanAmountInput"
import LoanRepaymentDurationSelector from "../loanRepaymentDurationSelector"
import LoanResult from "../loanResult"
import LoanTypeSelector from "../loanTypeSelector"
import './loanCard.scss';
const LoanCard = () => {
    return (
        <div className="loan__card">
            <LoanTypeSelector />
            <LoanAmountInput />
            <LoanRepaymentDurationSelector />
            <LoanResult />

        </div>
    )
}

export default LoanCard