import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { onChange, onResetForm, username, email, password } = useForm({
      username: '',
      email: '',
      password: ''
  });
 
  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input className="form-control" type="text" name="username" id="username" placeholder="username" value={username} onChange={onChange} />
      <input className="form-control mt-2" type="text" name="email" id="email" placeholder="email@email.com" value={email} onChange={onChange} />
      <input className="form-control mt-2" type="password" name="password" id="password" placeholder="password" value={password} onChange={onChange} />

      <button className="btn btn-primary mt-2" onClick={onResetForm} > Reset </button>
    </>
  )
}
