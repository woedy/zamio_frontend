import { useCallback, useEffect, useState } from 'react';
import { Music2Icon, UploadCloud, FileMusic } from 'lucide-react';
import { artistID, baseUrl, userToken } from '../../constants';
import ButtonLoader from '../../common/button_loader';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AddContributor() {
  const [contributorData, setContributorData] = useState({
    name: '',
    role: '',
    album: '',
    audioFile: null,
    release_date: '',
  });
  const [inputError, setInputError] = useState(null); // "success", "error", null
  const [loading, setLoading] = useState(false);

  const [roles, setRoles] = useState(['Composor']);


  const navigate = useNavigate();

  const location = useLocation();
  const { track_id } = location.state || {};



  const handleChange = (e) => {
    const { name, value } = e.target;
    setContributorData({ ...contributorData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();

    const formData = new FormData();
    formData.append('track_id', track_id);
    formData.append('artist_id', artistID);
    formData.append('name', contributorData.name);
    formData.append('album_id', contributorData.album);
    formData.append('role_id', contributorData.role);
    formData.append('release_date', contributorData.release_date);

    try {
      const url = baseUrl + 'api/artists/edit-track/';

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        // Display the first error message from the errors object
        if (data.errors) {
          const errorMessages = Object.values(data.errors).flat();
          setInputError(errorMessages.join('\n'));
          setLoading(false);
        } else {
          setInputError(data.message || 'Failed to upload data');
          setLoading(false);
        }
        return; // Prevent further code execution
      }

      // Registration successful
      console.log('Contributor added successfully');
      navigate('/track-details', {
        state: {
          successMessage: `${contributorData.name} added succesfully.`,
          track_id: `${track_id}`,
        },
      });

      setLoading(false);
    } catch (error) {
      setInputError('error');
      setLoading(false);
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-emerald-300 flex items-center mb-4">
          <Music2Icon className="w-7 h-7 mr-3" /> Add Contributor
        </h2>
        <p className="text-gray-500">Add track contributor information</p>
      </div>

      {inputError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {inputError}</span>
        </div>
      )}

      <div className="bg-boxdark rounded-lg shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contributor Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-emerald-200 text-sm font-bold mb-2"
            >
              Contributor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contributorData.name}
              //value={contributorData.name}
              onChange={handleChange}
              className="shadow-inner appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-graydark"
              placeholder="Enter track name"
              required
            />
          </div>


          <div className="">
            <label
              className="block text-emerald-200 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Select Role
            </label>

            <select
              id="role"
              value={contributorData.role}
              onChange={(e) => setContributorData((prev) => ({...prev, role: e.target.value }))}
              className="shadow-inner border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-graydark"
            >
              <option value="">Select Role</option>

              {roles.map((gen) => (
                <option
                  key={gen}
                  value={gen}
                  className="hover:bg-graydark dark:hover:bg-graydark"
                >
                  {gen}
                </option>
              ))}
            </select>
          </div>

          {/* Release Date (Optional) */}
          <div>
            <label
              htmlFor="releaseDate"
              className="block text-emerald-200 text-sm font-bold mb-2"
            >
              Release Date (Optional)
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              value={contributorData.release_date}
              onChange={(e) => setContributorData((prev) => ({...prev, release_date: e.target.value}))}
              className="shadow-inner appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-graydark"
            />
          </div>

          {/* Upload Button */}
          <div className="flex justify-end">
            {loading ? (
              <ButtonLoader />
            ) : (
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <UploadCloud className="w-5 h-5 mr-2" /> Add
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
