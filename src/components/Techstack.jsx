import "./Techstack.css";

export default function Taskbar({label, icon, text}) {
	return (
		<>
		<div class="techstack-container">
			<div class="techstack-label">{label}</div>
			<div class="techstack">
				{icon.map((Icon, index) => (
					<img class="pointer" src={Icon} key={index}/>
				))}
				<p>{text}</p>
			</div>
		</div>
		</>
	);
}
