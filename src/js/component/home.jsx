import React, { useState, useEffect} from "react";
import "/workspace/react-hello/src/styles/index.css";


//create your first component
const Home = (props) => {
	const [seconds, setSeconds] = useState(props.seconds);

	useEffect(() => {
		const interval = setInterval(() => {
		  setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	  }, []);
	
	  const hours = Math.floor(seconds / 3600);
	  const minutes = Math.floor((seconds % 3600) / 60);
	  const remainingSeconds = seconds % 60;
	
	  return (
		<div className="d-flex justify-content-center mt-3" style={{height: "10rem"}}>
			<div className="card me-3">
				<div className="card-body d-flex align-items-center justify-content-center bg-dark" style={{width: "7rem", color: "white"}}><i className="fa-solid fa-stopwatch fa-5x"></i></div>
			</div>

			<div className="card me-3">
		  		<div className="card-body d-flex align-items-center justify-content-center p-0 bg-dark" style={{width: "7rem", fontSize:"5rem", color: "white"}}>{Math.floor(hours / 10)}</div>
			</div>

			<div className="card me-5">
		  		<div className="card-body d-flex align-items-center justify-content-center p-0 bg-dark" style={{width: "7rem", fontSize:"5rem", color: "white"}}>{hours % 10}</div>
			</div>

			<div className="card me-3">
		  		<div className="card-body d-flex align-items-center justify-content-center p-0 bg-dark" style={{width: "7rem", fontSize:"5rem", color: "white"}}>{Math.floor(minutes / 10)}</div>
			</div>

			<div className="card me-5">
		  		<div className="card-body d-flex align-items-center justify-content-center p-0 bg-dark" style={{width: "7rem", fontSize:"5rem", color: "white"}}>{minutes % 10}</div>
			</div>

			<div className="card me-3">
		  		<div className="card-body d-flex align-items-center justify-content-center p-0 bg-dark" style={{width: "7rem", fontSize:"5rem", color: "white"}}>{Math.floor(remainingSeconds / 10)}</div>
			</div>

			<div className="card me-3">
		  		<div className="card-body d-flex align-items-center justify-content-center p-0 bg-dark" style={{width: "7rem", fontSize:"5rem", color: "white"}}>{remainingSeconds % 10}</div>
			</div>
		</div>
	  );
	}

export default Home;