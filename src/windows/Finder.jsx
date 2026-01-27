import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components";
import {Search} from "lucide-react";
import {locations} from "#constants";
import useLocationStore from "#store/location.js";
import clsx from "clsx";
import useWindowStore from "#store/window.js";

const Finder = () => {
    const { openWindow } = useWindowStore();
    const {activeLocation, setActiveLocation} = useLocationStore();

    const openItem = (item) => {
        if(item.fileType === 'pdf') return openWindow("resume");
        if(item.kind === "folder") return setActiveLocation(item);
        if(["fig", "url"].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");

        openWindow(`${item.fileType}${item.kind}`, item);
    };

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(item.id === activeLocation ? "active" : "not-active")}
                    >
                        <img
                            src={item.icon}
                            className="w-4" alt={item.name}
                        />
                        <p className="tex-sm font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
);


    return (
        <>
            <div id="window-header">
                <WindowControls target="finder"/>
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-fu;ll">
                <div className="sidebar">
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('Work', locations.work.children)}
                </div>

            <ul className="content">
                {activeLocation?.children.map((item)=>(
                    <li
                        key={item.id}
                        className={item.position}
                        onClick={() => openItem(item)}>
                        <img src={item.icon} className="w-14 cursor-pointer" alt={item.name} />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
            </div>

        </>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
