import './CookieConsent.css';

import FilledButton from './../FilledButton/FilledButton.jsx';

import useCookie from './../../hooks/useCookie/useCookie';

export default function CookieConsent(props) {
	const expirationDateDays = 120;

	const expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + expirationDateDays);

	const [cookieConsestValue, setCookieConsestValue] =
		useCookie('cookie_consest');

	const title = props.title;
	const description = props.description;
	const extraClassName = props.className ?? '';
	const id = props.id;
	const onClose = props.onClose;
	let className = 'bg-overlay w-full';
	className = [className, extraClassName]
		.join(' ')
		.split(' ')
		.map((item) => item.trim())
		.join(' ');
	const onClickOK = () => {
		setCookieConsestValue(true, expirationDate);
		onClose();
	};
	const onClickDecline = () => {
		setCookieConsestValue(false, expirationDate);
		onClose();
	};

	return (
		<div id={id} className={className}>
			<div className='container p-4 mx-auto flex gap-12 flex-col'>
				<div className='flex flex-col md:gap-4 gap-8 justify-items-center text-title'>
					<h3 className='text-title text-center font-bold text-xl'>{title}</h3>
					<div className='flex flex-col gap-2 items-start'>
						<p className='indent-6 text-justify text-description text-base'>
							{description}{' '}
							<a
								className='font-semibold text-base hover:underline text-hightlight'
								href='/privacy-policy'
							>
								Learn more ...
							</a>
						</p>
					</div>
				</div>
				<div className='flex flex-row justify-between gap-4 md:gap-40'>
					<FilledButton className='flex-1' onClick={onClickDecline}>
						Decline
					</FilledButton>
					<FilledButton className='flex-1' onClick={onClickOK}>
						OK
					</FilledButton>
				</div>
			</div>
		</div>
	);
}
