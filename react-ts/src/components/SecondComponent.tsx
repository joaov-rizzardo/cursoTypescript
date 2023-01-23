interface Props {
    name: string
}

export default function SecondComponent(props: Props){
    return (
        <div>
            <p>Meu segundo component</p>
            <p>O nome dele é {props.name}</p>
        </div>
    )
}