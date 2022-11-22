import { useState } from "react"


export const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState)

    const handleOnChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }


    const resetForm = () =>{
        setFormData(initialState)
    }


    return { formData, handleOnChange, resetForm }

}