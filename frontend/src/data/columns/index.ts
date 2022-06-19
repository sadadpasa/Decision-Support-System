import { Column } from "react-table";
import { River } from "type";

const datasetColumns: ReadonlyArray<Column<River>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "River Name",
    accessor: "name",
    width: "20%",
  },
  {
    Header: "attendance",
    accessor: "attendance",
    width: "17.5%",
  },
  {
    Header: "age",
    accessor: "age",
    width: "17.5%",
  },
  {
    Header: "salary",
    accessor: "salary",
    width: "17.5%",
  },
  {
    Header: "Distance",
    accessor: "distance",
    width: "17.5%",
  },
  {
    Header: "gpa",
    accessor: "gpa",
    width: "17.5%",
  },
  {
    Header: "psychotest",
    accessor: "psychotest",
    width: "17.5%",
  },
];

export { datasetColumns };
