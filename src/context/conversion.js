import { createContext, useState } from "react";

const ConversionContext = createContext();

function ConversionProvider( {children} )
{
    const [input, setInput] = useState({
        'type': 'Decimal',
        'value': '',
        'pattern': '[0-9]+',
        'title': "Enter a valid Decimal Number."
    });
 
    const decimalToBinary = (number) => {
            
        let arr = [];
        let converted = '';
        while(number > 0)
        {
            arr.push(Math.floor(number % 2));
            number = Math.floor(number / 2);
        }

        for(let i = arr.length ; i--; i <= 0)
        {
            converted += arr[i]
        }

        return converted;
    }
    const decimalToOctal = (number) => {
            
        let arr = [];
        let converted = '';
        while(number > 0)
        {
            arr.push(Math.floor(number % 8));
            number = Math.floor(number / 8);
        }

        for(let i = arr.length ; i--; i <= 0)
        {
            converted += arr[i]
        }

        return converted;
    }
    const decimalToHex = (number) => {
            
        let arr = [];
        let converted = '';
        const hexMap = {
            15: "F",
            14: "E",
            13: "D",
            12: "C",
            11: "B",
            10: "A",
        }
        while(number > 0)
        { 
            arr.push(Math.floor(number%16 < 10 ) ? number%16 : hexMap[number%16]);
            number = Math.floor(number / 16);
        }

        for(let i = arr.length ; i--; i <= 0)
        {
            converted += arr[i]
        }

        return converted;
    }
    
    const binToDec = (num) => {

        let temp = num;
        let converted = 0
        let base = 1;
        while(temp > 0)
            {
                
                let digit = Math.floor(temp % 10)  ;
                converted += digit * base
                temp = Math.floor(temp / 10);
                base *= 2;
            }
        return converted;
    }

    const octToDec = (num) => {

        let temp = num;
        let converted = 0
        let base = 1;
        while(temp > 0)
            {
                
                let digit = Math.floor(temp % 10)  ;
                converted += digit * base
                temp = Math.floor(temp / 10);
                base *= 8;
            }
        return converted;
    } 
    const hexToDec = (num) => {
  
        let converted = 0
        let base = 1;   
        for(let i = num.length - 1; i >= 0  ; i--)
            { 
                 
                if( num.charAt(i)>= "0" &&  num.charAt(i)< "9")
                {
                    converted += (num.charAt(i).charCodeAt(0) - 48) * base
                }
    
                else if(num.charAt(i) >= "A" && num.charAt(i) <= "F")
                {
                    converted += (num.charAt(i).charCodeAt(0) - 55) * base
                }
    
                base = base * 16
            }
        return converted;
    }
    
    
    return(
        <ConversionContext.Provider value={ {decimalToBinary,decimalToOctal,decimalToHex, input, setInput, binToDec, octToDec, hexToDec} }> 
            {children}
        </ConversionContext.Provider>
    )
}

export {ConversionProvider};
export default ConversionContext;