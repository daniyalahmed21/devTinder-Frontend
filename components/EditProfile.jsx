import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../src/utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    image: user.image || "",
    about: user.about || "",
    skills: user.skills ? user.skills.join(", ") : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Process skills from comma-separated string to array
    const skillsArray = formData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    // Prepare updated user data
    const updatedUser = {
      ...formData,
      skills: skillsArray,
    };
    console.log(updatedUser);

    // Dispatch action to update Redux store
    try {
      const res = await axios.patch(
        "http://localhost:3000/profile/edit",
        
            updatedUser,
        
        { withCredentials: true }
      );
      dispatch(updateUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex mb-20 flex-col md:flex-row gap-4 p-6 max-w-6xl mx-auto">
      {/* Preview Card */}
      <div className="md:w-2/5 mb-5 md:mb-0 order-1 md:order-2">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          {formData.image ? (
            <img
              src={formData.image}
              alt={`${formData.firstName}'s profile`}
              className="w-fit h-fit  object-fill"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image provided</span>
            </div>
          )}

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {formData.firstName} {formData.lastName}
            </h2>

            {formData.skills && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.skills.split(",").map(
                    (skill, index) =>
                      skill.trim() && (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                        >
                          {skill.trim()}
                        </span>
                      )
                  )}
                </div>
              </div>
            )}

            <p className="text-gray-600 mt-2">{formData.about}</p>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div className="md:w-2/3 order-2 md:order-1">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-6 space-y-3"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Edit Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg     "
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg     "
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg     "
              placeholder="https://example.com/your-image.jpg"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Skills (comma separated)
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg     "
              placeholder="React, Redux, JavaScript, CSS"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              About
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full p-3 border  border-gray-300 rounded-lg     "
              rows={2}
              placeholder="Tell us about yourself..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
