import React, { useState, useEffect } from "react";

const Search = ({ getQuery, getPage, search, getSearch, getStatus }) => {
	const [text, setText] = useState("");

	useEffect(() => {
		if (search === false) {
			setText("");
			getSearch(true);
		}
	}, [search]);

	const onChange = (q) => {
		setText(q);
		getQuery(q);
		getPage(1);
	};

	const checkAlive = () => {
		document.getElementById("two").checked = false;
		getStatus("alive");
		getPage(1);

		if (
			document.getElementById("one").checked === false &&
			document.getElementById("two").checked === false
		) {
			getStatus("");
			getPage(1);
		}
	};

	const checkDead = () => {
		document.getElementById("one").checked = false;
		getStatus("dead");
		getPage(1);

		if (
			document.getElementById("one").checked === false &&
			document.getElementById("two").checked === false
		) {
			getStatus("");
			getPage(1);
		}
	};

	return (
		<section className="search">
			<form>
				<input
					type="text"
					placeholder="Search characters ..."
					className="form-control"
					value={text}
					onChange={(e) => onChange(e.target.value)}
					autoFocus
				/>
			</form>
			<div className="boxes">
				<div className="box">
					<input id="one" type="checkbox" onClick={checkAlive} />
					<span className="check"></span>
					<label htmlFor="one" className="labelone">
						Alive
					</label>
				</div>
				<div className="box">
					<input id="two" type="checkbox" onClick={checkDead} />
					<span className="check red"></span>
					<label htmlFor="two" className="labeltwo">
						Dead
					</label>
				</div>
			</div>
		</section>
	);
};

export default Search;
