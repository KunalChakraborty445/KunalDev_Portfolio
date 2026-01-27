import React, { useState } from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components";
import {socials} from "#constants/index.js";

const Contact = () => {
    const [openSend, setOpenSend] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setShowSuccess(true);
            setIsSubmitting(false);
            setTimeout(() => setShowSuccess(false), 3000);
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2 className="text-xl font-bold">Contact Information</h2>
            </div>

            <div className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-lg shadow-inner">
                <div className="flex items-center space-x-4">
                    <img
                        src="/images/kunal-4.jpg"
                        alt="Kunal"
                        className="w-20 h-20 rounded-md border-4 border-white shadow-lg transform
                         hover:scale-110 transition-transform duration-300" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Let's Connect</h3>
                        <p className="text-gray-600">Got an idea? A bug to squash? Or just wanna talk tech? I'm in!</p>
                        <p className="text-sm text-gray-500 mt-1">Email: kunalchakr33@gmail.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700
                         mb-1 cursor-pointer flex items-center">
                             Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300
                             rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                              focus:border-blue-500 transition-all duration-200 cursor-pointer hover:shadow-md"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer flex items-center">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg
                             shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                              transition-all duration-200 cursor-pointer hover:shadow-md"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="message"
                               className="block text-sm font-medium text-gray-700
                         mb-1 cursor-pointer flex items-center">
                             Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows="4"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300
                            rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                             focus:border-blue-500 transition-all duration-200 cursor-pointer hover:shadow-md resize-none"
                            placeholder="Type your message here..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${
                            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </form>

                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <h4 className="text-md font-semibold text-gray-800 mb-3">Connect on Socials</h4>
                    <ul className="space-y-3">
                        {socials.map(({id, bg, link, icon, text}) => (
                            <li key={id}
                                style={{ backgroundColor: bg }}
                                className="p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 transform hover:scale-105">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white">
                                    <img src={icon} alt={text} className="h-6 w-6" />
                                    <p className="text-sm font-medium">{text}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {openSend && <SendEmailWindow onClose={() => setOpenSend(false)} />}

                {/* Success Animation */}
                {showSuccess && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-8 rounded-xl shadow-2xl text-center animate-pulse">
                            <div className="text-green-500 text-6xl mb-4 animate-bounce">✓</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
                            <p className="text-gray-600">Your message has been sent successfully. I'll get back to you soon!</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;