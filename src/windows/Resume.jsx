import React, { useState } from 'react';
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up PDF.js worker (ensure pdfjs-dist is installed)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Callback when PDF loads successfully
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setLoading(false);
    };

    // Callback for load errors
    const onDocumentLoadError = (error) => {
        console.error('Error loading PDF:', error);
        setError('Failed to load PDF. Check the file path and console for details.');
        setLoading(false);
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
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Document
                file="/files/KunalResume8.pdf"  // Updated path and file name
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
            >
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>


            {numPages && (
                <div>
                    <p>Page {pageNumber} of {numPages}</p>
                    <button
                        disabled={pageNumber <= 1}
                        onClick={() => setPageNumber(pageNumber - 1)}
                    >
                        Previous
                    </button>
                    <button
                        disabled={pageNumber >= numPages}
                        onClick={() => setPageNumber(pageNumber + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;