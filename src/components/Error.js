import { useRouteError } from "react-router-dom";
const Error = () =>{

    const err=useRouteError();
    // console.log(err);
    return (
        <div>
            <h1> OOPSssssss!!!</h1>
            <h2>SOmethig went wrong....don't worry</h2>
            <h3>
                {err.status}:{err.statusText}
            </h3>
        </div>
    )
};

export default Error