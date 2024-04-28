import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const [image, setImage] = useState<File | null>(null);

  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(file);
        const url = URL.createObjectURL(file);
        setImageURL(url);
      };
      reader.readAsDataURL(file);
    }
    console.log(image);
    console.log(imageURL);
  };

  const onSubmit = () => {
    setResult(input);
  };
  return (
    <>
      <div className='container'>
        <h1>Visual Question Answering</h1>
        <input
          type='file'
          name='image'
          id='image'
          accept='image/*'
          onChange={handleImageChange}
        />
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <img
            src={imageURL || "https://via.placeholder.com/150"}
            alt='placeholder'
            style={{
              width: "32rem",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "1rem",
            }}
          >
            <label htmlFor='image-text'>Input:</label>
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <input
                type='text'
                name='image-text'
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button onClick={onSubmit}>Submit</button>
            </div>
            <p>{result}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
