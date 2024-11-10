import React from 'react';
import "./profilePicture.css";
const ProfilePicture = ({ size, imageUrl, showOnlineBadge, isOnline = false, onlineBadgeColor = "#44b700", }) => {
    return (React.createElement("div", { className: `profile-picture`, style: {
            backgroundImage: `url(${imageUrl})`,
            width: `calc(${size} - 3px)`,
            height: `calc(${size} - 3px)`,
            borderColor: (showOnlineBadge && isOnline)
                ? onlineBadgeColor
                : "rgba(0, 0, 0, 0)",
        } }));
};
export default ProfilePicture;
//# sourceMappingURL=ProfilePicture.js.map