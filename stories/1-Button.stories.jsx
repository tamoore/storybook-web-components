import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import "../components/button/Button"

export default {
  title: 'Button',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, color, children }) => {
  const temp = document.createElement("template")
  temp.innerHTML = /*html*/`
    <tm-button color=${color}>
      <span>${children}</span>
    </tm-button>
  `
  const btn = temp.content.querySelector("tm-button")
  btn.addEventListener("click", onClick)
  return temp.content
};

export const Text = Template.bind({});
Text.args = {
  children: 'Button',
  onClick: action('onClick'),
};

export const Gray = Template.bind({});
Gray.args = {
  children: 'Gray Button',
  color: 'gray',
  onClick: action('onClick'),
};

