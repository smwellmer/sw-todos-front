import React from "react";

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

  return <form onSubmit={handleSubmit} >
    <input
    type="text"
    onChange={handleChange}
    v
    />
    </form>
};

export default Form;