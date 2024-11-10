import React, {CSSProperties} from 'react';
import "./profilePicture.css";

interface ProfilePictureProps {
  size: Exclude<CSSProperties["width"], undefined>;
  imageUrl: string;
  showOnlineBadge: boolean;
  isOnline?: boolean;
  onlineBadgeColor?: Exclude<CSSProperties["color"], undefined>;
}

const ProfilePicture = (
  {
    size,
    imageUrl,
    showOnlineBadge,
    isOnline = false,
    onlineBadgeColor = "#44b700",
  }: ProfilePictureProps,
) => {
  return (
    <div
      className={`profile-picture`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: `calc(${size} - 3px)`,
        height: `calc(${size} - 3px)`,
        borderColor: (showOnlineBadge && isOnline)
          ? onlineBadgeColor
          : "rgba(0, 0, 0, 0)",
      }}
    />
  );
};

export default ProfilePicture;
