import "./Atributo.css";

type AtributoProps = {
    icone: string;
    valor: number;
}
export function Atributo({ icone, valor }: AtributoProps) {
    return (
        <div className="atributo">
            <span>{icone.repeat(valor)}</span>
            <span className="desabilitado">{icone.repeat(5 - valor)}</span>
        </div>)
}

