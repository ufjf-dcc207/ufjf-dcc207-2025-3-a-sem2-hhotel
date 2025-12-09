import { useState } from "react";
import "./hotel.css";
import Atributo from "./Atributo";

export type HospedeType = {
  id?: number;
  nome: string;
  bondade: number;
  maldade: number;
};

export default function Hotel() {
  let situacao = "neutro";
  const ImagemNeutra: string = "https://static.zerochan.net/Sir.Pentious.1024.2822103.webp";
  const ImagemRedimido: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsuvf9XP626n_VyyNnaewk6FVjH7hAzbamg&s";
  const ImagemSoberano: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bYk1bXoXo3Yk1bXoXo3Yk1bXoXo3Yk1bXo&s";  

  const [hospedes, setHospedes] = useState<HospedeType>({
    nome: "Sr. Pentious",
    bondade: 4,
    maldade: 2,
  });

  if (hospedes.bondade === 5) {
    situacao = "redimido";

  } else if (hospedes.bondade === 0) {
    situacao = "condenado";
  } else if (hospedes.maldade == 5) {
    situacao = "Soberano do Inferno";
  }

  function BoasAções() {
    // garantir que os valores fiquem entre 0 e 5
    const novoBondade = Math.min(5, hospedes.bondade + 1);
    const novoMaldade = Math.max(0, hospedes.maldade - 1);
    // se nada mudar, não atualiza
    if (novoBondade === hospedes.bondade && novoMaldade === hospedes.maldade) return;
    setHospedes({
      ...hospedes,
      bondade: novoBondade,
      maldade: novoMaldade,
    });
  }

  function MasAções() {
    // garantir que os valores fiquem entre 0 e 5
    const novoMaldade = Math.min(5, hospedes.maldade + 1);
    const novoBondade = Math.max(0, hospedes.bondade - 1);
    if (novoMaldade === hospedes.maldade && novoBondade === hospedes.bondade) return;
    setHospedes({
      ...hospedes,
      bondade: novoBondade,
      maldade: novoMaldade,
    });
  }

  function ImagemSituacao() {
    if (situacao === "redimido") {
      return ImagemRedimido;
    } else if (situacao === "soberano") {
      return ImagemSoberano;
    } else {
      return ImagemNeutra;
    }
  }

  return (
    <div className="hotel">
      <div className="situacao"><img src={ImagemSituacao()} alt={situacao} style={{ width: '200px', border: '1px solid red' }} /></div>
      <div className="hospedes">
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
