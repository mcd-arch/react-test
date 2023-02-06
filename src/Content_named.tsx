import './Content.scss'

type Props = {
    text1: string
    text2: string
    year: number
}

export const ContentNamed = (props: Props) => {
    let data = true
    return (
        <>
            <p className="p">{props.text1}</p>
            <p>{props.text2}</p>
            <div>Year: {props.year}</div>
        </>
    )
}
