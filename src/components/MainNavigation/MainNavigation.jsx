import "./MainNavigation.css"
import Item from "./Item/Item"
import Button from "./Button/Button"
import Logo from "./Logo/Logo"

export default function MainNavigation(props) {
	const items = [
		{
			"title": "Services",
			"path": "#",
		},
		{
			"title": "About us",
			"path": "#",
		},
		{
			"title": "Our work",
			"path": "#",
		},
	]
	const logoText = props.logoText

	const itemJSXs = items.map((item, idx) => {
		return (
			<Item key={idx} title={item.title} path={item.path}/>
		);
	});
	return (
		<header>
			<nav className="container flex row-flex justify-between mx-auto py-4 text-dark-subtitle">
				<div className="logo text-lg font-bold p-2">
					<Logo title={logoText} />
				</div>
				<ul className="flex row-flex gap-5">
					{itemJSXs}
					<Button title={"Let's talk"} path="#"/>
				</ul>
			</nav>
		</header>
	);
}