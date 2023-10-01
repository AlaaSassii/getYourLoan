import { useState, ChangeEvent, KeyboardEvent } from "react";
import LoanAmountInput from "../loanAmountInput"
import LoanRepaymentDurationSelector from "../loanRepaymentDurationSelector"
import LoanResult from "../loanResult"
import LoanTypeSelector from "../loanTypeSelector"
import { productType } from "../../types/productsType";
import './loanCard.scss';
import useProducts from "../../hooks/useProducts";
import { isCharacterNotANumber } from "../../helpers/charIsNotNumber";
import { reverseFormatNumber } from "../../helpers/reverseFormatNumber";
import { formatNumber } from "../../helpers/formatNumber";

const LoanCard = () => {
    const { products, pending, error } = useProducts()
    const [product, setProduct] = useState<productType | null>(null);
    const [loanAmout, setLoanAmount] = useState<number | null>(null);
    const [inputFocused, setInputFocused] = useState(false);
    const [loanAmountErrorMessage, setLoanAmountErrorMessage] = useState<string | null>(null);
    const [numberOfMonths, setNumberOfMonths] = useState<number | null>(null);

    const chooseProduct = (product: productType) => {
        setProduct(product);
        setLoanAmount(Number(product.min_amount))
        setNumberOfMonths(Number(product.min_tenure))
        setLoanAmountErrorMessage(null)
    }

    const handleChangeLoanAmount = (event: ChangeEvent<HTMLInputElement>) => {
        const amount = Number(reverseFormatNumber(event.target.value))
        console.log({ amount, min_amount: Number(product?.min_amount), max_amount: Number(product?.max_amount) })
        if (isCharacterNotANumber(amount.toString())) return
        setLoanAmount(amount)
        if (!(amount >= Number(product?.min_amount) && amount <= Number(product?.max_amount))) {
            setLoanAmountErrorMessage(`Please input a value between ${formatNumber(product?.min_amount)} and ${formatNumber(product?.max_amount)}`)
        } else {
            setLoanAmountErrorMessage(null)
        }
    }
    const increaseNumberOfMonth = () => {
        if (numberOfMonths !== null) {
            const numberMonths = numberOfMonths + 1;
            if (numberMonths <= Number(product?.max_tenure)) {
                setNumberOfMonths(numberMonths);
            }
        }
    }

    const decreaseNumberOfMonth = () => {
        if (numberOfMonths !== null) {
            const numberMonths = numberOfMonths - 1
            if (numberMonths >= Number(product?.min_tenure)) {
                setNumberOfMonths(numberMonths)
            }
        }
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "ArrowDown") {
            decreaseNumberOfMonth()
        }
        if (event.key === "ArrowUp") {
            increaseNumberOfMonth();
        }

    }

    if (pending) return <h1>loading..</h1>
    if (error) return <h1>{error}</h1>
    return (
        <div className="loan__card">
            <LoanTypeSelector
                products={products}
                chooseProduct={chooseProduct}

            />
            <div className="loan__inputs">
                <LoanAmountInput
                    loanAmout={loanAmout}
                    inputFocused={inputFocused}
                    setInputFocused={setInputFocused}
                    loanAmountErrorMessage={loanAmountErrorMessage}
                    handleChangeLoanAmount={handleChangeLoanAmount}
                />
                <LoanRepaymentDurationSelector
                    numberOfMonth={numberOfMonths}
                    increaseNumberOfMonth={increaseNumberOfMonth}
                    decreaseNumberOfMonth={decreaseNumberOfMonth}
                    handleKeyPress={handleKeyPress}
                />
            </div>
            <LoanResult
                loanAmount={loanAmout}
                numberOfMonths={numberOfMonths}
                product={product}
            />

        </div>
    )
}

export default LoanCard