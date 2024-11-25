const User = (props) =>{
    return(
        <div className="user-card">
            <h1>Name: {props.name}</h1>
            <h2>Location: Dehradun</h2>
        </div>
    )
}
export default User;