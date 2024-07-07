import React, { useState } from "react";

const ReportModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const initiatorId =
    localStorage.getItem("userId") || "3806be28-aa4d-4ea8-97bb-e824abcfae19";

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim() || !initiatorId.trim()) {
      alert("Title, initiatorId, and description are required.");
      return;
    }

    const apiUrl = "http://aqay.runasp.net/api/Reports/CreateReport";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          initiatorId,
          description,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorResponse}`
        );
      }

      const result = await response.json();
      console.log("Report submitted:", result);
      alert("Your report has been submitted successfully.");
      setTitle("");
      setDescription("");
      onClose();
    } catch (error) {
      console.error("Failed to submit report:", error);
      alert("Failed to submit report. Please try again.");
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Report Issue</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Report Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter report title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Report Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter report description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
