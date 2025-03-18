import './Button.css';
import Spinner from './../Spinner/Spinner';

export default function Button(props) {
  const text = props.children;
  const isLoading = props.isLoading;
  return (
    <button
      type='submit'
      disabled={isLoading}
      className='button text-dark-subtitle hover:text-dark-title font-extrabold md:font-bold text-md md:text-lg p-2.5 text-center'
    >
      {isLoading ? <Spinner /> : <></>} &nbsp; {text}
    </button>
  );
}
