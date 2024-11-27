import IconFeature1 from "../../assets/images/icon-access-anywhere.svg";
import IconFeature2 from "../../assets/images/icon-security.svg";
import IconFeature3 from "../../assets/images/icon-collaboration.svg";
import IconFeature4 from "../../assets/images/icon-any-file.svg";

const FeaturesSection = () => {
  const dataFeatures = [
    {
      titleFeature: "Acess you files, anywhere",
      descriptionFeature:
        "The ability to use a smartphone, tablet, or computer \n to access your account means your files follow you \n everywhere.",
      icon: IconFeature1,
    },
    {
      titleFeature: "Security you can trust",
      descriptionFeature:
        "2-factor authentication and user-controlled encryption are \n just a couple of the security features we allow to help \n secure your files.",
      icon: IconFeature2,
    },
    {
      titleFeature: "Real-time collaboration",
      descriptionFeature:
        "Securely share files and folders with friends, family and \n colleagues for live collaboration. No email attachments \n required.",
      icon: IconFeature3,
    },
    {
      titleFeature: "Store any type of file",
      descriptionFeature:
        "Whether you're sharing holiday photos or work \n documents, Fylo has you covered, allowing for all file \n types to be securely stored and shared.",
      icon: IconFeature4,
    },
  ];
  return (
    <div id="features" className="w-full flex flex-col items-center">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-14 gap-x-16 items-center">
        {dataFeatures.map((feature, index) => (
          <div key={index} className="flex flex-col gap-2 text-center items-center rounded-lg px-2">
            <img
              src={feature.icon}
              alt={feature.titleFeature}
              className="w-12"
            />
            <h1 className="text-xl font-bold text-white">
              {feature.titleFeature}
            </h1>
            <span className="text-sm whitespace-pre-line text-gray-200 font-normal">
              {feature.descriptionFeature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturesSection;
