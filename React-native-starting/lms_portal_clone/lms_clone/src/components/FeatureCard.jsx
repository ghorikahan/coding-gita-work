const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-zinc-900 border border-gray-700 rounded-xl p-6 w-[420px] text-left shadow-lg">
      
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="text-gray-400 mt-3">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;