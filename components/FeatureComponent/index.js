import FeatureComponent from "./FeatureComponent";

const FeatureLayout = ({ features }) => {
  return (
    <div className="container mx-auto px-4">
      {features.map((feature, index) => (
        <FeatureComponent
          key={index}
          imageSrc={feature.imageSrc}
          title={feature.title}
          description={feature.description}
          buttonText={feature.buttonText}
          imagePosition={feature.imagePosition}
          featureHeading={feature.featureHeading} 
        />
      ))}
    </div>
  );
};

export default FeatureLayout;
