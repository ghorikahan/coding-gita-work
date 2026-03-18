import './App.css'
import FeatureCard from './components/featureCard.jsx';
import Wel from './components/welcome.jsx';
const App = () => {
  return (
    <div className="bg-black min-h-screen w-full h-full flex flex-col justify-center items-center text-white text-center">


      <div className="flex flex-col items-center">


        <h1 className="text-8xl font-bold">Coding</h1>
        <h1 className="text-8xl font-bold">Gita</h1>


        <p className="text-gray-400 mt-6 text-lg">
          Smart, simple, and reliable attendance for modern classrooms.
        </p>


        <button className="mt-8 bg-gray-200 text-black px-6 py-3 rounded-lg font-medium hover:bg-white transition h-12 w-26 ">
          Login
        </button>


        <div className="flex gap-8 mt-16 flex-wrap justify-center">

          <FeatureCard
            title="Role-based dashboards"
            description="Admin, Mentor, and Student experiences tailored to their needs."
          />

          <FeatureCard
            title="Fast and secure access"
            description="Encrypted sessions and streamlined navigation."
          />

        </div>

      </div>
      {/* <Wel /> */}
    </div>
  );
};

export default App;