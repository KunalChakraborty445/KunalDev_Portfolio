import React, {useState} from 'react'
import { Navbar, Welcome, Dock } from "#components"
import Splash from "#components/Splash.jsx";
import gsap from "gsap"
import {Draggable} from "gsap/Draggable"
import {Terminal, Safari, Resume, Finder, Text, Image, Contact} from "#windows";
import {Home} from "#components/index.js";


gsap.registerPlugin(Draggable)
const App = () => {

    const [showSplash, setShowSplash] = useState(true);

    return (
        <>
            {showSplash && <Splash onFinish={() => setShowSplash(false)} />}
                <div className={showSplash ? "hidden" : ""}>
                    <main>
                        <Navbar />
                        <Welcome />
                        <Dock />

                        <Terminal />
                        <Safari />
                        <Resume />
                        <Finder />
                        <Text />
                        <Image />
                        <Contact />

                        <Home />
                    </main>
                </div>
        </>
    )
}
export default App
