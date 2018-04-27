import React from "react";
import GraficoDia from "./GraficoDia";
import Lista from "./Lista";
import AddAction from "./AddAction";



const Home = ({actions, handleAddAction}) => <div>
					<h1 style={{margin:"-10px 0px 30px 0px"}}>
						Action size
					</h1>
					<div className="col-md-12">
						<div className="col-md-4">
							<div className="panel panel-success">
								<div className="panel-heading">
									 
									 <AddAction onAdd={handleAddAction} /> 
									 <h2>Listado</h2>
								</div>
							<div className="panel-body">
								<table className="table table-striped table-condensed table-hover dataTable">
									<thead style={{background:"#A9D0F5"}}>
										<tr>
											<th>Hora</th>	
											<th>Con Dolor</th>	
											<th>En Actividad</th>	
											<th>Comentario</th>	
										</tr>
									</thead>
									<tbody>
									{actions.map(action =>
										<Lista 
											key={action.idaction}
											time={action.created_at}
											dolor={action.dolor}
											actividad={action.actividad}
											comentario={action.comentario}
											/>)}
									</tbody>
								</table>
							</div>
							</div>
						</div>
						<div className="col-md-8" style={{height:900}}>
							<div className="panel panel-success">
								<div className="panel-heading">
									 <h2>Intervalo Diario</h2>
								</div>
								<div className="panel-body">
										<GraficoDia/>									
								</div>
							</div>
						</div>
					</div>
					</div>;

export default Home;