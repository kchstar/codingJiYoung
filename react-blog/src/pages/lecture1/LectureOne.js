import React from 'react'

const LectureOne = () => {  
    const users = [
        {name : "ChunHo김천호"},
        {name : "Miok장미옥"},
        {name : "Jehee"}
    ]

    const student ={
      ID: '101010',
      name: 'ChunHo',
      GPA: '3.5'
    }

    // step1 
    const {ID, name, GPA} = student;
    console.log(ID);
    
    // step2 
    const {ID : myID} = student;
    console.log(myID);
    const showUser = true;
  return (
    <div>
        <h1>Lecture1</h1>
        <p>삼항연산자</p>
        {
            showUser ? (
                <ul>
                    {users.map(user => <li>{user.name}</li> )}
                </ul>
              ) : (
                null 
              )
        }
        <h1>Lecture2</h1>
        <p>구조 분해 활당 </p>
        <h2>My name is {myID} </h2>
    </div>
  )
}

export default LectureOne
