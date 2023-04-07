import React, { useEffect, useState } from "react";
import { getRequest, patchRequest } from "../../../utilities/rest_service";
import { toast } from "react-toastify";

const AssignClassTeacher = ({ sectionData, close, fetchSections }) => {

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

    const handleSelectTeacher = async (id) => {
        try {
            let payload = { teacher: id }
            let response = await patchRequest(`section/${sectionData?._id}`, payload)
            if (response.isSuccess) {
                toast.success("Assigned Successfully")
                fetchSections()
                close()
            } else {
                toast.error("Something went wrong")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <h3>Section : {sectionData.name}</h3>
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
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Emp Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Select</th>
                </tr>
            </thead>
            <tbody>
                {(searchText ? filterEmployeeList : employeeList).map((data, index) => {
                    let active = !data?.userId?.disabled
                    return <tr key={data._id}>
                        <td>{index + 1} {!active && <span class="badge badge-danger">Inactive</span>}</td>
                        <td>{data?.employeeNo}</td>
                        <td><a href={`../profile/employee/${data._id}`} target={`_blank`}>{data?.userId?.firstName} {data?.userId?.lastName}</a></td>
                        <td>{data?.position?.name}</td>
                        <td><div onClick={() => { handleSelectTeacher(data._id) }} className="btn btn-outline-primary">Select</div></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default AssignClassTeacher