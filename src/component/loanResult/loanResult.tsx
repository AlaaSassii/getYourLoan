import './loanResult.scss'
// Description & Details
// When the Amount or months changes perform the following calculation to get the total amount:
// total amount = loan amount + (loan amount * product interest)
// monthly installment = total amount / # months
// target month = current month + # months
const LoanResult = () => {
    return (
        <div className="loan__result__contaienr">
            <div className="monthly__amount">
                <p>Monthly amount</p>
                <div>
                    $521
                </div>
            </div>
            <div className="total__amount">
                <p>
                    You’re planning 12 <b>monthly deposits</b> to reach your <b>$25,000</b> goal by <b>July 2022</b>. The total amount loaned will be <b>$26,300</b>
                </p>
            </div>
        </div>
    )
}

export default LoanResult