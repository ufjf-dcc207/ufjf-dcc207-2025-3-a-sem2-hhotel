import { useState } from "react";
import "./hotel.css";
import Atributo from "./Atributo";

const data: HospedeType = {
  nome: "Sr. Pentious",
  foto: { neutro: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAZard7_5ha48cpkezXmudLN1_LkHrtjgdQ&s",
redimido: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsuvf9XP626n_VyyNnaewk6FVjH7hAzbamg&s", soberano: "" },
  bondade: 5,
  maldade: 3,
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
    // garantir que os valores fiquem entre 0 e 10
    const novoBondade = Math.min(10, hospedes.bondade - 1);
    const novoMaldade = Math.max(0, hospedes.maldade + 1);
    // se nada mudar, não atualiza
    if (novoBondade === hospedes.bondade && novoMaldade === hospedes.maldade) return;
    setHospedes({
      ...hospedes,
      bondade: novoBondade,
      maldade: novoMaldade,
    });
  }

  function MasAções() {
    // garantir que os valores fiquem entre 0 e 10
    const novoMaldade = Math.min(10, hospedes.maldade - 1);
    const novoBondade = Math.max(0, hospedes.bondade + 1);
    if (novoMaldade === hospedes.maldade && novoBondade === hospedes.bondade) return;
    setHospedes({
      ...hospedes,
      bondade: novoBondade,
      maldade: novoMaldade,
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
