"use client";
import { useState } from "react";

export default function BlobUploader() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/upload", true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    };

    xhr.onload = () => {
      setUploading(false);
      if (xhr.status === 200) {
        const { url } = JSON.parse(xhr.responseText);
        setUploadedUrl(url);
      } else {
        alert("Upload failed!");
      }
    };

    xhr.send(formData);
  };

  return (
    <div className="p-4 border rounded-xl bg-gray-50 shadow-sm">
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
        />

        {uploading && (
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        <button
          type="submit"
          disabled={uploading}
          className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {uploadedUrl && (
        <p className="mt-4 text-green-600 break-all">
          ✅ Uploaded:{" "}
          <a href={uploadedUrl} target="_blank" rel="noreferrer">
            {uploadedUrl}
          </a>
        </p>
      )}
    </div>
  );
}
