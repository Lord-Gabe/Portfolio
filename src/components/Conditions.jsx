import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditions(){
    const display = false;

    if (display){//conditional statements
        return <Welcome/>
    }else{
        return <Code/> //Returning a new component page to be rendered
    }

    // let Message = <h3>This is message one</h3>
    // let message2 = <h3>This one na message 2</h3> 
}
