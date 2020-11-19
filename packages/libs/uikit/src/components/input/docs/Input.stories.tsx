import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Theme } from "components";
import Input from "../index";
import { InputProps } from "../types";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    placeholder: {
      type: { name: "string", required: false },
    },
    error: {
      type: { name: "string", required: false },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Theme>
    <Input {...args} />
  </Theme>
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  error: "",
};
