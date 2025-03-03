import "./index.css"
import MainNavigation from "./../../components/MainNavigation/MainNavigation"
import Intro from "./../../components/Intro/Intro"
import {CardItemStyle, HCardCollection} from "./../../components/HCardCollection/HCardCollection"
import {OverviewCardItem} from "./../../components/OverviewCard/OverviewCard"
import {CardItemOption, OptionsCardItem} from "./../../components/OptionsCard/OptionsCard"
import {ContactFooterForm, Footer} from "./../../components/Footer/Footer"

const benefits = {
	"title": "Why choose us?".toUpperCase(),
	"items": [
		new OverviewCardItem("Cost-effective", "We provide skilled iOS developers at competitive rates, ensuring quality without unnecessary costs."),
		new OverviewCardItem("Skilled developers", "Our team specializes in Swift, SwiftUI, UIKit, and modern architectures, delivering reliable and maintainable solutions."),
		new OverviewCardItem("Flexible models", "Choose a model that fits your needs: dedicated developers, project-based work, or a hybrid approach."),
	],
}

const techStack = {
	"title": "Tech stacks".toUpperCase(),
	"items": [
		new OptionsCardItem("Tools", 
			[
				new CardItemOption(1, "Xcode"),
				new CardItemOption(2, "Swift Package Manager"),
				new CardItemOption(3, "CocoaPods"),
				new CardItemOption(4, "Fastlane"),
				new CardItemOption(5, "TestFlight"),
			],
		),
		new OptionsCardItem("Skills", 
			[
				new CardItemOption(1, "Swift & Objective-C"),
				new CardItemOption(2, "MVVM & MVVM-C"),
				new CardItemOption(3, "Swift Composable Architecture"),
				new CardItemOption(4, "Swift Concurrency"),
				new CardItemOption(5, "UX"),
			],
		),
		new OptionsCardItem("Storage & Cloud", 
			[
				new CardItemOption(1, "Core Data"),
				new CardItemOption(2, "File System Management"),
				new CardItemOption(3, "Firebase Cloud Firestore"),
				new CardItemOption(4, "iCloud"),
				new CardItemOption(5, "Keychain & UserDefaults"),
				new CardItemOption(6, "REST"),
			],
		),
	]
}

const contactPhoneNumbers = [
	"+380663174826",
	"+36703509193"
]
const contactForm = new ContactFooterForm(contactPhoneNumbers, "example@gmail.com", "89434, Ukraine, reg. Zakarpatska, district Uzhhorodskyi, town Dovhe Pole, st. Holovna, build 95")

export default function Index(props) {
	return (
		<div className="font-app bg-dark-background text-dark-regular">
			<MainNavigation logoText="iosmates.com" />
			<main className="flex flex-col gap-8">
				<Intro />
				<HCardCollection title={benefits.title} cardItems={benefits.items} style={CardItemStyle.PLAIN} />
				<HCardCollection title={techStack.title} cardItems={techStack.items} style={CardItemStyle.OPTIONS} />
			</main>
			<Footer contactForm={contactForm}/>
		</div>
	)
}