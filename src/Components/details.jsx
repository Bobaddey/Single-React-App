import React from 'react'


const style = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: 'Ubuntu',
    borderBottom:"0.5px solid grey",
    marginBottom: "30px"
}
const buttonStyle ={
    backgroundColor: "rgb(215, 221, 223)",
    padding: "5px 20px",
    fontSize: "20px",
    fontFamily: 'Ubuntu',
    borderRadius: "5px",
    color: "grey",
   border: "none",
   marginBottom:"30px"
}
const details = () => {
    return (
        <>
        <div style={style}>
                <div>
                <h2>Full Name</h2> 
                <h3>Adewusi Bob Adedayo</h3>
                </div>
               
                <button style={buttonStyle}> Edit </button>
        </div>

        <div style={style}>
                <div>
                <h2>About me</h2> 
                <h3>Adewusi Bob Adedayo</h3>
                </div>
               
                <button style={buttonStyle}> Edit </button>
        </div>
        </>
    )
}

export default details
