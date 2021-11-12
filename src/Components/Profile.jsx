import React from 'react'

const style = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: 'Ubuntu',
    marginBottom: "30px"
}

const buttonStyle ={
    backgroundColor: "rgb(24, 117, 145)",
    padding: "20px 60px",
    fontSize: "20px",
    borderRadius: "10px",
    fontFamily: 'Ubuntu',
    color: "white",
   border: "none"
}
const Profile = () => {
    return (
        <div style={style}>
                
                <div>
                <h1>Edit public </h1> 
                <h1>Profile</h1>
                </div>
                <button style={buttonStyle}> View my Profile </button>
            
            
        </div>
    )
}

export default Profile

