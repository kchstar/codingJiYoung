import React from 'react'

const LectureOn = () => {  
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
    const ID = student.ID;
    const name = student.name;
    const GPA = student.GPA;

    console.log(GPA);


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

export default LectureOn