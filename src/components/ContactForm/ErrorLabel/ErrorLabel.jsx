import './ErrorLabel.css';

export default function ErrorLabel(props) {
  const text = props.children;
  return <p className='my-1 text-xs text-red-400'>{text}</p>;
}
