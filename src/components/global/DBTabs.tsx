import * as React from "react";
import Tabs, { TabsProps } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SxProps } from "@mui/material";

type Props = TabsProps & {
  tabs: Array<string>;
  value: number;
  onChange: (newValue: number) => void;
  tabSx?: SxProps;
};
function DBTabs({ tabs, value, onChange, sx, tabSx }: Props) {
  return (
    <Tabs
      variant="scrollable"
      scrollButtons="auto"
      value={value}
      onChange={(_, newValue: number) => {
        onChange(newValue);
      }}
      sx={{
        width: "100%",
        ".MuiTabs-indicator": {
          backgroundColor: "var(--primary)",
        },
        ".MuiTab-root": {
          color: "var(--hint)",
          fontSize: "var(--text-sm)",

          "&.Mui-selected": {
            color: "var(--primary)",
            fontWeight: "bold",
          },
        },

        ...sx,
      }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={`${tab}-${index}`}
          label={tab}
          sx={{
            ...tabSx,
          }}
        />
      ))}
    </Tabs>
  );
}

export default DBTabs;
