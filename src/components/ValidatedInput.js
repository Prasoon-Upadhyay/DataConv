import useConversion from "../hooks/use-conversion"; 
import Input from "./Input";
import { useEffect, useState } from "react"; 

function ValidatedInput()
{ 
    const {decimalToBinary, decimalToOctal, decimalToHex, input, setInput, binToDec, octToDec, hexToDec} = useConversion();
    const types = ['Decimal',"Binary", "Hexadecimal", "Octal" ]

    const inputOptions = types.map( (type) => <option value = {type}> {type}</option>)

    const outputOptions = types.filter( (type) => type !== input.type).map( (type) => <option value={type}> {type} </option>)
    const [output, setOutput] = useState({
        'type': 'Binary',
        'value': ''
    });
 
    console.log("Input", input.type);
    console.log("output", output.type);
    useEffect( () => {
    
        // To set Output.type accordingly on every input change
        if(input.type !== "Decimal")
        {
            setOutput({...output, 'type': "Decimal"})
        }

        else setOutput({...output, 'type': "Binary"})
    }, []) 
    
    // Submit Handler for conversion

    const handleSubmit = (event) => {  
        if(input.type === "Decimal")
        {
            switch(output.type)
            {
                case 'Binary':
                    setOutput({  
                        ...output, 
                        'value': decimalToBinary(event.target[0].value) 
                    })
                    break;

                case 'Hexadecimal':
                    setOutput({
                        ...output,
                        'value': decimalToHex(event.target[0].value)
                            })
                        break;

                case 'Octal':
                    setOutput({
                        ...output,
                        'value': decimalToOctal(event.target[0].value) 
                    })
                    break;
                
                default:
            }

            
        } 

        else if(input.type === "Binary")
        {
            switch(output.type)
            {
                case 'Decimal':
                    setOutput({  
                        ...output, 
                        'value': binToDec(event.target[0].value) 
                    })
                    break;

                case 'Hexadecimal':
                    setOutput({
                        ...output,
                        'value': decimalToHex(binToDec(event.target[0].value))
                            })
                        break;

                case 'Octal':
                    setOutput({
                        ...output,
                        'value': decimalToOctal(binToDec(event.target[0].value)) 
                    })
                    break;
                
                default:
            } 
        }

        else if(input.type === "Octal")
        {
            switch(output.type)
            {
                case "Decimal":
                    setOutput({
                        ...output,
                        'value': octToDec(event.target[0].value)
                    })
                    break;

                case "Binary":
                    setOutput({
                        ...output,
                        'value': decimalToBinary(octToDec(event.target[0].value))
                    })
                    break;
                

                case "Hexadecimal":
                    setOutput({
                        ...output,
                        'value': decimalToHex(octToDec(event.target[0].value))
                    })
                    break;
                
                default: ;
            }
        }

        else if(input.type === "Hexadecimal")
        {
            switch(output.type)
            {
                case "Decimal":
                    setOutput({
                        ...output,
                        'value': hexToDec(event.target[0].value)
                    })
                    break;

                case "Binary":
                    setOutput({
                        ...output,
                        'value': decimalToBinary(hexToDec(event.target[0].value))
                    })
                    break;
                

                case "Octal":
                    setOutput({
                        ...output,
                        'value': decimalToOctal(hexToDec(event.target[0].value))
                    })
                    break;
                
                default: ;
            }
        }

        event.preventDefault(); 
    }
   
    const handleChange = (event) => {
       setInput({...input, 'value': event.target.value}); 
    }

    const handleInputType = (event) => {  
        switch(event.target.value)
        {
            case "Decimal": 
                setInput({
                    ...input, 
                    'type' : event.target.value,
                    'pattern': "[0-9]+",
                    'title': `Enter a valid ${event.target.value} Number.`
                     
                });
                break;
                
            case "Hexadecimal":
                setInput({
                    ...input, 
                    'type' : event.target.value,
                    'pattern': "[0-9A-F]+",
                    'title': `Enter a valid ${event.target.value} Number.`
                     
                });
                break;

            case "Octal":
                setInput({
                    ...input, 
                    'type' : event.target.value,
                    'pattern': "[0-7]+",
                    'title': `Enter a valid ${event.target.value} Number.`
                     
                });
                break;

            case "Binary":
                setInput({
                    ...input, 
                    'type' : event.target.value,
                    'pattern': "[0-1]+",
                    'title': `Enter a valid ${event.target.value} Number.`
                     
                });
                break;
            
            default: ;
        } 
    }
    
    const handleOutputType = (event) => {
        setOutput({
            ...output,
            "type": event.target.value
        })
    }

    return(
        <div className="p-8 m-16 customColor flex flex-col  bg-slate-400 items-center " >
            <div className="flex flex-row justify-evenly">
                
                <div className="flex flex-col items-center">
                    <h1>F R O M</h1>
                    <select  onChange={handleInputType} className="bg-zinc-800 p-2 m-2">
                            {inputOptions} 
                    </select>
                </div>

                <div className="flex flex-col items-center">
                    <h1>T O</h1>
                    <select onChange={handleOutputType} className="bg-zinc-800 p-2 m-2">
                        {outputOptions} 
                    </select>
                </div>
            </div>
            <div  className="flex flex-row ">
                <form onSubmit={handleSubmit}  >            
                        <Input onChange = {handleChange} title = {input.title}  value={input.value} pattern = {input.pattern} >ENTER...</Input>
                        <button className="  m-8 bg-white text-black hover:text-white border hover:bg-inherit hover:border-white duration-300 px-2 py-1 ">C O N V E R T  </button>
                        <Input disabled value = {output.value}> </Input> 
                </form>
            </div>
            
            {/* <div className="items-center flex flex-col">

                <select onChange={handleInputType} className="bg-zinc-800 p-2 m-2">
                        {inputOptions} 
                </select>

                <form onSubmit={handleSubmit} className="flex flex-col " >            
                    <Input onChange = {handleChange} title = {input.title}  value={input.value} pattern = {input.pattern} >Enter</Input>
                    <button>Submit</button>
                </form>

            </div>   

            <div className="flex flex-col items-center">
                <select onChange={handleOutputType} className="bg-zinc-800 p-2 m-2">
                    {outputOptions} 
                </select>

                <Input disabled value = {output.value} />
            </div> */}
        </div>
    )
}
export default ValidatedInput;