import './TextInput.css';

export default function TextInput(props) {
  const id = props.id;
  const labelText = props.labelText;
  const placeholder = props.placeholder;
  const isRequired = props.isRequired || false;
  const onChange = props.onChange;
  const type = props.type || 'text';
  const value = props.value || '';

  return (
    <div>
      <label htmlFor={id} className='block mb-2 text-sm font-medium text-title'>
        {labelText}{' '}
        {isRequired ? (
          <span className='text-red-700 font-bold text-lg'>*</span>
        ) : (
          <></>
        )}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className='border-2 border-separate focus:border-transparent text-title bg-background text-sm rounded-lg block w-full p-2.5'
        placeholder={placeholder}
      />
    </div>
  );
}
