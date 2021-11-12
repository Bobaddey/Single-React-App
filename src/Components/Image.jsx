import React from 'react'

const styles = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    height: "200px"
}
const Image = () => {
    return (
        <div style={styles}>
            
           <img  style={{width: "30%", borderRadius:"5px"}}
                src={`${process.env.PUBLIC_URL}/assets/cat.jpg`} 
                alt="logo"/>
        <img style={{width: "67%", borderRadius:"5px"}}
                src={`${process.env.PUBLIC_URL}/assets/cat.jpg`} 
                alt="logo"/>
        </div>
    )
}

export default Image
