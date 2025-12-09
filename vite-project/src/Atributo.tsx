type AtributoProps = {
  icone: string;
  valor: number;
};

export default function Atributo({ icone, valor }: AtributoProps) { 
  return (
    <div className="atributo">
      {/* Garantir que valor esteja entre 0 e 10 para evitar RangeError em String.repeat */}
      {(() => {
        const v = Math.max(0, Math.min(10, Math.floor(valor)));
        return (
          <>
            <span className="ativo">{icone.repeat(v)} </span>
            <span className="desabilitado">{icone.repeat(10 - v)}</span>
          </>
        );
      })()}
    </div>
  );
}