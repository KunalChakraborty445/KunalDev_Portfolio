import React from "react";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows?.imgfile?.data;
    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>


            <div className="p-5 space-y-6 bg-white">
                {imageUrl ? (
                    <div className="w-full">
                        <img src={imageUrl}
                             alt={name || "imageUrl"}
                             className="w-full h-auto max-h-[70vh] object-contain rounded"
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Text, "imgfile");

export default ImageWindow;

