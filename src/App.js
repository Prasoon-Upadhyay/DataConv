 
import ValidatedInput from "./components/ValidatedInput";

function App()
{
    return(
        <div className="flex flex-col items-center">
            <div className="text-center" >
                <h1 className="mt-8 text-6xl">D2D</h1>
                <p>Convert data.</p>
            </div>
            <div> 
                <ValidatedInput />  
            </div>
        </div>
    )
}

export default App;