import React from "react";
import "./UploadMaterials.css";
import {
  FaUpload,
  FaUser,
  FaBook,
  FaGraduationCap,
  FaSearch,
  FaCog,
} from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function UploadMaterials() {
  const navigate = useNavigate();

  return (
    <div className="faculty-page">
      <main className="main-content">
        <header className="upload-header">
          <h1>Upload Materials</h1>
        </header>
        <div className="upload-container">
          <div className="upload-box">
            <FaUpload className="upload-icon" />
            <p>Drag and drop files here, or click to select files</p>
            <p className="upload-formats">
              Supported formats: PDF, PPTX, DOCX, MP4, EPUB
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UploadMaterials;
