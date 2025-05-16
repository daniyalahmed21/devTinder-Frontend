import React from "react";

const Card = ({ user }) => {
  return (
    <div  className="card bg-base-100 mb-2 w-80 h-130 shadow-sm">
      <figure>
        <img src={user.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className=" text-2xl ">{user.firstName + " " +  user.lastName}</div>
        <h2 className="card-title mt-2  mb-2">
          <div className="flex gap-2 flex-wrap">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100  text-xs text-black px-3 py-2 rounded-full "
              >
                {skill}
              </span>
            ))}
          </div>
        </h2>
        <p>{user.about}</p>
        <div className="card-actions justify-end">
          <button className="btn  btn-soft btn-success">Interested</button>
          <button className="btn  btn-soft btn-error ">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
