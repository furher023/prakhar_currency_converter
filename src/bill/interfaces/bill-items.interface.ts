import { BillItemsCategory } from "../../shared/enums/bill-items-category.enums";

export interface BillItems {
  name: string;
  category: BillItemsCategory;
  totalPrice: number;
}
