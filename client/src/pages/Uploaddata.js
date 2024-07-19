
import React, { useState } from "react";
function Uploaddata() {
    const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("file", file);
    
    fetch("/upload", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(text => {
      console.log(text);
    });
  };
  return (
    <div>
<form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
    </div>
  )
}

export default Uploaddata