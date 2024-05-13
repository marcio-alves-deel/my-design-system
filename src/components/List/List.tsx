import {
  ListProps as BaseListProps,
  List as ListBase,
  ListItem,
  Stack,
} from "@mui/material";
import { FunctionComponent, ReactNode, useId } from "react";

interface ListProps extends BaseListProps {
  items?: ReactNode[] | ReactNode[][];
}

const List: FunctionComponent<ListProps> = ({ items, ...props }) => {
  const key = useId();

  const renderList: any = (items?: ReactNode[]) => {
    return items?.map((item) => {
      return (
        <ListItem key={key} disablePadding>
          {item}
        </ListItem>
      );
    });
  };

  return (
    <ListBase subheader={<li />} {...props}>
      <Stack spacing={2} direction="column">
        {renderList(items)}
      </Stack>
    </ListBase>
  );
};

export default List;
