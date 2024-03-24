import React from 'react'

const LectureTwo = () => {  
    const users = [
        {name : "대한 민국 "},
        {name : "서울 특별시"},
        {name : "용산구"}
    ]
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

export default LectureTwo