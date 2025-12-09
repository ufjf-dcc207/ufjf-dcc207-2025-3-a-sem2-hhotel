type AtributoProps = {
  icone: string;
  valor: number;
};

export default function Atributo({ icone, valor }: AtributoProps) { 
  return (
    <div className="atributo">
      {/* Garantir que valor esteja entre 0 e 10 para evitar RangeError em String.repeat */}
      {(() => {
        // garantir que o valor seja um número finito; caso contrário, usar 0
        const safeValor = Number.isFinite(valor) ? valor : 0;
        const v = Math.max(0, Math.min(10, Math.floor(safeValor)));

        // garantir que icone seja uma string antes de chamar repeat
        const ic = String(icone);

        return (
          <>
            <span className="ativo">{ic.repeat(v)} </span>
            <span className="desabilitado">{ic.repeat(10 - v)}</span>
          </>
        );
      })()}
    </div>
  );
}