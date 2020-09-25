import React from "react";
import { FaCircle, FaQuestionCircle } from "react-icons/fa";

const CharacterItem = ({ item }) => {
	let originName = item.origin.name;
	let locationName = item.location.name;
	return (
		<div className="card">
			<div className="card-inner">
				<div className="card-front">
					<img src={item.image} alt="" />
				</div>
				<div className="card-back">
					<h1>{item.name}</h1>
					<ul>
						<li>
							<strong>Species:</strong> {item.species}
						</li>
						<li>
							<strong>Gener:</strong> {item.gender}
						</li>
						<li>
							<strong>Origin:</strong> {originName}
						</li>
						<li>
							<strong>Location:</strong> {locationName}
						</li>
						<li className="sameline">
							<strong>Status:</strong> {item.status}{" "}
							{item.status === "Alive" ? (
								<FaCircle style={{ fill: "green" }} />
							) : item.status === "Dead" ? (
								<FaCircle style={{ fill: "red" }} />
							) : (
								<FaQuestionCircle style={{ fill: "white" }} />
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CharacterItem;
