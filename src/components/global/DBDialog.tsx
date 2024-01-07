import React, { ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogProps,
} from "@mui/material";

import { padding } from "@mui/system";
import DBLoader from "./DBLoader";
import DBButton,{DBButtonProps} from "./DBButton";


type Props = DialogProps & {
  title?: any;
  children?: ReactNode;
  open: boolean;
  okText?: string;
  closeText?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg";
  onOk?(): void;
  onClose?(): void;
  mxLowerDiv?: number;
  pxLowerDiv?: number;
  buttonWidth?: number;
  splitButtons?: boolean;
  extraAction?:
    | {
        label: string;
        onClick: () => void;
      }
    | null
    | false;
  styling?: {
    okButton?: {
      color?: DBButtonProps["color"];
      variant?: DBButtonProps["variant"];
    };
    closeButton?: {
      color?: DBButtonProps["color"];
      variant?: DBButtonProps["variant"];
    };
    extraAction?: {
      color?: DBButtonProps["color"];
      variant?: DBButtonProps["variant"];
    };
  };
  hasOkButton?: boolean;
  hasCloseButton?: boolean;
  loading?: boolean;
  extraActionToLeft?: boolean;
  titleStyles?: React.CSSProperties;
  noCancelButton?:boolean
};

const DBDialog = ({
  title,
  children,
  open,
  okText = "Ok",
  closeText = "Cancel",
  maxWidth,
  onOk,
  onClose,
  extraAction,
  styling,
  splitButtons = false,
  mxLowerDiv = 2,
  pxLowerDiv = 2,
  buttonWidth,
  hasCloseButton = true,
  hasOkButton = true,
  loading = false,
  extraActionToLeft = false,
  titleStyles,
  noCancelButton=false,
  ...rest
}: Props) => {
  return (
    <Dialog
      {...rest}
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      fullWidth={true}
      open={open}
      maxWidth={maxWidth}
      
    >
      {title && (
        <DialogTitle
          id="simple-dialog-title"
          className="text-primaryTextLight w-full"
          style={titleStyles}
        >
          {title}
        </DialogTitle>
      )}
      <DialogContent >
        {loading ? (
          <div className="flex justify-center items-center h-32 ">
            <DBLoader />
          </div>
        ) : (
          children
        )}
      </DialogContent>
      <DialogActions>
        <div
          className={`flex w-full gap-2 pt-2 mb-2 mx-${mxLowerDiv} pr-${pxLowerDiv}  ${
            extraAction || splitButtons ? "justify-between" : "justify-end"
          }`}
        >
          {!noCancelButton && hasCloseButton && !extraActionToLeft && (
            <DBButton
              className={`h-9 w-${buttonWidth}`}
              color={styling?.closeButton?.color || "primary"}
              variant={styling?.closeButton?.variant || "outlined"}
              label={closeText}
              onClick={onClose}
            />
          )}

          { extraAction && extraActionToLeft && (
            <DBButton
              className={`h-9 w-${buttonWidth}`}
              color={styling?.extraAction?.color || "primary"}
              variant={styling?.extraAction?.variant || "outlined"}
              label={extraAction.label}
              onClick={extraAction.onClick}
            />
          )}

          <div className="flex items-center gap-2 ">
            {!noCancelButton && extraAction && !extraActionToLeft && (
              <DBButton
                className={`h-9 w-${buttonWidth}`}
                color={styling?.extraAction?.color || "primary"}
                variant={styling?.extraAction?.variant || "outlined"}
                label={extraAction.label}
                onClick={extraAction.onClick}
              />
            )}
            {!noCancelButton && hasCloseButton && extraActionToLeft && (
              <DBButton
                className={`h-9 w-${buttonWidth}`}
                color={styling?.closeButton?.color || "primary"}
                variant={styling?.closeButton?.variant || "outlined"}
                label={closeText}
                onClick={onClose}
              />
            )}
            {hasOkButton && (
              <DBButton
                className={`h-9 w-${buttonWidth}`}
                color={styling?.okButton?.color || "primary"}
                variant={styling?.okButton?.variant || "contained"}
                label={okText}
                onClick={onOk}
              />
            )}
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default DBDialog;
