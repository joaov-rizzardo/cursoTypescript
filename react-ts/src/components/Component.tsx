import { useContext } from "react"
import { appContext } from "../App"

export default () => {

    const details = useContext(appContext)
    return (
        <>
            {details && (
                <div>
                    <h2>Linguagem: {details.language}</h2>
                    <h4>Framework: {details.framework}</h4>
                    <p>Quantidade: {details.projects}</p>
                </div>
            )}
        </>
    )
}