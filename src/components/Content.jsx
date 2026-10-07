import './Content.css'

import Typewriter from './TypeWriter.jsx';
import LearnMore from './LearnMore.jsx';
import Techstack from './Techstack.jsx';
import WebDevStack from './WebDevStack.jsx';
import Desktop from './Desktop.jsx';
import Hello from './Hello.jsx';

import Rust from '../assets/rust.svg';
import Python from '../assets/python.svg';
import Lua from '../assets/lua.svg';
import Luau from '../assets/luau.svg';
import React from '../assets/react.svg';
import Astro from '../assets/astro.svg';
import Typescript from '../assets/typescript.svg';
import Neovim from '../assets/neovim.svg';
import Nextjs from '../assets/nextjs.svg';
import VisualStudioCode from '../assets/visual-studio-code.svg';
import Git from '../assets/git.svg';
export default function Content() {
	return (
		<div id='content'>
			<div id="landing-view">
				<div id="left-side">
					<p><Hello/>, <Typewriter className="big" text="I'm Kacper"/></p>
					<p>Computer Science for Embedded Systems student at AGH University of Krakow. I am deeply interested in high and low-level software development using Python, Lua, and Rust. I also enjoy building web applications using tools like React, Astro, and Vite.</p>

					<div id="wrapper">
						<Techstack icon={[Rust, Python, Luau, Typescript]} label="Core"
							text="I build my solutions using fast, both low and high level programming languages."

						/>
						<Techstack icon={[Lua, Luau]} label="Scripting"
							text="Luau and lua are powerful tools that aid me while scripting or during game development sessions."
						/>
						
						<Techstack icon={[React, Astro, Nextjs]} label="Web development"
							text="My webpages are mostly built and powered by technologies built around react and other frameworks" 
						/>
						<Techstack icon={[Neovim, VisualStudioCode, Git]} label="Work environment"
							text="I use multiple tools to enrich my development environment and make coding easier"
						/>
					</div>
					<LearnMore/>
				</div>
				<div id="breaker"></div>
				<div id="right-side">
				    <p>
				I gained experience delivering apps powered by Firebase, MariaDB/MySQL, CMS systems such as Joomla or Wordpress, Node.js and all kinds of GoogleAPIs. I am able to adapt to a team-based workflow with my knowledge of git and various version systems. My experience regarding web development can be backed by the experience of users benefiting from them. Find out more and click learn more!
				    </p>
				    <WebDevStack />
				</div>
			</div>
			<Desktop />	
		</div>
	);
}
