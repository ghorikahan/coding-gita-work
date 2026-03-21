// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();

  const cards = [
    {
      title: "Food",
      description: "Explore different food items and their details.",
      route: "/food",
    },
    {
      title: "Products",
      description: "Browse products with prices and categories.",
      route: "/products",
    },
    {
      title: "Movies",
      description: "Discover popular movies and their information.",
      route: "/movies",
    },
    {
      title: "Recipes",
      description: "Find delicious recipes from around the world.",
      route: "/recipes",
    },
  ];

  return (
    <div className="home">
      <h1 className="home-title">API Explorer</h1>

      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(card.route)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

