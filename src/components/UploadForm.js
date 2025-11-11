// components/UploadForm.js
import { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setUrl(data.url);
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
      {url && (
        <p className="text-green-600 mt-2">
          File uploaded: <a href={url}>{url}</a>
        </p>
      )}
    </form>
  );
}
