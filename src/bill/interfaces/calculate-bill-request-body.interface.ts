import { CurrencyCodes } from "../../shared/enums/currency-codes.enums";
import { UserTypes } from "../../shared/enums/user-types.enum";
import { BillItems } from "./bill-items.interface";

export interface CalculateBillRequestbody {
    userType: UserTypes,
    tenure: number,
    billItems: Array<BillItems>,
    originalCurrency: CurrencyCodes,
    targetCurrency: CurrencyCodes,
    totalBillAmount: number
}