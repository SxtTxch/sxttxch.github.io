import TextFileIcon from '../assets/text.svg';

export default function File({name, onFileInteracted, applyDesktopInteractionStyles}) {
	return (
		<div onClick={applyDesktopInteractionStyles} onDoubleClick={onFileInteracted} className='icon pointer fileFlex'>
		        <img src={TextFileIcon} />
			<div class='iconLabel'>{name}</div>
		</div>
	);
}
