import Icon from './Icon.jsx';

export default function FileExplorerEntry({ name, type, content, path, onFileExplorerEntryClick, onFileExplorerEntryInteraction }) {
    return (
        <div className="FileExplorerEntry" onClick={onFileExplorerEntryClick} onDoubleClick={(event) => {onFileExplorerEntryInteraction(event, path, content, type)}}>
            <Icon
                type={type}
                name={name}
                content={content}
            />
            <div id="FileExplorerEntryFileType">
                {type}
            </div>
        </div>
    );
}
