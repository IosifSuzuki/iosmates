import './Button.css';
import Spinner from './../Spinner/Spinner';

export default function Button(props) {
  const text = props.children;
  const isLoading = props.isLoading;
  return (
    <button
      type='submit'
      disabled={isLoading}
      className='bg-dark-hightlight text-dark-subtitle hover:text-dark-title font-bold rounded-lg text-md p-2.5 text-center'
    >
      {isLoading ? <Spinner /> : <></>} &nbsp; {text}
    </button>
  );
}
