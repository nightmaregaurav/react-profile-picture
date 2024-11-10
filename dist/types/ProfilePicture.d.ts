import React, { CSSProperties } from 'react';
import "./profilePicture.css";
interface ProfilePictureProps {
    size: Exclude<CSSProperties["width"], undefined>;
    imageUrl: string;
    showOnlineBadge: boolean;
    isOnline?: boolean;
    onlineBadgeColor?: Exclude<CSSProperties["color"], undefined>;
}
declare const ProfilePicture: ({ size, imageUrl, showOnlineBadge, isOnline, onlineBadgeColor, }: ProfilePictureProps) => React.JSX.Element;
export default ProfilePicture;
