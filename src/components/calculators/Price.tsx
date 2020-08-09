import React, { useState, ChangeEvent, InputHTMLAttributes } from "react";
import {
  ButtonGroup,
  Button,
  makeStyles,
  Input,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import { Typography, SubTitle } from "../Typograpgy";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
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
    <tr>
      <td>{index + 1}.</td>
      <td>
        <Input
          type="number"
          value={item.qty}
          inputProps={{ min: 0 }}
          onChange={handleChange("qty", index)}
          startAdornment={<InputAdornment position="start">Qty</InputAdornment>}
        />
      </td>
      <td>
        <Input
          value={item.name}
          placeholder="Product Name"
          onChange={handleChange("name", index)}
        />
      </td>
      <td>
        <Input
          type="number"
          value={item.price}
          inputProps={{ min: 0 }}
          placeholder="Price"
          onChange={handleChange("price", index)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </td>
      <td>
        <Input
          type="number"
          value={item.discount}
          inputProps={{ min: 0 }}
          placeholder="Discount"
          onChange={handleChange("discount", index)}
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
        />
      </td>
      <td>
        <Input
          type="number"
          readOnly
          value={afterDiscPrice(item)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </td>
      <td>
        <Button color="secondary" onClick={() => onRemove(index)}>
          Remove
        </Button>
      </td>
    </tr>
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
    <tr>
      <td></td>
      <td></td>
      <td colSpan={2}>Tax</td>
      <td>
        <Input
          type="number"
          value={item.discount}
          inputProps={{ min: 0 }}
          placeholder="Discount"
          onChange={handleChange("discount", index)}
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
        />
      </td>
      <td>
        <Input
          type="number"
          readOnly
          value={afterTaxPrice}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </td>
      <td>
        <Button color="secondary" onClick={() => onRemove(index)}>
          Remove
        </Button>
      </td>
    </tr>
  );
};

function afterDiscPrice(item: CatItem): number {
  return (item.qty * item.price * (100 - item.discount)) / 100;
}
function afterTaxPrice(sum: number, discount: number): number {
  return (sum * (100 + discount)) / 100;
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
            addItem({ type: CatType.PRODUCT, qty: 1, price: 0, discount: 0 });
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
      <div>
        {items.length ? (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Qty.</th>
                <th>Item</th>
                <th>Price</th>
                <th>%</th>
                <th>Aggr. Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: CatItem, index: number) => {
                return renderItem({
                  item,
                  index,
                  handleChange: handleProductChange,
                  onRemove,
                });
              })}
              {items.length ? (
                <tr>
                  <td></td>
                  <td></td>
                  <td colSpan={3}>Total</td>
                  <td>$ {total}</td>
                  <td></td>
                </tr>
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
                <tr>
                  <td></td>
                  <td></td>
                  <td colSpan={3}>Total Aft. Tax.</td>
                  <td>$ {afterTaxTotalprice}</td>
                  <td></td>
                </tr>
              ) : null}
            </tbody>
          </table>
        ) : (
          <SubTitle>No Item to display, Please add Items</SubTitle>
        )}
      </div>
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
