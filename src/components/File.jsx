import TextFileIcon from '../assets/text.svg';
import LinkIcon from '../assets/link.svg';
export default function File({name, type, content, onFileInteracted, applyDesktopInteractionStyles}) {
	return type === "text" ? 
		<div onClick={applyDesktopInteractionStyles} onDoubleClick={onFileInteracted} className='icon pointer fileFlex'>
		        <img src={TextFileIcon} />
			<div class='iconLabel'>{name}</div>
		</div>
        :
        <div onClick={applyDesktopInteractionStyles} onDoubleClick={onFileInteracted} className='icon pointer fileFlex'>
            <img src={LinkIcon} />
            <div class='iconLabel'>{name}</div>
		</div>

        ;
}
