import React from 'react'
import "../css/profile.css"
import Adminimg from "../img/Admin-img.png"
function profile() {
  return (
    <div class="profile-container">
         <div className="profile-background">
            <div class="profile-image">
               <img src={Adminimg} alt="Profile Image"/>
            </div>
         </div>
        <input type="file" class="edit-input" accept="image/*"/>
        <input type="text" class="edit-input" placeholder="Name" value="John Doe"/>
        <input type="email" class="edit-input" placeholder="Email" value="john@example.com"/>
        <input type="password" class="edit-input" placeholder="New Password"/>
        <input type="password" class="edit-input" placeholder="Confirm Password"/>
        <button class="edit-button">Save Changes</button>
    </div>
  )
}

export default profile