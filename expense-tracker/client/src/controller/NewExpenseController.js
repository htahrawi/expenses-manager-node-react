import { useContext, useRef } from "react";
import Helpers from "../utils/Helpers";
import Expense from "../model/Expense";
import { useNavigate } from "react-router-dom";

class NewExpenseController {
    
    expenseValue = useRef();
    expenseCategory = useRef();
    navigate = useNavigate();

    checkData = () => {
        if (this.expenseValue.current.value !== "" && this.expenseCategory.current.value !== "") {
            return true;
        }
        Helpers.showMessage("Error", "Enter Required Data", "error");
        return false;
    }

    addNewExpense = () => {
        let expense = new Expense(Math.random(), this.expenseValue.current.value, this.expenseCategory.current.value);
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        if (this.checkData()) {
            this.addNewExpense();
            this.navigate("/home/all-expenses", {replace: false});
        }
    }
}
export default NewExpenseController;
