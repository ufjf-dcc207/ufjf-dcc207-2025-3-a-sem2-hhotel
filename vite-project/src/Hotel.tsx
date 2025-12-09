import { useState } from "react";
import "./hotel.css";
import Atributo from "./Atributo";

const data: HospedeType = {
  nome: "Sr. Pentious",
  foto: { neutro: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAZard7_5ha48cpkezXmudLN1_LkHrtjgdQ&s",
redimido: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsuvf9XP626n_VyyNnaewk6FVjH7hAzbamg&s", soberano: "" },
  bondade: 5,
  maldade: 5,
};

export type HospedeType = {
  id?: number;
  nome: string;
  foto?: { neutro: string; redimido: string; soberano: string };
  bondade: number;
  maldade: number;
};

export default function Hotel() {
  let situacao = "neutro";
  const [hospedes, setHospedes] = useState<HospedeType>({
    nome: data.nome,
    bondade: data.bondade,
    maldade: data.maldade,
  });

  if (hospedes.bondade === 10) {
    situacao = "redimido";
  } else if (hospedes.bondade === 0) {
    situacao = "condenado";
  } else if (hospedes.maldade == 10) {
    situacao = "Soberano do Inferno";
  }

  function BoasAções() {
    if (hospedes.bondade === 0 && hospedes.maldade === 10) return;
    setHospedes({
      ...hospedes,
      bondade: hospedes.bondade + 2,
      maldade: hospedes.maldade - 1,
    });
  }

  function MasAções() {
    if (hospedes.maldade === 0 && hospedes.bondade === 10) return;
    setHospedes({
      ...hospedes,
      bondade: hospedes.bondade - 1,
      maldade: hospedes.maldade + 2,
    });
  }

  function atualizarSituacao() {
    if (hospedes.bondade === 10) {
      situacao = hospedes.foto?.redimido ?? "redimido";
    } else if (hospedes.bondade === 0) {
      situacao = "condenado";
    } else if (hospedes.maldade == 10) {
      situacao = "Soberano do Inferno";
    }
  }

  return (
    <div className="hotel">
      <div className="situacao">{situacao}</div>
      <div className="hospedes">
        <img src={data.foto?.neutro} alt={hospedes.nome} />

        <div className="nome">{hospedes.nome}</div>
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
