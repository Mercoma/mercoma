import firstImage from "../assets/fur1.jpeg";
import secondImage from "../assets/fur2.jpeg";
import thirdImage from "../assets/fur3.jpeg";
import fourthImage from "../assets/fur4.jpeg";
import profilePicture from "../assets/profile.jpeg";

export const user = {
  firstName: "Jerry",
  lastName: "Turcios",
  email: "jerryturcios08@gmail.com",
  avatar: profilePicture,
  photos: [
    {
      image: firstImage,
      tumorPercent: 0.5,
    },
    {
      image: secondImage,
      tumorPercent: 0.5,
    },
    {
      image: thirdImage,
      tumorPercent: 0.5,
    },
    {
      image: fourthImage,
      tumorPercent: 0.5,
    },
  ],
};
