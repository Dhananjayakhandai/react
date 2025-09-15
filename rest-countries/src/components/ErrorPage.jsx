import { useRouteError} from "react-router"

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    return(
        <>
        <h1>Oops! Something went wrong</h1>
        <p>{error.statusText}</p>
        <p>{error.data}</p>
        </>
    )
}