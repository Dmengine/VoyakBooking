"use client";

import React, { useEffect, useState } from "react";

interface ActivityDetails {
  activityName: string;
  activityLocation: string;
  activityAmount: number;
  numberOfDays: number;
  activityDescription: string;
  image?: string;
}

const ActivityPage: React.FC = () => {
  const [activityDetails, setActivityDetails] = useState<ActivityDetails>({
    activityName: "",
    activityLocation: "",
    activityAmount: 0,
    numberOfDays: 1,
    activityDescription: "",
  });

  const [activities, setActivities] = useState<ActivityDetails[]>([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedActivities = [...activities, activityDetails];
    setActivities(updatedActivities);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
    setActivityDetails({
      activityName: "",
      activityLocation: "",
      activityAmount: 0,
      numberOfDays: 1,
      activityDescription: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActivityDetails({
      ...activityDetails,
      [name]: name === "activityAmount" || name === "numberOfDays" ? parseFloat(value) : value,
    });
  };

  const handleDelete = (index: number) => {
    const updatedActivities = activities.filter((activity, i) => i !== index);
    setActivities(updatedActivities);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setActivityDetails({
        ...activityDetails,
        image: imageUrl,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Activities</h1>
      <form
        className="max-w-md mx-auto text-white shadow-md rounded-md p-4 bg-blue-600"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="activityName">
            Activity Name
          </label>
          <input
            id="activityName"
            name="activityName"
            type="text"
            value={activityDetails.activityName}
            onChange={handleInputChange}
            className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="activityLocation">
            Activity Location
          </label>
          <input
            id="activityLocation"
            name="activityLocation"
            type="text"
            value={activityDetails.activityLocation}
            onChange={handleInputChange}
            className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="activityAmount">
            Amount for the Activity (#)
          </label>
          <input
            id="activityAmount"
            name="activityAmount"
            type="number"
            value={activityDetails.activityAmount}
            onChange={handleInputChange}
            className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="numberOfDays">
            Number of Days
          </label>
          <input
            id="numberOfDays"
            name="numberOfDays"
            type="number"
            value={activityDetails.numberOfDays}
            onChange={handleInputChange}
            className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="activityDescription">
            Description
          </label>
          <textarea
            id="activityDescription"
            name="activityDescription"
            value={activityDetails.activityDescription}
            onChange={handleInputChange}
            className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="activityImage">
            Activity Image
          </label>
          <input
            id="activityImage"
            name="activityImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Activity
        </button>
      </form>

      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-center mb-4">Your Added Activities</h2>
        {activities.length === 0 ? (
          <p className="text-center text-gray-500">No activities added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-4 border border-gray-200"
              >
                {activity.image && (
                  <img
                    src={activity.image}
                    alt={activity.activityName}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-lg font-bold">{activity.activityName}</h3>
                <p className="text-sm text-gray-500">{activity.activityLocation}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Amount: ${activity.activityAmount}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Duration: {activity.numberOfDays} day(s)
                </p>
                <p className="text-sm mt-2">{activity.activityDescription}</p>
                <button
                  onClick={() => handleDelete(index)}
                  className="mt-4 bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;
