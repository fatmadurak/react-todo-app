import { object, string} from 'yup';

const validations = object({
  text: string().required("Text is a required field")

})


export default validations;