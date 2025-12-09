import { useState } from "react";
import "./hotel.css";

const data = json as HospedeType;

export type HospedeType = {
  nome: string;
  bondade: number;
  maldade: number;
};

export default function Hotel() {
    const [hospedes, setHospedes] = useState<HospedeType>({
        nome: "Dracula",
        bondade: 3,
        maldade: 5,
    });
    
    return (