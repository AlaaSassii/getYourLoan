import { FC } from 'react'
import './loanResult.scss'
import { productType } from '../../types/productsType'
import { formatNumber } from '../../helpers/formatNumber'
// Description & Details
// When the Amount or months changes perform the following calculation to get the total amount:
// total amount = loan amount + (loan amount * product interest)
// monthly installment = total amount / # months
// target month = current month + # months

type loanResultProps = {
    loanAmount: null | number,
    numberOfMonths: null | number,
    product: null | productType
}
const LoanResult: FC<loanResultProps> = ({ loanAmount, numberOfMonths, product }) => {
    const totalAmount = product && loanAmount ? loanAmount + loanAmount * Number(product.interest) : 0
    const monthlyAmount = numberOfMonths ? totalAmount / numberOfMonths : 0

    const addMonthsToCurrentDate = () => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        if (numberOfMonths) {
            const currentDate = new Date();
            currentDate.setMonth(currentDate.getMonth() + numberOfMonths);
            const monthName = monthNames[currentDate.getMonth()];
            const year = currentDate.getFullYear();
            return `${monthName} ${year}`;
        } else {
            const currentDate = new Date();
            const monthName = monthNames[currentDate.getMonth()]
            const year = currentDate.getFullYear();
            return `${monthName} ${year}`;
        }
    }
    return (
        <div className="loan__result__contaienr">
            <div className="monthly__amount">
                <p>Monthly amount</p>
                <div>
                    ${formatNumber(monthlyAmount.toString())}
                </div>
            </div>
            <div className="total__amount">
                <p>
                    You’re planning {numberOfMonths ? numberOfMonths : 0} <b>monthly deposits</b> to reach your <b>${loanAmount ? formatNumber(loanAmount.toString()) : 0.00}</b> goal by <b>{addMonthsToCurrentDate()}</b>. The total amount loaned will be <b>${totalAmount ? formatNumber(totalAmount.toString()) : 0.00}</b>
                </p>
            </div>
        </div>
    )
}

export default LoanResult