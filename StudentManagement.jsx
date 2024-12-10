import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstData, submitdata] = useState({
    StudentName: "",
    StudentEmail: "",
    StudentPhone: "",
    StudentAddress: "",
  }

  );

  function collectdata(e) {

    submitdata((pd) => {
      return ({
        ...pd,
        [e.target.name]: e.target.value
      })

    })

  }
  
  
  let [data, setData] = useState([]);



let handleCHange = () =>{
  setData((pd)=>{
    return([
      ...pd,
      firstData
    ])
    submitdata({
      StudentName: "",
      StudentEmail: "",
      StudentPhone: "",
      StudentAddress: "",
    });
  })  
}

  return (
    <>
      <h1>Student-Name:</h1>
      <input name='StudentName' value={firstData.StudentName} onChange={(e) => { collectdata(e) }} type="text" />
      <h1>Student-Email:</h1>
      <input name='StudentEmail' value={firstData.StudentEmail} onChange={(e) => { collectdata(e) }} type="email" />
      <h1>Student-Phone:</h1>
      <input name='StudentPhone' value={firstData.StudentPhone} onChange={(e) => { collectdata(e) }} type="tel" />
      <h1>Student-Address:</h1>
      <input name='StudentAddress' value={firstData.StudentAddress} onChange={(e) => { collectdata(e) }} type="text" />
      <button onClick={handleCHange}>Submit:</button>

      <h1>List</h1>
      <table>
        <thead>
        <tr>
          <th>Sr.No</th>
          <th>Student Name</th>
          <th>Student Email</th>
          <th>Student Phone</th>
          <th>Student Address</th>
        </tr>
        </thead>
        <tbody>

        { 
        
          data.map((student, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{student.StudentName}</td>
                <td>{student.StudentEmail}</td>
                <td>{student.StudentPhone}</td>
                <td>{student.StudentAddress}</td>
              </tr>

)
})

        }
      </tbody>
      </table>
    
    </>
  )
}

export default App
