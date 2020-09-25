import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const CharacterGrid = ({ items, isLoading, getPage, page, lastPage }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<div className="grid">
			<div className="buttons">
				{page === 1 ? (
					<button
						className="prev hidden"
						onClick={() => getPage(page - 1)}
					>
						<FaArrowCircleLeft />
					</button>
				) : (
					<button className="prev" onClick={() => getPage(page - 1)}>
						<FaArrowCircleLeft />
					</button>
				)}
				{items.length < 20 || lastPage === null ? (
					<button
						className="next hidden"
						onClick={() => getPage(page + 1)}
					>
						<FaArrowCircleRight />
					</button>
				) : (
					<button className="next" onClick={() => getPage(page + 1)}>
						<FaArrowCircleRight />
					</button>
				)}
			</div>
			<section className="cards">
				{items.map((item) => (
					<CharacterItem item={item} key={item.id} />
				))}
			</section>
		</div>
	);
};

export default CharacterGrid;
