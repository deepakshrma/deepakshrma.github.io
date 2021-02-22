import {
  Button,
  ButtonGroup,
  Input,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SaveIcon from "@material-ui/icons/Save";
import React, { ChangeEvent, useState } from "react";
import { SubTitle } from "../Typograpgy";

// const Table = styled.table`
//   table-layout: fixed;
//   width: 100%;
//   overflow-x: scroll;
//   th,
//   td {
//     min-width: 100px;
//   }
// `;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    "& input[max='9999999']": {
      minWidth: "150px",
    },
    "& input[placeholder]": {
      minWidth: "80px",
    },
  },
  table: {
    // tableLayout: "fixed",
    // width: "auto",
    minWidth: 1000,
    marginBottom: 0,
  },
}));

enum CatType {
  PRODUCT,
  DISCOUNT,
  TOTAL,
  TAX,
}
interface CatItem {
  qty?: number;
  name?: string;
  type: CatType;
  price?: number;
  discount?: number;
}
const renderItem = ({ item, index, handleChange, onRemove }: any) => {
  return (
    <TableRow key={`titem_${index}`}>
      <TableCell>{index + 1}.</TableCell>
      <TableCell>
        <Input
          type="number"
          fullWidth
          value={item.qty || 1}
          inputProps={{ min: 1, max: 100, pattern: "[0-9.]" }}
          onChange={handleChange("qty", index)}
          startAdornment={<InputAdornment position="start">Qty</InputAdornment>}
        />
      </TableCell>
      <TableCell>
        <Input
          fullWidth
          inputProps={{ min: 0, max: 30 }}
          value={item.name || ""}
          placeholder="Product Name"
          onChange={handleChange("name", index)}
        />
      </TableCell>
      <TableCell align="right">
        <Input
          fullWidth
          inputProps={{
            min: 0,
            max: 9999999,
            pattern: "[0-9.]",
            style: { textAlign: "right" },
          }}
          type="number"
          value={item.price}
          placeholder="Price"
          onChange={handleChange("price", index)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </TableCell>
      <TableCell align="right">
        <Input
          fullWidth
          inputProps={{
            min: 0,
            max: 99,
            step: 5,
            pattern: "[0-9.]",
            style: { textAlign: "right" },
          }}
          type="number"
          value={item.discount}
          placeholder="Discount"
          onChange={handleChange("discount", index)}
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
        />
      </TableCell>
      <TableCell align="right">
        <Input
          fullWidth
          type="number"
          readOnly
          value={afterDiscPrice(item)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </TableCell>
      <TableCell>
        <Button color="secondary" onClick={() => onRemove(index)}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
};
const renderTax = ({
  item,
  index,
  afterTaxPrice = 0,
  handleChange,
  onRemove,
}: any) => {
  return (
    <TableRow key={`ttax_${index}`}>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell colSpan={2}>Tax</TableCell>
      <TableCell align="right">
        <Input
          type="number"
          value={item.discount}
          inputProps={{
            min: 1,
            max: 99,
            step: 5,
            pattern: "[0-9.]",
            style: { textAlign: "right" },
          }}
          placeholder="Tax"
          onChange={handleChange("discount", index)}
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
        />
      </TableCell>
      <TableCell align="right">
        <Input
          type="number"
          readOnly
          value={afterTaxPrice}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </TableCell>
      <TableCell>
        <Button color="secondary" onClick={() => onRemove(index)}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

function afterDiscPrice(item: CatItem): number {
  return (item.qty * item.price * (100 - (item.discount || 0))) / 100;
}
function afterTaxPrice(sum: number, discount: number): number {
  return (sum * (100 + (discount || 0))) / 100;
}
const toFix = (num: Number): number => (Number(num) || 0).toFixed(2);

export default function Price(props: any) {
  const classes = useStyles();
  const [items, setItems] = useState<CatItem[]>([]);
  const [taxes, setTaxes] = useState<CatItem[]>([]);
  const addItem = (item: CatItem) => {
    setItems([...items, item]);
  };
  const addTax = (item: CatItem) => {
    setTaxes([...taxes, item]);
  };
  const hasTax = taxes.length;
  let total = toFix(
    items.reduce((sum: number, item: CatItem) => {
      return sum + afterDiscPrice(item);
    }, 0)
  );
  let afterTaxTotalprice = toFix(
    taxes.reduce((sum: number, item: CatItem) => {
      return afterTaxPrice(sum, item.discount);
    }, total)
  );
  const updateItems = (
    items: CatItem[],
    index: number,
    type: string,
    value: string
  ) => {
    if (items[index]) {
      const isNum = !!Number(value);
      if (isNum && Number(value) < 0) return items;
      let updatedItem = {
        ...items[index],
        [type]: Number(value) || value,
      };
      return [...items.slice(0, index), updatedItem, ...items.slice(index + 1)];
    }
  };
  const handleProductChange = (type: string, index: number) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setItems(updateItems(items, index, type, e.target.value));
  };
  const handleTaxChange = (type: string, index: number) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setTaxes(updateItems(taxes, index, type, e.target.value));
  };

  const onRemove = (index: number) => {
    if (items[index]) {
      setItems([...items.slice(0, index), ...items.slice(index + 1)]);
    }
  };
  const onRemoveTax = (index: number) => {
    if (taxes[index]) {
      setTaxes([...taxes.slice(0, index), ...taxes.slice(index + 1)]);
    }
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button
          onClick={() => {
            addItem({ type: CatType.PRODUCT, qty: 1 });
          }}
        >
          + Item
        </Button>
        <Button
          disabled={items.length === 0}
          onClick={() => {
            addTax({ type: CatType.TAX, discount: 7 });
          }}
        >
          + Tax
        </Button>
      </ButtonGroup>
      {items.length ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Qty.</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>%</TableCell>
                <TableCell>Aggr. Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item: CatItem, index: number) => {
                return renderItem({
                  item,
                  index,
                  handleChange: handleProductChange,
                  onRemove,
                });
              })}
              {items.length ? (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell align="right">$ {total}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ) : null}
              {taxes.length
                ? taxes.map((item: CatItem, index: number) => {
                    return renderTax({
                      item,
                      index,
                      afterTaxPrice: toFix(
                        taxes
                          .slice(0, index + 1)
                          .reduce((sum: number, item: CatItem) => {
                            return afterTaxPrice(sum, item.discount);
                          }, total)
                      ),
                      handleChange: handleTaxChange,
                      onRemove: onRemoveTax,
                    });
                  })
                : null}
              {hasTax ? (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell colSpan={3}>Total Aft. Tax.</TableCell>
                  <TableCell align="right">$ {afterTaxTotalprice}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <SubTitle>No Item to display, Please add Items</SubTitle>
      )}
      <Button
        disabled={items.length === 0}
        onClick={() => window.print()}
        startIcon={<SaveIcon />}
        size="large"
        variant="contained"
        color="primary"
      >
        Print
      </Button>
    </div>
  );
}
