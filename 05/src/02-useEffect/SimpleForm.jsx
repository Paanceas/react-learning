import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'pablo@google.com'
    });

    const { username, email } = formState;

    const onChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
           [name]: value 
        });
    }

    useEffect(() => {
      console.log('component');
    }, []);

    useEffect(() => {
      console.log('formState :>> ', formState);
    }, [formState]);

    useEffect(() => {
      console.log('email :>> ', email);
    }, [email]);
    

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input className="form-control" type="text" name="username" id="username" placeholder="username" value={username} onChange={onChange}/>
        <input className="form-control mt-2" type="text" name="email" id="email" placeholder="email@email.com" value={email} onChange={onChange}/>
        {
          username === 'strider2' && <Message />
        }
    </>
  )
}
