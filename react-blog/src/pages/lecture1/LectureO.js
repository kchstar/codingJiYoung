import React from 'react'

const LectureO = () => {  
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
    const {ID, name, GPA} = student;

    console.log(student);

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

export default LectureO