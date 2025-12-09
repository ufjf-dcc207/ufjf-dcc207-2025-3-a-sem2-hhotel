import { useState } from "react";
import "./hotel.css";
import data from "./data.json";
import { Atributo } from "./Atributo";

export type HospedeType = {
  nome: string;
  bondade: number;
  maldade: number;
  situacao: string;
  imagemNeutra: string;
  imagemRedimido: string;
  imagemSoberano: string;
};

export default function Hotel() {
  const [hospedes, setHospedes] = useState<HospedeType[]>(data);
  const [index, setIndex] = useState(0);
  const atual = hospedes[index];

  function PróximoHospede() {
    const próximoIndex = (index + 1) % hospedes.length;
    setIndex(próximoIndex);
  }

  function AnteriorHospede() {
    const anteriorIndex = (index - 1 + hospedes.length) % hospedes.length;
    setIndex(anteriorIndex);
  }

  function BoasAções() {
    const novoBondade = Math.min(5, atual.bondade + 1);
    const novoMaldade = Math.max(0, atual.maldade - 1);

    if (novoBondade === atual.bondade && novoMaldade === atual.maldade) return;

    const novaSituacao =
      novoBondade === 5
        ? "Redimido"
        : novoMaldade === 5
        ? "Soberano"
        : "Neutro";

    const atualiza = [...hospedes];
    atualiza[index] = {
      ...atualiza[index],
      situacao: novaSituacao,
      bondade: novoBondade,
      maldade: novoMaldade,
    };

    setHospedes(atualiza);
  }

  function MasAções() {
    const novoMaldade = Math.min(5, atual.maldade + 1);
    const novoBondade = Math.max(0, atual.bondade - 1);

    if (novoMaldade === atual.maldade && novoBondade === atual.bondade) return;

    const novaSituacao =
      novoMaldade === 5
        ? "Soberano"
        : novoBondade === 5
        ? "Redimido"
        : "Neutro";

    const atualiza = [...hospedes];
    atualiza[index] = {
      ...atualiza[index],
      situacao: novaSituacao,
      bondade: novoBondade,
      maldade: novoMaldade,
    };

    setHospedes(atualiza);
  }

  function ImagemSituacao() {
    if (atual.situacao === "Redimido") {
      return atual.imagemRedimido;
    } else if (atual.situacao === "Soberano") {
      return atual.imagemSoberano;
    } else {
      return atual.imagemNeutra;
    }
  }

  return (
    <div className="hotel">
      <h1 className="hotel-nome">Hazbin Hotel</h1>
      <div className="situacao">{atual.situacao}</div>
      <img
        src={ImagemSituacao()}
        style={{ width: "200px", border: "1px solid red" }}
      />
      
      <div className="hospedes">
        <div className="nome">{atual.nome}</div>
        <Atributo icone="😇" valor={atual.bondade} />
        <Atributo icone="😈" valor={atual.maldade} />
      </div>
      <div className="acoes">
        <button onClick={BoasAções}>Ajudar uma velinha</button>
        <button onClick={BoasAções}>Enfrentar seu pecado</button>
        <button onClick={MasAções}>Roubar um doce de uma criança</button>
        <button onClick={MasAções}>Sabotar alguém</button>

        <div className="navegacao">
          <button onClick={AnteriorHospede}>◀ Anterior</button>
          <button onClick={PróximoHospede}>Próximo ▶</button>
        </div>
      </div>
    </div>
  );
}
