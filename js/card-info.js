document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const cardTemplate = document.getElementById("card-template");

  const data = [
    {
      bgPic: "images/bg-pics/1.png",
      fbLogo: "images/fb-logo/1.svg",
      groupName: "NHB Facebook Group",
      members: "21,349 members",
      description:
        "More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.",
      link: "https://www.facebook.com/groups/485493199551656/",
      buttonText: "Join Facebook Group",
      grouplink: "https://www.facebook.com/seventeennews",
    },
    {
      bgPic: "images/bg-pics/2.png",
      fbLogo: "images/fb-logo/2.svg",
      groupName: "Another Facebook Group",
      members: "15,000 members",
      description:
        "Connect with professionals. Expand your network. Discover new opportunities.",
      link: "https://www.facebook.com/PHBuddies",
      buttonText: "Join Another Group",
      grouplink: "https://www.facebook.com/groups/1542685625772464",
    },
    {
      bgPic: "images/bg-pics/3.png",
      fbLogo: "images/fb-logo/3.svg",
      groupName: "Digital Marketing Experts",
      members: "18,500 members",
      description:
        "Stay updated with the latest trends in digital marketing. Learn strategies, tools, and tips.",
      link: "https://www.facebook.com/bangtan.official",
      buttonText: "Join Digital Marketers",
      grouplink: "https://www.facebook.com/groups/601893517404821/",
    },
    {
      bgPic: "images/bg-pics/4.png",
      fbLogo: "images/fb-logo/4.svg",
      groupName: "Tech Innovators Community",
      members: "25,700 members",
      description:
        "Innovate with like-minded tech enthusiasts. Explore cutting-edge technologies.",
      link: "https://www.facebook.com/BLACKPINKOFFICIAL",
      buttonText: "Join Tech Innovators",
      grouplink: "https://www.facebook.com/groups/2157900087773023/",
    },
    {
      bgPic: "images/bg-pics/5.png",
      fbLogo: "images/fb-logo/5.svg",
      groupName: "Creative Artists Hub",
      members: "12,300 members",
      description:
        "Connect with artists worldwide. Showcase your work and inspire creativity.",
      link: "https://www.facebook.com/GOT7Official",
      buttonText: "Join Artists Community",
      grouplink: "https://www.facebook.com/groups/igot7/",
    },
    {
      bgPic: "images/bg-pics/6.png",
      fbLogo: "images/fb-logo/6.svg",
      groupName: "Fitness Enthusiasts Group",
      members: "30,000 members",
      description:
        "Stay fit and healthy together. Share workout routines, nutrition tips, and success stories.",
      link: "https://www.facebook.com/JYPETWICE",
      buttonText: "Join Fitness Group",
      grouplink: "https://www.facebook.com/groups/TWICEPHOfficial/",
    },
    {
      bgPic: "images/bg-pics/7.png",
      fbLogo: "images/fb-logo/7.svg",
      groupName: "Travel Lovers Club",
      members: "22,150 members",
      description:
        "Explore with fellow travelers. Share travel experiences and discover hidden gems.",
      link: "https://www.facebook.com/officialENHYPEN",
      buttonText: "Join Travel Club",
      grouplink: "https://www.facebook.com/groups/enhypenphmarketplace/",
    },
    {
      bgPic: "images/bg-pics/8.png",
      fbLogo: "images/fb-logo/8.svg",
      groupName: "Foodies United",
      members: "19,800 members",
      description:
        "Discover culinary delights from around the globe. Share recipes, and food adventures.",
      link: "https://www.facebook.com/G.I.DLE.CUBE",
      buttonText: "Join Foodies Community",
      grouplink: "https://www.facebook.com/groups/2094342717529537/",
    },
    {
      bgPic: "images/bg-pics/9.png",
      fbLogo: "images/fb-logo/9.svg",
      groupName: "Startup Founders Network",
      members: "8,500 members",
      description:
        "Empower startups to thrive. Network with founders, investors, and industry experts.",
      link: "https://www.facebook.com/TXT.bighit",
      buttonText: "Join Startup Network",
      grouplink: "https://www.facebook.com/groups/762143642055718/",
    },
  ];

  data.forEach((item) => {
    const clone = cardTemplate.content.cloneNode(true);
    clone.querySelector(".card-img").src = item.bgPic;

    // Correct selector for fb-logo and member-no
    clone.querySelector("#fb-logo").src = item.fbLogo; // Use #fb-logo for ID selector
    clone.querySelector(".member-no").textContent = item.members; // Use .member-no for class selector

    clone.querySelector(".group-name").textContent = item.groupName;
    clone.querySelector(".description").textContent = item.description;

    // Update the button link and text
    const button = clone.querySelector(".button-group");
    button.href = item.link;
    button.querySelector(".button-text").textContent = item.buttonText;

    // Update the group link
    const grouplink = clone.querySelector(".grouplink");
    grouplink.href = item.grouplink;
    grouplink.querySelector(".group-name").textContent = item.groupName; // Set group name in grouplink

    swiperWrapper.appendChild(clone);
  });
});
