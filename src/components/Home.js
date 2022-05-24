const Home = () => {
	return (
		<main>
			<div id="hero-image">{/* <div id="hero-text">WePick</div> */}</div>
			<div id="main-content">
				<div id="popular-scroll"></div>
				<ul id="account-overview">
					<div className="title">Account Overview</div>
					<li className="sub-title">Member Since: 2022</li>
					<li className="sub-title">Username: ARubbo</li>
					<li className="sub-title">First Name: Anthony</li>
					<li className="sub-title">Last Name: Rubbo</li>
					<li className="sub-title">Email: Anthony Rubbo</li>
					<li className="sub-title">Update Information</li>
					<li className="sub-title">Change Password</li>
				</ul>
				<div id="newsletter">Newsletter Signup</div>
			</div>
		</main>
	);
};

export default Home;
