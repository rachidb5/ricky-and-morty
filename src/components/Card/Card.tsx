import { Btn } from './Styles'

type Props = {
    img: string,
    name: string
}

export default function Card(props: Props){
    return(
        <>
            <div>
                <img src={ props.img }/>
                <h2>{ props.name }</h2>
                <Btn>
                    Ver detalhes
                </Btn>
            </div>
        </>
    )
}