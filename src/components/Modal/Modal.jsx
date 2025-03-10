import { useRef, useEffect } from 'react';
import './Modal.css';

export default function Modal(props) {
  const modalRef = useRef();
  const title = props.title;
  const isOpen = props.isOpen;
  const children = props.children;
  const onClose = props.onClose;
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.style.display = 'flex';
      modalElement.showModal();
    } else {
      modalElement.style.display = 'none';
      modalElement.close();
    }
  }, [isOpen]);
  return (
    <dialog
      ref={modalRef}
      className='hidden overflow-y-auto overflow-x-hidden bg-transparent w-screen h-screen flex flex-row items-center justify-center'
    >
      <div className='max-w-2xl w-full'>
        <div className='bg-gray-700 rounded-lg shadow-sm'>
          <div className='flex items-center justify-between p-4 border-b rounded-t border-gray-600'>
            <h3 className='text-2xl font-semibold text-dark-title'>{title}</h3>
            <button
              type='button'
              className='text-dark-subtitle bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white'
              onClick={onClose}
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <div className='p-4'>{children}</div>
        </div>
      </div>
    </dialog>
  );
}
