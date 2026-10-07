import Icon from './Icon.jsx';

export default function FileExplorerEntry({ name, type, path, onFileExplorerEntryClick, onFileExplorerEntryInteraction }) {
    return (
        <div className="FileExplorerEntry" onClick={onFileExplorerEntryClick} onDoubleClick={(event) => {onFileExplorerEntryInteraction(event, path)}}>
            <Icon
                type={type}
                name={name}
            />
            <div id="FileExplorerEntryFileType">
                {type}
            </div>
        </div>
    );
}
