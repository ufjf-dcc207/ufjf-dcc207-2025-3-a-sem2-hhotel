import { useState } from "react";
import "./hotel.css";
import Atributo from "./Atributo";

const data = json as HospedeType;

export type HospedeType = {
  nome: string;
  bondade: number;
  maldade: number;
};

export default function Hotel() {
    let situacao = "neutro";
    const [hospedes, setHospedes] = useState<HospedeType>({
        nome: data.nome,
        bondade: data.bondade,
        maldade: data.maldade
    });

    if(hospedes.bondade === 10) {
        situacao = "redimido";
    }else if(hospedes.bondade === 0){
        situacao = "condenado";
    }else if(hospedes.maldade == 10){
        situacao = "Soberano do Inferno";
    }

    function BoasAções() {
        if(hospedes.bondade === 0 && hospedes.maldade === 10) return;
        setHospedes({
            ...hospedes,
            bondade: hospedes.bondade + 2,
            maldade: hospedes.maldade - 1
        });
    }

    function MasAções() {
        if(hospedes.maldade === 0 && hospedes.bondade === 10) return;
        setHospedes({
            ...hospedes,
            bondade: hospedes.bondade - 1,
            maldade: hospedes.maldade + 2
        });
    }
    
    return (
        <div className="hotel">
            <div className="situacao">situacao: data.situacao</div>
            <div className="hospedes">
                <div className="nome">Nome: {hospedes.nome}</div>
                <Atributo icone="😇" valor={hospedes.bondade} />
                <Atributo icone="😈" valor={hospedes.maldade} />
            </div>
            <div className="acoes">
                <button onClick={BoasAções}>Ajudar uma velinha</button>
                <button onClick={MasAções}>Roubar um doce de uma criança</button>
                
            </div>
        </div>
    );
}
        