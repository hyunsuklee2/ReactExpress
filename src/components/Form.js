import { useState } from 'react'

const Form = (props) => {

  

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
       if( event.target.apple === 'name' ){
        setName(event.target.value)
       }
       else {
        setUrl(event.target.value)
       }
       
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       if(name === '' || url === ''){
      alert('Fill in missing field!')
    }
    else {
      console.log('hello')
    }
  }

  return (
    <form>
      <label>NAME: </label>
      <input onChange={handleChange} apple = 'name'/>

      <label>URL: </label>
      <input onChange={handleChange} apple = 'url'/>

      <button onClick={onFormSubmit}>Submit</button>
      
      

      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
    </form>
    
  )
}

export default Form
