import { useContext } from "react";
import ConversionContext from "../context/conversion";

function useConversion()
{
    return useContext(ConversionContext);
}

export default useConversion;