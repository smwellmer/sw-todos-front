import React, {useState} from "react";

const Form = ({initalTodo, handleSubmit, buttonLabel, history}) => {

  // The form data state
  const [formData, setFormData] = useState(initalTodo)

  // functions
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  const handleSubmission = (event) => {
    event.preventDefault()
  }

  return <form onSubmit={handleSubmission} >
    <input
    type="text"
    onChange={handleChange}
    value={formData.subject}
    name="subject"
    />
     <input
    type="text"
    onChange={handleChange}
    value={formData.details}
    name="details"
    />
    <input
    type="submit"
    value={buttonLabel}
    />
    </form>
};

export default Form;