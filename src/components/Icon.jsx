import Folder from './Folder.jsx';
import File from './File.jsx';

export default function Icon({ type, name, content, path, onFileInteracted, applyDesktopInteractionStyles }) {
    const handleInteraction = (event) => onFileInteracted?.(event, path, content, type);
    const handleStyles = (event) => applyDesktopInteractionStyles?.(event, name);

    return type === "folder" 
        ? <Folder onFileInteracted={handleInteraction} applyDesktopInteractionStyles={handleStyles} name={name} /> 
        : <File onFileInteracted={handleInteraction} applyDesktopInteractionStyles={handleStyles} name={name} type={type} />;
}
