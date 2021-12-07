const about = document.querySelector("#about-link");
const work = document.querySelector("#work-link");
const contact = document.querySelector("#contact-link");


	about.addEventListener("click", scrollToAbout);
		function scrollToAbout() {
			location.href = "#welcome-section";
		}

	work.addEventListener("click", scrollToWork);
		function scrollToWork() {
			location.href = "#project";
		}

	contact.addEventListener("click", scrollToContact);
		function scrollToContact() {
			location.href = "#contact";
		}