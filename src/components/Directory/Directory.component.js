import "./Directory.styles.scss";
import DirectoryItem from "../DirectoryItem/DirectoryItem.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory__container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
