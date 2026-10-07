import './LearnMore.css';
import { animate } from 'animejs';

export function onClick() {
    const landing_view = document.getElementById("landing-view");
    const desktop = document.getElementById("Desktop");
    const body = document.body; 

    animate(landing_view, {
        opacity: [
            { to: 0, duration: 400, ease: 'inExpo' }
        ],
        scale: [
            { from: 1, to: 1.3, duration: 500, ease: 'inExpo' }
        ],
        onComplete: () => {
            landing_view.classList.add("hide");
            body.classList.add("desktop_transition", "desktop_background");
            desktop.classList.remove("DesktopHidden");
            desktop.classList.add("DesktopVisible");
            animate(desktop, {
                opacity: [
                    { from: 0, to: 1, duration: 600, ease: 'out(3)' }
                ],
            });
        }
    });
};


export default function LearnMore() {
	return (
		<div id="learn_more" class="pointer" onClick={onClick}>
			learn more...
		</div>	
	);
}
