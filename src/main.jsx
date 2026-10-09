import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./global.css"
import App from './App.jsx'

function getDeviceType() {
    let isMobile = false;
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        isMobile = !!mQ.matches;
    } else if ('orientation' in window) {
        isMobile = true;
    } else {
        var UA = navigator.userAgent;
        isMobile = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
    return isMobile ? "mobile" : "desktop";
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App device={getDeviceType()}/>
  </StrictMode>,
)


