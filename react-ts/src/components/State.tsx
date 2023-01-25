import { ChangeEvent, useState } from "react"

export default () => {

    const [text, setText] = useState<string | null>(null)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return (
        <div>
            <p>O texto é {text}</p>
            <input type="text" onChange={handleChange} />
        </div>
    )
}