import React, {CSSProperties} from 'react';
import "./profilePicture.css";

const BORDER_WIDTH = "3px";

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
        width: `calc(${size} - ${BORDER_WIDTH} - ${BORDER_WIDTH})`,
        height: `calc(${size} - ${BORDER_WIDTH} - ${BORDER_WIDTH})`,
        borderWidth: (showOnlineBadge && isOnline) ? BORDER_WIDTH : "0px",
        borderColor: (showOnlineBadge && isOnline)
          ? onlineBadgeColor
          : "rgba(0, 0, 0, 0)",
        padding: (showOnlineBadge && isOnline) ? "0px" : BORDER_WIDTH,
      }}
    />
  );
};

export default ProfilePicture;
