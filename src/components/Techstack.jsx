import "./Techstack.css";

export default function Taskbar({label, icon, text}) {
	return (
		<>
		<div class="techstack-container">
			<div class="techstack-label">{label}</div>
			<div class="techstack">
                <div class="techstack-image-wrapper">
                    {icon.map((Icon, index) => (
                        <img class="pointer" src={Icon} key={index}/>
                    ))}
                </div>
				<p>{text}</p>
			</div>
		</div>
		</>
	);
}
