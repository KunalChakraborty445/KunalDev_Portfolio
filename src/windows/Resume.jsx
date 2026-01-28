import React, { useState } from 'react';
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setLoading(false);
    };

    const onDocumentLoadError = (error) => {
        console.error('Error loading PDF:', error);
        setError('Failed to load PDF. Check the file path and console for details.');
        setLoading(false);
    };

    const handleReload = () => {
        setLoading(true);
        setError(null);
        setNumPages(null);
        setPageNumber(1);
        setReloadKey(prev => prev + 1);
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a
                    href="/files/KunalResume8.pdf"
                    download
                    className="cursor-pointer"
                    title="Download resume"
                >
                    <Download className="icon" />
                </a>
            </div>

            {loading && <p>Loading PDF...</p>}
            {error && (
                <div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <button onClick={handleReload}>Reload PDF</button>
                </div>
            )}

            <Document
                key={reloadKey}
                file="/files/KunalResume8.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
            >
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;