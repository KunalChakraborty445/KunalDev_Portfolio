import React, {useRef, useState, useEffect} from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {techStack} from "#constants/index.js";
import {Check, Flag} from "lucide-react";
import {WindowControls} from "#components";
import useWindowStore from "#store/window.js";

const Terminal = () => {

    const store = useWindowStore();
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    const [history, setHistory] = useState([
        { type: "output", text: "Welcome to the portfolio terminal. Type `help` for commands." },
    ]);
    const [input, setInput] = useState("");
    const [cmdIndex, setCmdIndex] = useState(-1);
    const [pastCommands, setPastCommands] = useState([]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        // scroll to bottom on history change
        containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
    }, [history]);

    const append = (entry) =>
        setHistory(
            (h) => [...h, entry]
        );

    const runCommand = async (raw) => {
        const line = raw.trim();
        if (!line) return;
        append({ type: "input", text: line });
        setPastCommands((p) => [...p, line]);
        setCmdIndex(-1);
        setInput("");

        const [cmd, ...args] = line.split(/\s+/);

        switch (cmd) {
            case "help":
                append({
                    type: "output",
                    text:
                        "Commands: help, clear, echo <text>, date, whoami, open <path|url>\nExamples: open /files/Kunal_resume_v.pdf or open https://github.com/KunalChakraborty445",
                });
                break;

            case "clear":
                setHistory([]);
                break;

            case "echo":
                append({ type: "output", text: args.join(" ") });
                break;

            case "date":
                append({ type: "output", text: new Date().toString() });
                break;

            case "whoami":
                append({ type: "output", text: "Kunal Chakraborty" });
                break;

            case "open":
                if (args.length === 0) {
                    append({ type: "output", text: "Usage: open <path|url>" });
                    break;
                }
            {
                const target = args.join(" ");
                // try app-wide window store open if available
                if (typeof store?.openWindow === "function") {
                    try {
                        store.openWindow(target);
                        append({ type: "output", text: `Requested to open: ${target}` });
                        break;
                    } catch {
                        // fallthrough to window.open
                    }
                }
                // fallback: open in new tab
                try {
                    const url = target.startsWith("http") ? target : `${target.startsWith("/") ? "" : "/"}${target}`;
                    window.open(url, "_blank");
                    append({ type: "output", text: `Opened: ${target}` });
                } catch {
                    append({ type: "output", text: `Failed to open: ${target}` });
                }
            }
                break;

            default:
                append({ type: "output", text: `${cmd}: command not found. Type \`help\` for a list.` });
        }
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            runCommand(input);
            return;
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (pastCommands.length === 0) return;
            const i = cmdIndex === -1 ? pastCommands.length - 1 : Math.max(0, cmdIndex - 1);
            setCmdIndex(i);
            setInput(pastCommands[i]);
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (pastCommands.length === 0) return;
            if (cmdIndex === -1) return;
            const i = cmdIndex + 1;
            if (i >= pastCommands.length) {
                setCmdIndex(-1);
                setInput("");
            } else {
                setCmdIndex(i);
                setInput(pastCommands[i]);
            }
        }
    };


    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack p-5 space-y-4 bg-black text-white font-mono text-sm">
                <p>
                    <span className="font-bold">@kunal % </span>
                    show tech-stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({ category, items })=> (
                        <li key={category} className="flex items-center">
                            <Check className="check"  size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                        { i < items.length-1 ? "," : ""}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} /> 6 of 6 stacks loaded successfully (100%)
                    </p>

                    <p className="text-white">
                        <Flag size={15} fill="white" />
                        Render time: 6ms
                    </p>
                </div>

                <div
                    className="p-4 bg-black text-white font-mono text-sm h-full flex flex-col"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div
                        ref={containerRef}
                        className="overflow-auto mb-2 flex-1 space-y-1"
                        style={{ maxHeight: "calc(100% - 56px)" }}
                    >
                        {history.map((line, idx) => (
                            <div key={idx} className={line.type === "input" ? "text-green-300" : "text-gray-300"}>
                                {line.type === "input" ? `$ ${line.text}` : line.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center">
                        <span className="text-green-400 mr-2">user@portfolio$</span>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
                            placeholder="type a command (help)"
                            spellCheck="false"
                            autoComplete="off"
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        </>
    );
};


const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;