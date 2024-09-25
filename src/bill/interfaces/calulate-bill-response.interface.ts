import { CurrencyCodes } from "../../shared/enums/currency-codes.enums"

export interface CalculateBillResponse {
    totalBillAmount: number
    currencyCode: CurrencyCodes
}