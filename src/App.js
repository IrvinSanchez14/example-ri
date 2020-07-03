import React from 'react';
import './App.css';

import Tabla from './Tabla';

const styles = {
	table: {
		borderCollapse: 'collapse',
		width: '100%',
	},
};

/*const ejemplo = {
	id: 1,
	nombre: 'Juan',
	username: 'Juan14',
	email: 'juan@test.com',
};*/

class App extends React.Component {
	state = {
		titulo: '',
		data: [],
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) =>
				this.setState({
					titulo: 'Usuarios',
					data: json,
				})
			);
	}

	render() {
		console.log('STATE', this.state);
		return (
			<div>
				<h1>Tabla {this.state.titulo}</h1>
				<table style={styles.table}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>username</th>
							<th>email</th>
						</tr>
					</thead>
					<Tabla datos={this.state.data} />
				</table>
			</div>
		);
	}
}

export default App;
