import PropTypes from "prop-types";
import DefaultPicture from "../../assets/roger.jpg";
import styled from "styled-components";
export default function Card({ label, picture, title }) {
  const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
  `;

  const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
  `;
  //State
  //Comportement

  //Render
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  );
}
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  picture: PropTypes.string.isRequired,
};
Card.defaultProp = {
  label: "",
  title: "",
  picture: DefaultPicture,
};
