import styled from "styled-components";
// const PicSize=styled.div`
// width: 10px;
// height: 10px;
// margin: 8px;
// `
function PropsImg(props) {
  return (
    <div>
      <img
        src={props.image}
        alt="project"
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{props.name}</h3>
    </div>
  );
}
export default PropsImg;
