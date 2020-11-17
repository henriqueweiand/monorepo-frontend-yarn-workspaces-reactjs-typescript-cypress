import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Theme from "../index";
import { ThemeProps } from "../types";

export default {
  title: "Example/Theme",
  component: Theme,
} as Meta;

const Template: Story<ThemeProps> = (args) => <Theme>Hello</Theme>;

export const DefaultTheme = Template.bind({});
