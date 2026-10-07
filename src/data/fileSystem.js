import { achievementsContent } from './achievementsContent.js'
import { educationContent } from './educationContent.js'
export const fileSystem = [
	{ name: "projects", type: "folder", content: [ {name: "kccw-hackyeah-2025", type: "link", content: "www.google.com"} ] },
	{ name: "school-achievements", type: "folder", content: achievementsContent },
	{ name: "education", type: "file", content: educationContent },
	{ name: "contact", type: "file", content: 
		`
		Feel free to reach out to me on discord: <a href="https://discord.com/users/995743379193331743" target="_blank">sxttxch</a>
		<hr>My email address: sxttxch.2@wp.pl
		`
	},
]
