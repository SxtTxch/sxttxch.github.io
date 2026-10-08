import { achievementsContent } from './achievementsContent.js'
import { educationContent } from './educationContent.js'
export const fileSystem = [
	{ name: "projects", type: "folder", content: [
        {
            "name": "hashmap_impl",
            "type": "link",
            "content": "https://github.com/SxtTxch/hashmap_impl"
        },
        {
            "name": "kccw",
            "type": "link",
            "content": "https://github.com/SxtTxch/kccw"
        },
        {
            "name": "sxttxch.github.io",
            "type": "link",
            "content": "https://github.com/SxtTxch/sxttxch.github.io"
        },
        {
            "name": "threadflow",
            "type": "link",
            "content": "https://github.com/SxtTxch/threadflow"
        },
        {
            "name": "train_showcase",
            "type": "link",
            "content": "https://github.com/SxtTxch/train_showcase"
        },
    ]},
	{ name: "school-achievements", type: "folder", content: achievementsContent },
	{ name: "education", type: "text", content: educationContent },
	{ name: "contact", type: "text", content: 
		`
		Feel free to reach out to me on discord: <a href="https://discord.com/users/995743379193331743" target="_blank">sxttxch</a>
		<hr>My email address: sxttxch.2@wp.pl
		`
	},
]
