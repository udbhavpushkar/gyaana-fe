import React, { useState } from "react"

const TeacherDropdown = ({ data, teacherList, handleChange, teacherName }) => {
    const [isEdit, setIsEdit] = useState(false)


    const handleDropdownChange = (e) => {
        handleChange(e.target.value, data._id)
        setIsEdit(false)
    }

    return <>
        {teacherName && <div>{teacherName} <span onClick={() => { setIsEdit(prev => !prev) }}>{isEdit ? "Cancel" : "Change"}</span></div>}
        {(!teacherName || isEdit) && <div className="form-group">
            <select onChange={handleDropdownChange} className="form-control">
                <option value="">Please select</option>
                {teacherList.map((teacherData) => {
                    return <option key={`teacher_${teacherData._id}`} value={teacherData._id}>{teacherData?.userId?.firstName}</option>
                })}
            </select>
        </div>
        }
    </>
}

export default TeacherDropdown