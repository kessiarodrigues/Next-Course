interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  reading?: boolean;
  className?: string
  change?: (value:any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-4">{props.text}</label>
      <input className={`border border-purple-500 rounded-lg focus:outline-none
      px-4 py-2  bg-gray-100 ${props.reading ? '' : 'focus:bg-white'}`}
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.reading}
        onChange={e => props.change?.(e.target.value)}
      ></input>
    </div>
  );
}
