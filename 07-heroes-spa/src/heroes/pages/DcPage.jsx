import { HeroList } from "../components"

const publisher = 'DC Comics'

export const DcPage = () => {
  return (
    <>
      <h1>Dc Comics</h1>
      <hr />
        <HeroList publisher={publisher} />
    </>
  )
}
