import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";

// interface ButtonProps {
//   color: string;
//   root: {
//     background: Function;
//     border: number;
//     borderRadius: number;
//     boxShadow: Function;
//     height: number;
//     padding: string;
//     margin: number;
//   };
// }

interface BgProps {
  color: string;
}

const useStyles = makeStyles({
  root: {
    background: (props: BgProps) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: (props: BgProps) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 40,
    padding: "0 20px",
    margin: 8,
  },
});

function MyButton(props: any) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

const Login = () => {
  return (
    <Fragment>
      <MyButton color="blue">Login</MyButton>
    </Fragment>
  );
};

export default Login;
