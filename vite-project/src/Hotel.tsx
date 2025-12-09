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
  const ImagemRedimido: string = "https://i.pinimg.com/736x/1c/4b/fe/1c4bfe36dba569e3a7d51af4f61c117a.jpg";
  const ImagemSoberano: string = "https://i.pinimg.com/1200x/4c/d5/7d/4cd57d3ecc22188c53bb284118199a94.jpg";  

  const [hospedes, setHospedes] = useState<HospedeType>({
    nome: "Sr. Pentious",
    bondade: 3,
    maldade: 2,
    situacao: "Neutro"
  });



  function BoasAções() {
    // garantir que os valores fiquem entre 0 e 5
    console.log("Executando BoasAções");
    const novoBondade = Math.min(5, hospedes.bondade + 1);
    const novoMaldade = Math.max(0, hospedes.maldade - 1);
    
    // se nada mudar, não atualiza
    if (novoBondade === hospedes.bondade && novoMaldade === hospedes.maldade) return;
    const novaSituacao = (novoBondade === 5) ? "Redimido" : (novoMaldade === 5) ? "Soberano" : "Neutro";
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
    const novaSituacao = (novoMaldade === 5) ? "Soberano" : (novoBondade === 5) ? "Redimido" : "Neutro";
    setHospedes({
      ...hospedes,
      situacao: novaSituacao,
      bondade: novoBondade,
      maldade: novoMaldade,
    });
  }

  function ImagemSituacao() {
    if (hospedes.situacao === "Redimido") {
      return ImagemRedimido;
    } else if (hospedes.situacao === "Soberano") {
      return ImagemSoberano;
    } else {
      return ImagemNeutra;
    }
  }


  return (
    <div className="hotel">
      <div className="situacao">{hospedes.situacao}</div>
      <img src={ImagemSituacao()} style={{ width: '200px', border: '1px solid red' }} />
      <div className="hospedes">
        <div className="nome">{hospedes.nome}</div>
        <Atributo icone="😇" valor={hospedes.bondade} />
        <Atributo icone="😈" valor={hospedes.maldade} />
      </div>
      <div className="acoes">
        <button onClick={BoasAções}>Ajudar uma velinha</button>
        <button onClick={MasAções}>Roubar um doce de uma criança</button>
        <button onClick={MasAções}>Sabotar alguém</button>
      </div>
    </div>
  );
}
