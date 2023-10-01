import { useState } from "react";
import LoanAmountInput from "../loanAmountInput"
import LoanRepaymentDurationSelector from "../loanRepaymentDurationSelector"
import LoanResult from "../loanResult"
import LoanTypeSelector from "../loanTypeSelector"
import { productType } from "../../types/productsType";
import './loanCard.scss';
const LoanCard = () => {
    const [product, setProduct] = useState<productType | null>(null);

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