import React, { Component } from "react"
import { Link } from "react-static"

export default class Header extends Component {

	render() {
		return (
			<header className="header">
				<nav className="navbar is-light">
					<div className="container is-fluid">
						<div className="navbar-brand">
							<Link className="navbar-item" to="/">
								<img src="/images/logo-header.png" width="66" height="28" />
							</Link>

							<div className="navbar-burger burger">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>

						<div className="navbar-menu">
							<div className="navbar-start">
								<Link className="navbar-item" to="/">Home</Link>
								<Link className="navbar-item" to="/documentation">Documentation</Link>
								<a className="navbar-item">Examples</a>
								<a className="navbar-item">Change Log</a>
							</div>
						</div>
					</div>
				</nav>

				{/*
				The actual navbar above is fixed so we need to add the same amount of space
				to the top of the page so it's not hidden behind the header.
				*/}
				<div className="navbar">
				</div>
			</header>
		)
	}

}