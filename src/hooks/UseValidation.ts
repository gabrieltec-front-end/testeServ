import { InputProps } from "@/types/Formulario"
import { useEffect,useState } from "react"



export const UseValidation = (input: InputProps[]) => {

    const [formValues, setFormValues] = useState(input.map((inputs) => inputs.value || ""))
    const [valid, setValid] = useState<boolean>(false)



    useEffect(() => {
        const Validation = input.every((value, index) => {
            const valor = formValues[index]
            if (value.type === "email") {
                return /\S+@\S+\.\S+/.test(String(valor))

            }
            if (value.type === "password") {
                return String(valor).length > 7

            }
            return true
        })

        setValid(Validation)



    }, [formValues, input])

    const HandleChange = (index: number, input: string) => {
        setFormValues((prevValue) => {
            const newValue = [...prevValue]
            newValue[index] = input
            return newValue

        })

    }

    return { HandleChange, valid, formValues }


}
