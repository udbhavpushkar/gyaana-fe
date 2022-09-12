import Link from "next/link"
import React from "react"
import Admin from "./../admin"

const TeacherList = () => {
  return (
    <Admin>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
          <p>Teacher List</p>
          <Link href="/AddNewTeacher">
            <button>+Add Teacher</button>
          </Link>
        </div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Teacher Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Admin>
  )
}

export default TeacherList
