import { useState } from "react";
import "./hotel.css";
import {Atributo} from "./Atributo";

export type HospedeType = {
  nome: string;
  bondade: number;
  maldade: number;
  situacao: string;
};

export default function Hotel() {
  const ImagemNeutra: string = "https://static.zerochan.net/Sir.Pentious.1024.2822103.webp";
  const ImagemRedimido: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsuvf9XP626n_VyyNnaewk6FVjH7hAzbamg&s";
  const ImagemSoberano: string = "https://preview.redd.it/what-do-you-think-sir-pentious-life-was-like-v0-9cemhbw0wc0d1.jpeg?width=640&crop=smart&auto=webp&s=801f564791df01a16eb1d951a970ba0cc5fc2835";  

  const [hospedes, setHospedes] = useState<HospedeType>({
    nome: "Sr. Pentious",
    bondade: 3,
    maldade: 2,
    situacao: "neutro"
  });

  function AtualizaSituacao() {
    if (hospedes.bondade === 5) {
    setHospedes({
      ...hospedes,
      situacao: "redimido"
    });
  }else if (hospedes.maldade === 5) {
    setHospedes({
      ...hospedes,
      situacao: "soberano"
    });
  }else{
    setHospedes({
      ...hospedes,
      situacao: "neutro"
    });
  }
  }


  function BoasAções() {
    // garantir que os valores fiquem entre 0 e 5
    console.log("Executando BoasAções");
    const novoBondade = Math.min(5, hospedes.bondade + 1);
    const novoMaldade = Math.max(0, hospedes.maldade - 1);
    
    // se nada mudar, não atualiza
    if (novoBondade === hospedes.bondade && novoMaldade === hospedes.maldade) return;
    const novaSituacao = (novoBondade === 5) ? "redimido" : (novoMaldade === 5) ? "soberano" : "neutro";
    setHospedes({
      ...hospedes,
      situacao: novaSituacao,
      bondade: novoBondade,
      maldade: novoMaldade,
    });
  }

  function MasAções() {
    // garantir que os valores fiquem entre 0 e 5
    console.log("Executando MasAções");
    const novoMaldade = Math.min(5, hospedes.maldade + 1);
    const novoBondade = Math.max(0, hospedes.bondade - 1);
    if (novoMaldade === hospedes.maldade && novoBondade === hospedes.bondade) return;
    const novaSituacao = (novoMaldade === 5) ? "soberano" : (novoBondade === 5) ? "redimido" : "neutro";
    setHospedes({
      ...hospedes,
      situacao: novaSituacao,
      bondade: novoBondade,
      maldade: novoMaldade,
    });
  }

  function ImagemSituacao() {
    if (hospedes.situacao === "redimido") {
      return ImagemRedimido;
    } else if (hospedes.situacao === "soberano") {
      return ImagemSoberano;
    } else {
      return ImagemNeutra;
    }
  }

  return (
    <div className="hotel">
      <div className="situacao"><img src={ImagemSituacao()} style={{ width: '200px', border: '1px solid red' }} /></div>
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
