import React from "react";
import {
  Dialog,
  DialogContent,
  DialogShadow,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";

export function OrderDialog({
  openOrderDialog,
  setOpenOrderDialog,
  setOrders,
}) {
  return openOrderDialog ? (
    <>
      <DialogShadow />
      <Dialog>
        <DialogContent>
          <h2>Your order is on the way! </h2>
          <p>
            Your order has been confirmed! Please click the confirm button to
            add more orders!
          </p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog();
            }}
          >
            Confirm
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : (
    <div />
  );
}
