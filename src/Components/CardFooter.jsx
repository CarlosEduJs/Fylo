import { useState } from "react";

import ButtonDefault from "./Buttons/ButtonDefault";

import {isEmail} from '../utils/emailValidor'

export default function CardFooter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({})

  const handleSub = () => {
    let validationErrors = {}

    if (!isEmail(email)) {
      validationErrors.email = "Invalid Email adress"
    }

    setError(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
      setEmail("")
      console.log("Sended")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-6 px-5 bg-primary-dark-blue-intro rounded-lg relative bottom-20 shadow-sm w-fit mx-auto">
      <h1 className="text-2xl font-bold text-white">Get early acess today</h1>
      <p className="text-white text-xs text-center">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any <br /> questions, our support team would be
        happy to help you.
      
      </p>

      <div className="flex items-center gap-3 justify-between max-md:flex-col">
        <input type="text" className="py-3 px-8 rounded-full w-[400px] max-md:w-full outline-none text-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
        <ButtonDefault action={handleSub} content={"Get Started for free"}/>
       
      </div>
      {error.email && <p className="text-accent-light-red text-xs">{error.email}</p>}
    </div>
  );
}
