import React from 'react'
import windowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components";
import {Mailbox, Search} from "lucide-react";
import {gallery, photosLinks} from "#constants/index.js";
import useWindowStore from "#store/window.js";

const Photos = () => {

    const {openWindow} = useWindowStore();




    return (
       <>
            <div id="window-header">
                <WindowControls target='photos' />

                <div className="w-full flex justify-end items-center gap-3 text-gray-400">
                <h2>Dev gallery</h2>
                    <Mailbox className="icon" />
                <Search className="icon" />

                </div>
            </div>

           <div className="flex w-full">
               <div  className="sidebar">
               <p className="text-gray-400">Photos</p>
               <ul>
                   {photosLinks.map(({id, icon, title}) => (
                       <li key={id} >
                           <img src={icon} className="flex cursor-pointer" alt={title} />
                            <p>{title}</p>
                       </li>
                   ))}
               </ul>
               </div>


               <div className="gallery">
                   <ul>
                       {gallery.map(({id, img}) => (
                           <li
                               key={id}
                               onClick={() => openWindow("imgfile",
                                   {
                                       id,
                                       name: "Gallery Image",
                                       icon: "/images/image.png",
                                       kind: "file",
                                        fileType: "img",
                                        imageUrl: img,
                                   })}
                           >
                               <img src={img}
                                    className="flex cursor-pointer"
                                    alt={`gallery image ${id}`} />
                           </li>
                       ))}
                   </ul>
               </div>
           </div>




       </>
    )
}

const PhotoWindow = windowWrapper(Photos, "photos");

export default PhotoWindow;
