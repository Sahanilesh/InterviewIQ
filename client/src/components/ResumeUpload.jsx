import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFileUpload } from "react-icons/fa";

function ResumeUpload({ resumeFile, setResumeFile, analyzing, handleUploadResume }) {

    const [dragActive, setDragActive] = useState(false);

    const fileInputRef = useRef(null);

    const handleFile = (file) => {
        if (file && file.type === "application/pdf") {
            setResumeFile(file);
        } else {
            alert("Only PDF files allowed");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="relative">

            <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition
        ${dragActive ? "border-green-500 bg-green-50" : "border-gray-300"}`}
            >

                <FaFileUpload className="text-4xl mx-auto text-green-600 mb-3" />

                <input
                    type="file"
                    accept="application/pdf"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files[0])}
                />

                <p className="text-gray-600 font-medium">
                    {resumeFile
                        ? `Uploaded: ${resumeFile.name}`
                        : "Drag & Drop Resume or Click to Upload"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    PDF format only
                </p>
                {resumeFile && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleUploadResume();
                        }}
                        className="mt-4 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        {analyzing ? "Analyzing..." : "Analyze Resume"}
                    </motion.button>
                )}

            </motion.div>

        </div>
    );
}

export default ResumeUpload;