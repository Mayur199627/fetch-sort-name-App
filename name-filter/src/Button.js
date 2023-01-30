import React from 'react'

function User () {

        const [user, setUser] = React.useState([])

        const getUserList = () =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((resolve)=>{
                return resolve.json()
            }).then((result)=>{
              setUser(result)
            })
        }

        const sortByLength = () =>{
            user.sort((a,b)=>{
                return a.length>b.length
            })

        }

    return(
        <>
        <button onClick={getUserList}>Get User List</button>
        <button style={{marginLeft:'10px'}} onClick={sortByLength}>Sort list By name's length</button>
        {user.map(ele =>{
            return (
                <ul>
                <li>{ele.name}</li>
                </ul>)
        })}
        
        </>
    )
}



export default User