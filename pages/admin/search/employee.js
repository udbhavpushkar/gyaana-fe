import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import Collapsable from "../../../components/Custom/Collapsable"
import { getRequest, patchRequest } from "../../../utilities/rest_service"


const EmployeeAdmission = () => {
    const [searchText, setSearchText] = useState("")
    const [employeeList, setEmployeeList] = useState([])
    const [filterEmployeeList, setFilterEmployeeList] = useState([])

    useEffect(() => {
        fetchEmployee()
    }, [])

    const fetchEmployee = async (e) => {
        try {
            let response = await getRequest(`employee/`)
            if (response.isSuccess) {
                setEmployeeList(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        let text = e.target.value
        setSearchText(text)
        let data = employeeList.filter((d => {
            let result = d?.category?.name?.includes(text) || d?.position?.name?.includes(text) || d?.gender?.includes(text) || d?.userId?.firstName?.includes(text) || d?.userId?.lastName?.includes(text) || d?.userId?.email?.includes(text) || d?.employeeNo?.includes(text);
            return result
        }))
        if (text) {
            setFilterEmployeeList(data)
        } else {
            setFilterEmployeeList([])
        }

    }

    const handleToggleActive = async (e, id, active) => {
        try {
            let response = await patchRequest(`employee/${id}`, { disabled: active })
            if (response.isSuccess) {
                let data = [...employeeList]
                let index = data.findIndex(d => d._id == id)
                if (data[index]) {
                    data[index] = response.data
                    setEmployeeList(data)
                }
            }
            console.log(e.target.value);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminLayout>
            <div>
                <div className="text-center mb-3">
                    <h3>Search Employee</h3>
                    <hr />
                </div>
                <div>
                    <div>
                        <div className="form-group row">
                            <label
                                className="col-sm-2 col-form-label"
                            >
                                Filter fields
                            </label>
                            <div className="col-sm-8 my-2">
                                <input onChange={handleSearch} type="text" className="form-control" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Collapsable heading="Employee List">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Emp Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Active/Inactive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(searchText ? filterEmployeeList : employeeList).map((data, index) => {
                            let active = !data?.userId?.disabled
                            let btnText = active ? "Active" : "Inactive"
                            return <tr key={data._id}>
                                <td>{index + 1}</td>
                                <td>{data?.employeeNo}</td>
                                <td>{data?.userId?.firstName} {data?.userId?.lastName}</td>
                                <td>{data?.position?.name}</td>
                                <td>
                                    <button
                                        className={`btn btn-outline ${active ? 'btn-outline-success' : 'btn-outline-danger'}`}
                                        onClick={(e) => { handleToggleActive(e, data?._id, active) }}
                                    >{btnText}</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Collapsable>
        </AdminLayout>
    )
}

export default EmployeeAdmission
