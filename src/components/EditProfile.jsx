import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const EditProfile = ({user}) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [about, setAbout] = useState(user.about);
    const [saveStatus, setSaveStatus] = useState(false);

    const saveProfile = async () => {
        try {
            const response = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                age,
                gender,
                photoUrl,
                about
            }, {
                withCredentials: true
            });
            dispatch(addUser(response.data));
            setSaveStatus(true);
        } catch (err) {
            console.log(err?.response?.data);
        }
    } 
  return (
    <>
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit profile</h2>
                    <div className="justify-center">
                        <fieldset className="fieldset my-2">
                            <legend className="fieldset-legend">First Name</legend>
                            <input type="text" id="firstName" className="input w-full my-1" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Last Name</legend>
                            <input type="text" id="lastName" className="input w-full my-1" value={lastName} onChange={(event) => setLastName(event.currentTarget.value)}/>
                        </fieldset>
                        <fieldset className="fieldset my-2">
                            <legend className="fieldset-legend">Photo Url</legend>
                            <input type="text" id="photo" className="input w-full my-1" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)}/>
                        </fieldset>
                        {age && gender &&
                        <div>
                                <fieldset className="fieldset my-2">
                                    <legend className="fieldset-legend">Gender</legend>
                                    <input type="text" id="gender" className="input w-full my-1" value={gender} onChange={(event) => setGender(event.target.value)}/>
                                </fieldset>
                                <fieldset className="fieldset my-2">
                                    <legend className="fieldset-legend">Age</legend>
                                    <input type="text" id="age" className="input w-full my-1" value={age} onChange={(event) => setAge(event.target.value)}/>
                                </fieldset>
                            </div>
                        }
                        <fieldset className="fieldset my-2">
                            <legend className="fieldset-legend">About</legend>
                            <input type="text" id="about" className="input w-full my-1" value={about} onChange={(event) => setAbout(event.target.value)}/>
                        </fieldset>
                    </div>
                    <div className="card-actions justify-center m-2">
                        <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                    </div>
                </div>
            </div>
            <div className="mx-10">
                <UserCard user={{firstName, lastName, gender, age, photoUrl, about}}/>
            </div>
        </div>
        {saveStatus && 
            <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Edited successfully.</span>
                </div>
            </div>
        }
    </>
  )
}

export default EditProfile