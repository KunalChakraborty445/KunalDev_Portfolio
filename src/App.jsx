import React from 'react'
import { Navbar, Welcome, Dock } from "#componets"
import gsap from "gsap"
import {Draggable} from "gsap/Draggable"
import {Terminal} from "#windows";

gsap.registerPlugin(Draggable)
const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
        </main>
    )
}
export default App
