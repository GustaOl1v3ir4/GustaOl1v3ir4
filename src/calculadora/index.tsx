
import { useState } from "react";

interface FieldProps {
  label: string
  placeholder?: string
  onChange: (v: string) => void
}

function Field(props: FieldProps) {

  return (
    <div className="flex flex-col mt-3">
      <label>{props.label}</label>
      <input
        id="inputValue"
        type="number"
        className="bg-gray-900 rounded p-2"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  )
}

const CalculatorPage: React.FC = () => {

  const [soma, setSoma] = useState<number>()
  const [resultado, setResultado] = useState<string>('0')

  const [meuVetor, setItems] = useState<string[]>([]);

  const vetor = () => {
    setItems([...meuVetor, String(soma)])
  }

  const calc = () => {
    if (!!soma) {
      const res = Number(resultado) + soma;
      setResultado(String(res))
      vetor();
    } else {
      const res = Number(resultado) + 0;
      setResultado(String(res))
      vetor();
    }
  }
  
  return (
    <div className="bg-gray-950 flex flex-col text-white justify-center items-center w-[100vw] h-[100vh] p-4">
      <h1 className="text-4xl text-center w-full">Calculadora</h1>

      <Field
        label="Valor"
        placeholder="Insira o valor"
        onChange={(v) => setSoma(Number(v))}
      />

      <button className="bg-gray-900 mt-4 p-2 rounded" onClick={calc}>
        Clique e adicione o próximo número
      </button>

      <div>
        {meuVetor.length > 0 && (
          <div className="text-xl text-right">
            <ul>
              {meuVetor.map((item, index) => (
                <div className="flex flex-row-reverse">
                  <li key={index}>{item}</li>
                  <li>+</li>
                </div>
              ))}
            </ul>
          </div>
        )}

        {!!resultado && (
          <div className="text-xl text-right">
            <hr />
            <h2>{resultado}</h2>
          </div>
        )}
      </div>

    </div>
  );
};
export default CalculatorPage;
