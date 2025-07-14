import { useState, useEffect, useCallback } from 'react';

function getCookieValue(cookieName) {
	const cookie = document.cookie
		.split('; ')
		.find((row) => row.startsWith(`${cookieName}=`));
	if (!cookie) return '';
	return decodeURIComponent(cookie.split('=')[1]);
}

export default function useCookie(cookieName) {
	const [cookieValue, setCookieValue] = useState(() =>
		getCookieValue(cookieName),
	);

	useEffect(() => {
		setCookieValue(getCookieValue(cookieName));
	}, [cookieName]);

	const setCookie = useCallback(
		(value, expirationDate) => {
			const expires = expirationDate
				? expirationDate.toUTCString()
				: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

			document.cookie = `${cookieName}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
			setCookieValue(value);
		},
		[cookieName],
	);

	const deleteCookie = useCallback(() => {
		document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
		setCookieValue('');
	}, [cookieName]);

	return [cookieValue, setCookie, deleteCookie];
}
