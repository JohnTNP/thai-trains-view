import { Train } from "@/lib/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type TrainsTableProps = {
    trainList: Train[]
}


export function TrainsTable({ trainList }: TrainsTableProps) {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Train No.</TableHead>
                        <TableHead>Current Station</TableHead>
                        <TableHead>Start</TableHead>
                        <TableHead>Destination</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {trainList.sort((a, b) => a.trains_no - b.trains_no).map((train, index) => (
                        <TableRow key={index}>
                            <TableCell>{train.trains_no}</TableCell>
                            <TableCell>{train.station_name_eng}</TableCell>
                            <TableCell>{train.fromen}</TableCell>
                            <TableCell>{train.toen}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}