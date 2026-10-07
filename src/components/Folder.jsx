import './Icon.css';
import './Folder.css';
import FolderIcon from '../assets/folder.svg';

export default function Folder({name, onFileInteracted, applyDesktopInteractionStyles}) {
	return (
		<div onClick={applyDesktopInteractionStyles} onDoubleClick={onFileInteracted} className='icon pointer folderFlex'>
			<img src={FolderIcon} />
			<div class='iconLabel'>{name}</div>
		</div>
	);
}
