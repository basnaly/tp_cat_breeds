import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CatTableProps } from "../../utils/Types";

const cellClass = {end: 'border-end', top: 'border-top'}

const CatTable = (props: CatTableProps) => {

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 450 }} aria-label="simple table">

				<TableHead>
					<TableRow>
						<TableCell className={`${cellClass.end} ${cellClass.top}`}>Cat's properties</TableCell>
						<TableCell className={cellClass.top} align="center">Value</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					<TableRow
						sx={{
							"&:last-child td, &:last-child th": { border: 0 },
						}}
					>
						<TableCell component="th" scope="row" className={cellClass.end}>Weight, imperial</TableCell>
						<TableCell align="center">{props.cat?.weight?.imperial} pounds</TableCell>
					</TableRow>

					<TableRow>
						<TableCell className={cellClass.end}>Weight, metric</TableCell>
						<TableCell align="center">{props.cat?.weight?.metric} kg</TableCell>
					</TableRow>

					<TableRow>
						<TableCell className={cellClass.end}>Life span</TableCell>
						<TableCell align="center">{props.cat?.life_span} years</TableCell>
					</TableRow>

					<TableRow>
						<TableCell className={cellClass.end}>Adaptability</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.adaptability)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Affection level</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.affection_level)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Child friendly</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.child_friendly)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Dog friendly</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.dog_friendly)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Energy level</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.energy_level)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Grooming</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.grooming)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Health issues</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.health_issues)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Intelligence</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.intelligence)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Shedding level</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.shedding_level)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Social needs</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.social_needs)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Stranger friendly</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.stranger_friendly)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Vocalisation</TableCell>
						<TableCell align="center">{'⭐️'.repeat(props.cat?.vocalisation)}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Experimental</TableCell>
						<TableCell align="center">{!!props.cat?.experimental ? '✅' : '❌'}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Hairless</TableCell>
						<TableCell align="center">{!!props.cat?.hairless ? '✅' : '❌'}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Rare</TableCell>
						<TableCell align="center">{!!props.cat?.rare ? '✅' : '❌'}</TableCell>
					</TableRow>

                    <TableRow>
						<TableCell className={cellClass.end}>Hypoallergenic</TableCell>
						<TableCell align="center">{!!props.cat?.hypoallergenic ? '✅' : '❌'}</TableCell>
					</TableRow>

				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CatTable;
