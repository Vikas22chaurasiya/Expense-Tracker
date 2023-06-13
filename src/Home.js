import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";
import "./index.css";
import {
	PushToTalkButton,
	PushToTalkButtonContainer,
	ErrorPanel,
} from "@speechly/react-ui";
import Data from "./components/Data/Data";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {

	
	const classes = useStyles();
	const navigate = useNavigate();
	const auth = getAuth();
   
	// const reloadCount = sessionStorage.getItem('reloadCount');
    // if(reloadCount < 1) {
    //   sessionStorage.setItem('reloadCount', String(reloadCount + 1));
    //   window.location.reload();
    // } else {
    //   sessionStorage.removeItem('reloadCount');
    // }
	

	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				localStorage.setItem('islogged',false)

				navigate("/");
			})
			.catch((error) => {
				// An error happened.
			});
		// localStorage.clear();
		// history.push("/");
	};

	const dashboard = () => {
		navigate("/dashboard");
	};

	const AI = () => {
		navigate("/AI");
	};

	return (
		<div>
			<div className="navbar">
				<div className="title">
					<h2>Expense Tracker Application</h2>
				</div>
				<div className="right">
					<button className="btn" onClick={dashboard}>
						Dashboard
					</button>
					<button className="btn" onClick={AI}>
						AI
					</button>
					<button className="btn" onClick={logOut}>
						Log Out
					</button>
				</div>
			</div>
			<Data />
			<Grid
				className={classes.grid}
				container
				spacing={0}
				alignItems="center"
				justifyContent="center"
				style={{ height: "100vh" }}
			>
				<Grid item xs={12} sm={3} className={classes.mobile}>
					<Details title="Income" />
				</Grid>

				<Grid item xs={12} sm={3} className={classes.main}>
					<Main />
				</Grid>

				<Grid item xs={12} sm={3} className={classes.desktop}>
					<Details title="Income" />
				</Grid>

				<Grid item xs={12} sm={3} className={classes.last}>
					<Details title="Expense" />
				</Grid>
			</Grid>
			<PushToTalkButtonContainer>
				<PushToTalkButton />
				{/* <ErrorPanel /> */}
			</PushToTalkButtonContainer>
		</div>
	);
};

export default Home;
