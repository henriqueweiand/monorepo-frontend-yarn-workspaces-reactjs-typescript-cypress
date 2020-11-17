import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Loading from "../index";
import { LoadingProps } from "../types";
import { Theme } from "components";

export default {
  title: "Example/Loading",
  component: Loading,
} as Meta;

const Template: Story<LoadingProps> = (args) => (
  <Theme>
    <Loading {...args}>Hello</Loading>
  </Theme>
);

export const DefaultLoading = Template.bind({});
