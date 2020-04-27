import React from "react";
import { useSelector } from "react-redux";
import "./Table.css";

const Table = (props) => {
	const myStandings = useSelector((state) => state.standingsReducer.data.data);
	const firstStanding = myStandings && myStandings.standings[props.value];

	return (
		<div className="MainTable">
			<table className="topTable">
				<thead>
					<tr>
						<th>#</th>
						<th className="name">Name</th>
						<th>Pkt</th>
						<th>W</th>
						<th>R</th>
						<th>P</th>
						<th> B+</th>
						<th>B-</th>
						<th>Bls</th>
					</tr>
				</thead>
			</table>
			<table className="bottomTable">
				<tbody>
					{firstStanding &&
						firstStanding.table.map((value) => (
							<tr className="row" key={value.position}>
								<td>{value.position}.</td>
								<td>{value.team.name}</td>
								<td>{value.points}</td>
								<td>{value.won}</td>
								<td>{value.draw}</td>
								<td>{value.lost}</td>
								<td>{value.goalsFor}</td>
								<td>{value.goalsAgainst}</td>
								<td>{value.goalDifference}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
