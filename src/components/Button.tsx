import '../design/button-design/Buttons.scss';

type ButtonProps ={
    type :"submit" | "reset" | "button" ;
    title : string;
}

export default function Button({type ,title} :ButtonProps){
    return (
        <>
        <button type={type}>{title}</button>
        </>
    )
}