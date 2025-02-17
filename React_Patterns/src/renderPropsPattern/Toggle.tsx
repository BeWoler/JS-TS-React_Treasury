import { JSX, useState } from "react";

export const Toggle = ({
  render,
}: {
  render: (isToggled: boolean, toggle: () => void) => JSX.Element;
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return render(isToggled, toggle);
};
