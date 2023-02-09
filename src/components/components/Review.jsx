import React from "react";

const Review = () => {
  const review = [
    {
      name: "Ashraf ⚡️💻",
      user: "@Ashraf_365",
      image:
        "https://pbs.twimg.com/profile_images/1564855868012654593/3qgdCKAr_400x400.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas expedita eos dolor tempora, autem delectus illum explicabo saepe voluptatem?",
    },
    {
      name: "Sahil Chowdury",
      user: "@dsahilchowdury",
      image:
        "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/278958151_1151446615808551_3460948444864851225_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH7aQEkW03aSqHAU7u_DFNfIDmD5FdFWCYgOYPkV0VYJjrCJoTLWCIwPEiKnTLrCXN3aytWylmEbQ8Jxo2UkZQD&_nc_ohc=aAyVeq6S4coAX8s1kB8&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfAo4RL-4et4JiX7pgo8qC62ovRFIhSVjLRADvZ6AgHBUw&oe=63E759F9",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas expedita eos dolor tempora, autem delectus illum explicabo saepe voluptatem?",
    },
    {
      name: "Denil Dev 🚀👨🏻‍💻",
      user: "@denildev",
      image:
        "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/279507988_1151447079141838_912784402980314542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHAbvZJDECkrsFUay5tXpQ8CcfFFHJwYyoJx8UUcnBjKmBkAoYXQtLwoSFSKgSwBkmu1biiWn6IQFKawzafsqsn&_nc_ohc=v3gDBuwQFpsAX-K3yfc&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfANAY2p_sTrziR8GkCBt-uPVDLzVT0xSMJTECW9nWmF9Q&oe=63E61462",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas expedita eos dolor tempora, autem delectus illum explicabo saepe voluptatem?",
    },
  ];
  return (
    <>
      {review.map((value) => {
        return (
          <div className=" w-[400px] h-[220px] text-start p-6 rounded-lg bg-light dark:bg-dark cursor-default">
            <div className=" flex items-center mb-5">
              <img
                src={value.image}
                alt={value.name}
                className=" w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p>{value.name}</p>
                <p>{value.user}</p>
              </div>
            </div>
            <p>{value.review}</p>
          </div>
        );
      })}
    </>
  );
};

export default Review;
