import React from 'react'

function User () {

        const [user, setUser] = React.useState([])
        const [count, setCount] = React.useState(0)
        const [initialList, SetInitialList] = React.useState([])
        const getUserList = () =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((resolve)=>{
                return resolve.json()
            }).then((result)=>{
              setUser(result)
              SetInitialList(result)
            })
        }

        const sortByLength = () =>{

            // Accessending Order //            
            if(count ===0){
                let SortedUser = ( user.sort((a,b)=>{
                    return (a.name.length-b.name.length)
                 }))
     
                 setUser(SortedUser)
                 setCount(1)
            }

            // Deccending Order //
            else if(count === 1){
                let SortedUser = ( user.sort((a,b)=>{
                    return (b.name.length-a.name.length)
                 }))     
                 setUser(SortedUser)
                 setCount(2)
            }

            // Initial Order //
            else if(count ===2){
                setUser([...initialList])
                setCount(0)
            }
        }

        return(
            <>
            <button onClick={getUserList} >Get User List</button>
            <button style={{marginLeft:'10px'}} onClick={sortByLength}>Sort list By name's length</button>
            {user.map(ele =>{
                return (
                    <ul >
                    <li>{ele.name}</li>
                    </ul>)
            })}
        
            </>
    )
}

export default User