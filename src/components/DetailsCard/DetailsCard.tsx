import { useQuery } from "react-query";

type Props = {
    name: string
}

export default function DetailsCard(props: Props){
    
    return(
        <h1>{props.name}</h1>
    )
}