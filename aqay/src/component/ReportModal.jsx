import React, { useState } from "react";

const ReportModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Report Issue</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Report Title</label>
          <input
            type="text"
            className="w-full p-2  text-black-500 border border-black-300 rounded-md"
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
            onClick={() => {
              onSubmit(title, description);
              setTitle("");
              setDescription("");
            }}
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
