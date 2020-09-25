import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";

const App = () => {
	const [items, setItems] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	const [query, setQuery] = useState("");

	const [page, setPage] = useState(1);

	const [search, setSearch] = useState(true);

	const [status, setStatus] = useState("");

	const [lastPage, setLastPage] = useState();

	useEffect(() => {
		const fetchItems = async () => {
			// get characters from api
			const result = await axios(
				`https://rickandmortyapi.com/api/character/?page=${page}&name=${query}&status=${status}`
			);
			// console.log(result.data.results);

			setItems(result.data.results);
			setLastPage(result.data.info.next);

			// not loading anymore, so it is false
			setIsLoading(false);
		};

		fetchItems();
	}, [query, page, status]);

	return (
		<div className="container">
			<Header
				getHome={(p, q) => {
					setPage(p);
					setQuery(q);
					setSearch(false);
				}}
			/>

			<Search
				getQuery={(q) => setQuery(q)}
				getPage={(p) => setPage(p)}
				getSearch={(s) => setSearch(s)}
				getStatus={(st) => setStatus(st)}
				search={search}
			/>

			<CharacterGrid
				isLoading={isLoading}
				items={items}
				getPage={(p) => setPage(p)}
				page={page}
				lastPage={lastPage}
			/>
		</div>
	);
};

export default App;
