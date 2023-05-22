import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import AuthenticationPage from "../pages/AuthenticationPage";
import Profile from "../pages/Profile";
import AllExpenses from "../pages/AllExpenses";
import StatisticsPage from "../pages/StatisticsPage";
import AddNewExpense from "../pages/AddNewExpense";
import AvaragePage from "../pages/AvaragePage";
import CategoriesTotal from "../pages/CategoriesTotal";


const AppRoutes = function () {
    return (
        <Routes>
            <Route path="/*" element={<AuthenticationPage />} />
            <Route path="/auth" element={<AuthenticationPage />} />

            <Route path="/home" element={<Dashboard />}>
                <Route path="/home/add-expenses" element={<AddNewExpense />} />
                <Route path="/home/all-expenses" element={<AllExpenses />} />
                <Route path="/home/statistics" element={<StatisticsPage />} />
                <Route path="/home/profile" element={<Profile />} />
                <Route path="/home/avarage" element={<AvaragePage />} />
                <Route path="/home/categorys-total" element={<CategoriesTotal />} />
            </Route>

        </Routes>
    )
}
export default AppRoutes;