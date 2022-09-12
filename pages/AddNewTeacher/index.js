import Link from "next/link"
import React from "react"
import Admin from "../Admin"

const AddNewTeacher = () => {
  return (
    <Admin>
      <div>
        <div>
          <h4 className="text-center">Add New Teacher</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
          <form style={{ display: "flex", flexDirection: "column", width: "30%" }}>
            <label>Name :</label>
            <input type="text" name="name" placeholder="Enter Name" />
            <label>Email :</label>
            <input type="text" name="email" placeholder="Enter Email" />
            <label>Phone :</label>
            <input type="text" name="phone" placeholder="Enter Phone" />
            <label>Address :</label>
            <input type="text" name="address" placeholder="Enter Address" />
            <label>Class :</label>
            <input type="text" name="class" placeholder="Enter Class" />
            <Link href="/TeacherList">
              <button className="btn btn-success my-4">Add Teacher</button>
            </Link>
          </form>
        </div>
      </div>
    </Admin>
  )
}

export default AddNewTeacher
