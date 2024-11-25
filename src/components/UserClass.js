import React from "react"
class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            },
        };
        
    }

    // async componentDidMount(){
    //     const data=await fetch("https://api.github.com/users/tanmaychuphal")
    //     const json = await data.json();

    //     this.setState({
    //         userInfo: json,
    //     });
    // }

    render(){

        const {location}=this.props;
        const {count}=this.state;
            
        return(
            <div className="user-card">
                <h1>Name: {this.props.name}</h1>
                <h2>Location: Dehradun</h2>
            </div>
        )
    }
}

export default UserClass