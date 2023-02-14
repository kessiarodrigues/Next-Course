interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  reading?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col ">
      <label className="mb-4">{props.text}</label>
      <input className={`border border-purple-500 rounded-lg focus:outline-none
      px-4 py-2  bg-gray-100 ${props.reading ? '' : 'focus:bg-white'}`}
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.reading}
      ></input>
    </div>
  );
}
