import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {


    const { user, setUser } = useContext(UserContext);

    return (
      <>
          <h1>LoginPage</h1>
          <hr />

          <pre aria-label="pre">
              {JSON.stringify(user, null, 1)}
          </pre>

          <button className="btn btn-success" onClick={()=> setUser({
            id:123,
            name: "Pablo Ceballos",
            email: "pablo@email.com"
          })}> Establecer Usuario </button>
      </>
    )
  }
  