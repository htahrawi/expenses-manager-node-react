import { Fragment, useContext } from "react";
import TabelRow from "../components/dashboard/TabelRow";
const AllExpenses = () => {


    return <Fragment>
            <div className="page d-flex">
                <div className="content" >
                    <div className="projects p-20 bg-white rad-10 m-20">
                        <h2 className="mt-0 mb-20">List Of Expenses</h2>
                        <div className="responsive-table">
                            <table className="fs-15 w-full">
                                <thead>
                                    <tr>
                                        <th>Value</th>
                                        <th>Category</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
}

export default AllExpenses;