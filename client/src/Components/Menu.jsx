import React from "react";

const Menu = () => {

  const posts = [
    {
      id: 1,
      title: "ChatGPT Vs Bard: Which is better for coding?",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://source.unsplash.com/random/1260x740/?technology",
    },
    {
      id: 2,
      title: "Scrum vs. SAFe: Which Agile framework is right for your team?",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://source.unsplash.com/random/1260x750/?technology",
    },
    {
      id: 3,
      title: "Cloud computing challenges and opportunities for the public sector",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://source.unsplash.com/random/1260x760/?technology",
    },
    {
      id: 4,
      title: "VCP-DCV: All about VMware's Data Center Virtualization 2023",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://source.unsplash.com/random/1260x745/?technology",
    },
  ];
  return (
    <div className="menu_blog">
      <h1>Stay in the Present with these Technology Blogs</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button><a href="http://">Read More</a></button>
        </div>
      ))}
    </div>
  );
};

export default Menu;