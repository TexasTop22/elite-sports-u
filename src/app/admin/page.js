"use client";
import { useState } from "react";

export default function AdminUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please choose a file first.");

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed.");
      const data = await res.json();

      console.log("✅ Uploaded to:", data.url);
      setUploadedUrl(data.url);
    } catch (err) {
      console.error("Upload error:", err);
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">File Upload</h1>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {uploading ? "Uploading..." : "Upload File"}
        </button>
      </form>

      {uploadedUrl && (
        <p className="mt-4 text-green-600 break-all">
          ✅ Uploaded Successfully: <a href={uploadedUrl}>{uploadedUrl}</a>
        </p>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
