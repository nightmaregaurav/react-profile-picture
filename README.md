## Profile Picture (React)
[![npm version](https://badge.fury.io/js/@nightmaregaurav%2Freact-profile-picture.svg)](https://badge.fury.io/js/@nightmaregaurav%2Freact-profile-picture)   [![HitCount](https://hits.dwyl.com/nightmaregaurav/react-profile-picture.svg?style=flat)](http://hits.dwyl.com/nightmaregaurav/react-profile-picture)<br>
[![NPM](https://nodei.co/npm/@nightmaregaurav/react-profile-picture.png?mini=true)](https://nodei.co/npm/@nightmaregaurav/react-profile-picture/)
***
### Description
React Profile Picture is a simple and easy to use React component to display profile picture.

### Installation
Install react-profile-picture
```bash
npm install @nightmaregaurav/react-profile-picture
```

### Usage
```typescript
import React, {CSSProperties} from 'react';
import ProfilePicture from "@nightmaregaurav/react-profile-picture";

interface ProfilePhotoProps {
  size: Exclude<CSSProperties["width"], undefined>;
  imageUrl: string;
  showOnlineBadge: boolean;
  isOnline?: boolean;
  onlineBadgeColor?: Exclude<CSSProperties["color"], undefined>;
}

const ProfilePhoto = (
  {
    size,
    imageUrl,
    showOnlineBadge,
    isOnline = false,
    onlineBadgeColor = "#44b700",
  }: ProfilePhotoProps,
) => {
  return (
    <ProfilePicture
      size={size}
      imageUrl={imageUrl}
      showOnlineBadge={showOnlineBadge}
      isOnline={isOnline}
      onlineBadgeColor={onlineBadgeColor}
    />
  );
};

export default ProfilePhoto;

```

***
## Technical Details
* Language: Typescript

## How to Contribute
* Fork the repository
* Clone the forked repository
* Make changes
* Commit and push the changes
* Create a pull request
* Wait for the pull request to be merged
* Celebrate
* Repeat

*If you are new to open source, you can read [this](https://opensource.guide/how-to-contribute/) to learn how to contribute to open source projects.*<br>
*If you are new to GitHub, you can read [this](https://guides.github.com/activities/hello-world/) to learn how to use GitHub.*<br>
*If you are new to Git, you can read [this](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud) to learn how to use Git.*<br>
*If you are new to TypeScript, you can read [this](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) to learn how to use TypeScript.*<br>

## License
React Profile Picture is released under the MIT License. You can find the full license details in the [LICENSE](LICENSE) file.

Made with ❤️ by [NightmareGaurav](https://github.com/nightmaregaurav).

---
Open For Contribution
---
