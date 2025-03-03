import "./Intro.css"

export default function Intro(props) {
	const bgImgSrc = `${import.meta.env.VITE_PUBLIC_URL}/index/intro_banner.jpg`
	return (
		<div className="h-80 relative">
			<img className="w-full h-full object-cover" src={bgImgSrc} />
			<section className="intro">
				<div className="container mx-auto flex h-full flex-col justify-center items-center">
					<h3 className="text-2xl font-semibold pb-4">Welcome to iosmates.com!</h3>
					<p className="text-base">We offer cost-effective iOS development outsourcing with skilled talent from Europe. </p>
					<p className="text-base">Our flexible solutions provide quality service at competitive rates, tailored to meet your needs</p>
				</div>
			</section>
		</div>
	);
}