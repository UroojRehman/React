import React from 'react'

const StudentList = () => {
    const Student = ["Faizan","Ali Shan","Usama","Hamza","Bilal","Huzaifa"]
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {Student.map((s)=>(
         <li>{s}</li>
        ))}
      </ul>

    </div>
  )
}

export default StudentList
