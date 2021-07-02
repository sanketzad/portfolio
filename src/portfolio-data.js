const PORTFOLIO_DATA = {
  firstname: "Sanket",
  lastname: "Zad",
  profileTitle: "Frontend developer",
  shortname: "SZ",
  contact_info: {
    github: "https://github.com/sanketzad",
    linkedin: "https://www.linkedin.com/in/sanketzad/",
    facebook: "https://www.facebook.com/sanketzad",
    instagram: "https://www.instagram.com/sanketzad/",
    twitter: "",
  },
  aboutMe:
    "I am allround web developer with 3+ years of experience with good knowledge of front-end techniques. I love structure and order, with that I stand for quality. I love spending time on fixing little details and optimising web apps.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "ES6/ES7",
    "Bootstrap",
    "ReactJS",
    "Redux",
    "Redux-Thunk",
    "Redux-Saga",
    "React-Hooks",
    "jQuery",
    "Responsive Web Development",
    "Node.js",
    "Express.js",
    "Styled-Components",
  ],
  projects: [
    {
      projectName: "CROWN Clothing",
      tagLine: "An e-commerce web application",
      description:
        "An e-commerce application which showcases end to end user flow on an e-commerce application starting from sing up to payment. User can add items to cart, which will be retained across the session using Firebase API. For the payment functionality, Stripe API has been integrated with test details. This application can be expanded to many more categories along with respective items just by triggering category & item details to firestore.",
      toolsUsed:
        "ReactJS, Redux, Redux-thunk, React-Hooks, Firebase, Stripe, Express.js, Reselect",
      url: "https://crown-clothing-jkd.herokuapp.com/",
      images: [
        {
          id: "1",
          src: "project1.1.png",
          text: "Homepage",
        },
        {
          id: "2",
          src: "project1.2.png",
          text: "Collections page",
        },
        {
          id: "3",
          src: "project1.3.png",
          text: "Individual collection page",
        },
        {
          id: "4",
          src: "project1.4.png",
          text: "Updated cart count",
        },
        {
          id: "5",
          src: "project1.5.png",
          text: "Checkout dropdown",
        },
        {
          id: "6",
          src: "project1.6.png",
          text: "Checkout page",
        },
        {
          id: "7",
          src: "project1.7.png",
          text: "Sign-in page",
        },
        {
          id: "8",
          src: "project1.8.png",
          text: "Sign-up page",
        },
      ],
    },
    {
      projectName: "Curved Rock Fitness",
      tagLine: "Footwears, for every occasion",
      description:
        "An e-commerce web application where customer can shop for different types of footwears depending upon specific activity. This is web application can be extended to many other categories other than shops as it has build with extensible code which helps to register new categories and respective items.",
      toolsUsed:
        "ReactJS, Redux, Redux-thunk, React-Hooks, Express.js, local storage, Reselect",
      url: "",
      images: [
        { id: "1", src: "project2.1.png", text: "Homepage" },
        { id: "2", src: "project2.2.png", text: "Shop collection page" },
        { id: "3", src: "project2.3.png", text: "Filtered on size" },
        { id: "4", src: "project2.4.png", text: "Shop detail page" },
        { id: "5", src: "project2.5.png", text: "Cart page" },
        { id: "6", src: "project2.6.png", text: "Checkout page" },
      ],
    },
    {
      projectName: "Smart Brains",
      tagLine: "Face detection done right",
      description:
        "An application which is built to detect face in an image using machine learning algorithm hosted by Clarifi API. User registration and assigning there rank depending on their usage of this application",
      toolsUsed:
        "ReactJS, Redux, Redux-thunk, React-Hooks, Clarifi API, React-Tilt, Tachyons, Reselect",
      url: "",
      images: [
        { id: "1", src: "project3.1.png", text: "Sign-in page" },
        { id: "2", src: "project3.2.png", text: "Register page" },
        { id: "3", src: "project3.3.png", text: "Input for face detection" },
      ],
    },
    {
      projectName: "To-do",
      tagLine: "To-do application for web",
      description:
        "User can add to-do item, which will be listed with created date. Upon setting global reminder time, the particular to-do item will stand out from other notifying user to complete to-do. Along with this, user can mark an item as mark as done and later he can even delete it permanently",
      toolsUsed:
        "ReactJS, Redux, Redux-thunk, React-Hooks, React-Tilt, Styled-Components, Reselect",
      url: "",
      images: [
        { id: "1", src: "project4.1.png", text: "To-do" },
        { id: "2", src: "project4.2.png", text: "Add To-do" },
      ],
    },
    {
      projectName: "Leads Tracker",
      tagLine: "A chrome extension for tracking URLs",
      description:
        "The chorme extension is built with vanila Javasript, which helps in re-visiting those URLs which user has listed.",
      toolsUsed: "HTML, CSS, Vanila JavaScript, ES6, manifest.json",
      url: "",
      images: [{ id: "1", src: "project5.1.png", text: "Lead tracker" }],
    },
  ],
};

export default PORTFOLIO_DATA;
