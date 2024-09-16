"use client"; // Ensure this is a Client Component

import React, { useRef, useState, useEffect } from 'react';

const ScanPage = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(true);
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
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setImageSrc(canvas.toDataURL('image/png'));
      setIsCameraVisible(false); // Hide camera box after capture
    }
  };

  // Initialize the camera when the component mounts
  useEffect(() => {
    startCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white/5 to-[#7FC780]">
      <h1 className="text-3xl font-bold mb-6">Scan Page</h1>
      <div className="relative">
        {isCameraVisible ? (
          <video ref={videoRef} className="w-full max-w-md border-2 border-gray-500" />
        ) : (
          <img src={imageSrc} alt="Captured" className="w-full max-w-md mt-4 border-2 border-gray-500" />
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>
      {isCameraVisible && (
        <button
          onClick={capturePhoto}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Capture Photo
        </button>
      )}
    </div>
  );
};

export default ScanPage;
