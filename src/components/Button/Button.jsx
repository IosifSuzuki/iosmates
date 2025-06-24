import './Button.css';
import Spinner from './../Spinner/Spinner';

export default function Button(props) {
  const text = props.children;
  const isLoading = props.isLoading;
  const type = props.type ?? 'submit';
  const onClick = props.onClick;
  const extraClassName = props.className ?? '';
  let baseClassName =
    'button text-subtitle hover:text-title font-extrabold md:font-bold text-md md:text-lg p-2.5 text-center';
  const className = [
    ...baseClassName.split(' '),
    ...extraClassName.split(' '),
  ].join(' ');
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? <Spinner /> : <></>} &nbsp; {text} &nbsp;
    </button>
  );
}
