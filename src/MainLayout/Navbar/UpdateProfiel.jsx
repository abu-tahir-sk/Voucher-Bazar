import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile,user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({
      displayName: name,
      photoURL: photo,
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="name"
          defaultValue={user?.displayName}
          placeholder="Name"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="photo"
           defaultValue={user?.photoURL}
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary w-full">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
