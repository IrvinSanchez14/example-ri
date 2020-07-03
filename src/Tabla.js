import React from 'react';

function Tabla(Props) {
	const [tablaDatos, setTablaDatos] = React.useState([]);

	React.useEffect(() => {
		setTablaDatos(Props.datos);
	}, [Props.datos]);

	return (
		<tbody>
			{tablaDatos.map((usuario) => {
				return (
					<tr key={usuario.id}>
						<td>{usuario.id}</td>
						<td>{usuario.name}</td>
						<td>{usuario.username}</td>
						<td>{usuario.email}</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default Tabla;
