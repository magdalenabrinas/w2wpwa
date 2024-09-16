"use client"; // Ensure this is a Client Component

import React, { useRef, useState, useEffect } from 'react';

// Convert image to base64
const getBase64 = (img) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(img);
  });
};

// Send image to ChatGPT API
const processImage = async (image, setResponse) => {
  try {
    const base64String = await getBase64(image);

    // Remove the data URL prefix
    const base64Image = base64String.split(',')[1];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}` // Ensure this is in .env.local
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: 'What is the category of this item? How to upcycle this item?' },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`
                }
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error('Error with ChatGPT API response');
    }

    const data = await response.json();
    const chatGptText = data.choices[0]?.message?.content || 'No response received'; // Adjust based on response structure

    // Set the response text in the state
    setResponse(chatGptText);
  } catch (error) {
    console.error('Error processing image:', error);
    setResponse('Failed to process the image.');
  }
};

const ScanPage = () => {
  const [isCameraVisible, setIsCameraVisible] = useState(true);
  const [response, setResponse] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Start video stream from camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error('Error accessing the camera:', err);
    }
  };

  // Capture photo from the video feed
  const capturePhoto = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get image data URL from canvas
      const imageDataUrl = canvas.toDataURL('image/jpeg');
      setImageSrc(imageDataUrl); // Set image source for display

      const response = await fetch(imageDataUrl);
      const imageBlob = await response.blob();

      // Process the image
      await processImage(imageBlob, setResponse);
      setIsCameraVisible(false); // Hide camera box after capture
    }
  };

  // Initialize the camera when the component mounts
  useEffect(() => {
    startCamera();
    return () => {
      const currentVideoRef = videoRef.current;
      if (currentVideoRef && currentVideoRef.srcObject) {
        const stream = currentVideoRef.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white/5 to-[#7FC780] relative">
      <img src="/images/logo3.png" alt="Logo" className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-auto mb-2" />
      <h1 className="text-3xl font-bold mt-20">Scan Page</h1>
      {isCameraVisible ? (
        <video ref={videoRef} className="w-full max-w-md border-2 border-gray-500 mt-4" />
      ) : (
        <div className="relative flex flex-col items-center">
          <img src={imageSrc} alt="Captured" className="w-full max-w-md border-2 border-gray-500 rounded-lg mt-0" />
          <div className="bg-white border-2 border-gray-500 p-4 rounded-lg shadow-lg w-full max-w-md h-60 overflow-y-auto mt-2">
            <h2 className="text-xl font-semibold">ChatGPT Response</h2>
            <p className="text-lg">{response}</p>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="hidden" />
      {isCameraVisible && (
        <button
          onClick={capturePhoto}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Capture Photo
        </button>
      )}
    </div>
  );
};

export default ScanPage;
