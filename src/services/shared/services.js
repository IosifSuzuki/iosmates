import Converter from './../md/converter';
import { Style } from './../md/config';

export async function getServices() {
	const services = [
		{
			path: '/services/development.md',
		},
		{
			path: '/services/hiring.md',
		},
	];
	const converter = new Converter(Style.SHORT);
	for (let i = 0; i < services.length; i++) {
		const path = services[i].path;
		const res = await fetch(path);
		if (!res.ok) {
			throw new Error('file not found');
		}
		const text = await res.text();
		services[i].content = converter.makeHtml(text);
	}
	return services;
}
