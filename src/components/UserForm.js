import React, {useState} from 'react';
import FormUserDetails from "./FormUserDetails";
import FormPersonDetails from "./FormPersonDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [step, setStep] = useState(1)
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }
  switch (step) {
    case 1:
      return <FormUserDetails nextStep={nextStep} handleChange={handleChange} user={user}/>
    case 2:
      return <FormPersonDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} user={user}/>
    case 3:
      return <Confirm user={user} nextStep={nextStep} prevStep={prevStep} />
    case 4:
      return <Success />
    default:
      return
  }
};

export default UserForm;