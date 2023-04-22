import {
  BackgroundImage,
  DirectoryBody,
  DirectoryItemContainer,
} from "./DirectoryItem.styles";

import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const useNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={useNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
