import { ListProps as BaseListProps } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
interface ListProps extends BaseListProps {
    items?: ReactNode[] | ReactNode[][];
}
declare const List: FunctionComponent<ListProps>;
export default List;
