import styled from "styled-components";
import { Link } from "react-router-dom";
import { MagicContext } from "../Translate/Translate";
import {
  IconName,
  FaHome,
  FaHatWizard,
  FaEnvelope,
  FaCalendar,
} from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const StyledNavBar = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;

  li {
    margin: 0 32px;
  }
`;

const StyledNavBarContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  position: absolute;
  z-index: 999;
  top: 45px;
  left: -13px;
`;

function SideBar() {
  const classes = useStyles();
  const controler = MagicContext();

  return (
    <StyledNavBarContainer>
      <StyledNavBar>
        <li>
          <Link to="/">
            {" "}
            <FaHome fontSize="x-large" style={{ color: "black" }} />
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            {<FaCalendar fontSize="x-large" style={{ color: "black" }} />}
          </Link>
        </li>
        <li>
          <Link to="/Skills">
            <FaHatWizard fontSize="x-large" style={{ color: "black" }} />
          </Link>
        </li>
        <li>
          <Link to="/ContactMe">
            {" "}
            <FaEnvelope fontSize="x-large" style={{ color: "black" }} />
          </Link>
        </li>
      
        <Button  onClick={controler.CHngaeButton} variant="outlined" size="small" color="primary" className={classes.margin}>
        Language
        </Button>
      </StyledNavBar>
    </StyledNavBarContainer>
  );
}
export default SideBar;
