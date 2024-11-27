import Profile1 from "../../assets/images/profile-1.jpg";
import Profile2 from "../../assets/images/profile-2.jpg";
import Profile3 from "../../assets/images/profile-3.jpg";

import Quote from "../../assets/images/bg-quotes.png";

const Feedbacks = () => {
  const usersData = [
    {
      nameUser: "Satish Patel",
      job: "Founder & CEO, Huddle",
      profileImg: Profile1,
    },
    {
      nameUser: "Bruce McKeenzie",
      job: "Founder & CEO, Huddle",
      profileImg: Profile2,
    },
    {
      nameUser: "Iva Boyd",
      job: "Founder & CEO, Huddle",
      profileImg: Profile3,
    },
  ];

  return (
    <div className="flex flex-col">
      <img
        className="w-12 relative md:left-[5.5rem] top-2 -z-10"
        src={Quote}
        alt=""
      />
      <div className="flex items-center justify-center max-md:flex-col gap-10">
        {usersData.map((user, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 text-white bg-primary-dark-blue-testimonials py-10 px-8 rounded-sm"
          >
            <h1 className="text-[16px] font-normal">
              Fylo has improved our team productivity by <br /> an order of
              magnitude. Since making the <br /> switch our team has become a
              well-oiled <br /> collaboration machine.
            </h1>
            <div className="flex items-center gap-3">
              <img
                src={user.profileImg}
                alt={user.nameUser + "img"}
                className="w-10 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-sm font-bold">{user.nameUser}</h1>
                <h1 className="text-xs font-light">{user.job}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
