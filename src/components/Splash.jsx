import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import {skillsData} from "#constants/index.js";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin)


const Splash = ({ onFinish }) => {
    const [started, setStarted] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const audioRef = useRef(null);
    const helloRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRefs = useRef([]);


    const aboutTextRef = useRef(null);

    const targetAboutText = "Backend Engineer focused on building fast, accessible systems." +
        " I thrive on creating interactive architectures and occasionally dive into the frontend to bring modern," +
        " full-stack ideas to life"
    useEffect(() => {
        if (!showAbout || !aboutTextRef.current) return;
        gsap.to(aboutTextRef.current, {
            duration: 2.5,
            scrambleText: targetAboutText,
            ease: "power2.out",
        });
    }, [showAbout]);

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (!showWelcome) return;

        gsap.fromTo(
            helloRef.current,
            { opacity: 0, scale: 0.85, y: 20, filter: "blur(8px)" },
            { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 1.4, ease: "power3.out" }
        );
    }, [showWelcome]);

    useEffect(() => {
        if (!showAbout) return;

        const tl = gsap.timeline();
        tl.fromTo(
            aboutRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
        );

        tl.fromTo(
            skillsRefs.current,
            { opacity: 0, scale: 0.8, y: 10 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "back.out(1.4)" },
            "-=0.4"
        );

        return () => {
            tl.kill();
        };
    }, [showAbout]);

    const handleStart = async () => {
        if (started) return;
        setStarted(true);

        try {
            audioRef.current = new Audio("/sounds/mac_startup.mp3");
            await audioRef.current.play();
        } catch {

        }

        setShowWelcome(true);

        setTimeout(() => {
            setShowWelcome(false);
            setShowAbout(true);
        }, 2000);

        setTimeout(() => {
            onFinish?.();
        }, 2000 + 6200);
    };


    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/wallpaper2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 w-full max-w-3xl px-6">
                <div className="flex items-center justify-center">
                    {!started && (
                        <button
                            onClick={handleStart}
                            className="flex items-center space-x-6 bg-white/5 hover:bg-white/8 transition px-6 py-4 rounded-lg focus:outline-none"
                            aria-label="Open portfolio"
                        >
                            <img src="/images/apple-main-logo.png" alt="logo" className="w-16 h-16 object-contain" />

                            <img
                                src="/images/kunal.jpg"
                                alt="Kunal"
                                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
                            />

                            <div className="text-white text-2xl font-semibold">Kunal Chakraborty</div>
                        </button>
                    )}
                </div>
            </div>

            {showWelcome && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/90">
                    <div
                        ref={helloRef}
                        className="text-white text-8xl font-light tracking-wide"
                        style={{
                            fontFamily: "Playwrite GB J Guides",
                            fontStyle: "italic",
                        }}
                    >
                        Welcome
                    </div>
                </div>
            )}

            {showAbout && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/85 p-8">
                    <div
                        ref={aboutRef}
                        className="max-w-2xl text-center text-white space-y-6"
                    >
                        <h2 className="text-4xl font-light">About Me</h2>
                        <p ref={aboutTextRef} className="text-lg opacity-90">&nbsp;</p>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {skillsData.map((s, i) => (
                                <div
                                    key={s.id}
                                    ref={(el) => {
                                        if (el) skillsRefs.current[i] = el;
                                    }}
                                    className="flex items-center space-x-4 p-4 bg-white/6 rounded-lg"
                                >
                                    <img src={s.icon} alt={s.name} className="w-10 h-10 object-contain" />
                                    <div className="text-white font-medium">{s.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Splash;
