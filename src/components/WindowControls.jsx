import React from 'react'
import useWindowStore from "#store/window.js";

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();

    return (
        <div id="window-controls" role="group" aria-label="Window controls">
            <button
                type="button"
                className="close"
                aria-label="Close window"
                onClick={() => closeWindow(target)}
            />
            <button type="button" className="minimize" aria-label="Minimize window" disabled />
            <button type="button" className="maximize" aria-label="Maximize window" disabled />
        </div>
    )
}
export default WindowControls
