import * as yup from "yup";

/* Validation error */ 
const validation = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    score: yup.number().max(5).min(1).required(),
})

export default validation;