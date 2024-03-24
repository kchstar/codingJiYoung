import React from 'react'

const Lecture = () => {  
    const users = [
        {name : "ChunHo"},
        {name : "Miok"},
        {name : "Jehee"}
    ]

    const student = {
        ID: '101010',
        name: 'ChunHo',
        GPA: '3.5'
    }
    const {ID : myID } = student;
    const {name: myName }= student;
    console.log(myName);
  
  const showUser = true;
  return (
    <div>
        {
            showUser ? (
                <ul>
                    {users.map(user => <li>{user.name}</li> )}
                </ul>
              ) : (
                null 
              )
        }
      
    </div>
  )
}

export default Lecture