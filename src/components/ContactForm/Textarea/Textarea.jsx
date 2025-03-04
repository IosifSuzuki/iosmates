import "./Textarea.css"


export default function Textarea(props) {
	const id = props.id;
	const labelText = props.labelText;
	const placeholder = props.placeholder;
	const isRequired = props.isRequired || false;
	
	return (
       <div>
           <label htmlFor={id} className="block mb-2 text-sm font-medium text-dark-title">{labelText} {isRequired ? <span className="text-red-700 font-bold text-lg">*</span> : <></>}</label>
           <textarea id={id} rows="6" className="text-area p-2.5 w-full text-sm bg-dark-background text-dark-title rounded-lg focus:border-dark-hightlight" placeholder={placeholder}></textarea>
       </div>
	);
}