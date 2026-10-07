import interact from 'interactjs';
import { fileSystem } from '../data/fileSystem.js';
import { useState, useEffect } from 'react';
import Icon from './Icon.jsx';
import FileExplorerEntry from './FileExplorerEntry.jsx'; 

import Back from '../assets/back.svg';
import Close from '../assets/close.svg';
import Search from '../assets/search.svg';
import Minimize from '../assets/minimize.svg';
import './Desktop.css';

export default function Desktop() {
    let [path, setPath] = useState('');
    let currentSelected = undefined;
    let lastSelected = undefined;

useEffect(() => {
    const explorer = interact('#FileExplorer');

    explorer.draggable({
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: '#Desktop'
            })
        ],

        listeners: {
            move(event) {
                const target = event.target;

                const x = (parseFloat(target.dataset.x) || 0) + event.dx;
                const y = (parseFloat(target.dataset.y) || 0) + event.dy;

                target.style.transform = `translate(${x}px, ${y}px)`;

                target.dataset.x = x;
                target.dataset.y = y;
            }
        }
    });

    return () => {
        explorer.unset();
    };
}, []);

	function applyDesktopInteractionStyles(event, name) {
		let interactedElement = event.currentTarget;
		let desktopIconContainer = document.getElementById("DesktopIcons");

		for (let i=0; i < desktopIconContainer.children.length; i++) {
			let currentIcon = desktopIconContainer.children[i];
			if (!currentIcon.classList.contains('icon')) { continue };
			if (currentIcon.classList.contains('selected') && currentIcon != interactedElement) { currentIcon.classList.remove('selected'); continue }
		}

		interactedElement.classList.add('selected');
	}

	function applyDesktopInteractionStylesForFileExplorer(event, name) {
	    let selectedIcon = event.currentTarget;
	    let FileExplorer = document.getElementById("FileExplorer");
	    for (let i=0; i < FileExplorer.children.length; i++) {
		let currentIcon = FileExplorer.children[i];
		if (currentIcon.classList.contains('selected_explorer') && currentIcon != selectedIcon) { currentIcon.classList.remove('selected_explorer'); continue } 
	    }
	    selectedIcon.classList.add('selected_explorer');
	}

	function onFileInteracted(event, IconPath) {
		console.log(IconPath);
    		setPath(IconPath);
}

    function getCurrentPathContent(path) {
	let currentPathContent = fileSystem
	let currentPath = path
	while (currentPath) {
	    let nextPath = currentPath.split("/").filter(Boolean);
	    let currentObject = nextPath[0]
		
            for (let i=0; i < currentPathContent.length; i++) {
		if (currentPathContent[i].name == currentObject) {
		    currentPathContent = currentPathContent[i].content
		    break
		}
	    }
	    currentPath = nextPath.slice(1).join("/");
	};
	return currentPathContent
	
    };
    function onBackIconClicked() {
        setPath(path => {
            const parts = path.split("/").filter(Boolean);
            parts.pop();
	    return parts.length === 0 ? "" : "/" + parts.join("/");
        });
    }
    function clearPath() {
	setPath("");
    };
    const content = path !== "" ? getCurrentPathContent(path) : null;
    return (
        <div id="Desktop" className="DesktopHidden">
            <div id="DesktopIcons">
                {fileSystem.map((item) => (
			<Icon type={item.type} name={item.name} key={item.name} path={`/${item.name}`} onFileInteracted={onFileInteracted} applyDesktopInteractionStyles={applyDesktopInteractionStyles} />
                    )
                )}
            </div>
	 
        {path !== "" && (
            <div id="FileExplorer">
                <div id="FileExplorerHeader">
                    kacper_oleksy@pop-os:~{path}
		    <div id="FileExplorerIconWrapper">
			    <div id="Search" className="FileExplorerIcon pointer"><img src={Search}/></div>
			    <div id="Minimize" onClick={clearPath} className="FileExplorerIcon pointer"><img src={Minimize}/></div>
			    <div id="Back" onClick={onBackIconClicked} className="FileExplorerIcon pointer"><img src={Back}/></div>
			    <div id="Close" onClick={clearPath} className="FileExplorerIcon pointer"><img src={Close}/></div>
		    </div>
                </div>
		<div id="FileExplorerBody">
                {typeof content === "object"
                    ? content.map((item) => (
			<FileExplorerEntry key={item.name} name={item.name} type={item.type} path={`${path}/${item.name}`} content={item.content} onFileExplorerEntryClick={applyDesktopInteractionStylesForFileExplorer} onFileExplorerEntryInteraction={onFileInteracted}/>	
                    ))
                     : <div id="FileExplorerContent" dangerouslySetInnerHTML={{ __html: content }}>
		      </div>
                }
		</div>
            </div>
        )}

        </div>
    );
}

