import { useEffect, useState } from "react";
//import { Switch } from "../../ui/switch";
import { ColorModeButton } from "../../../components/ui/color-mode";

// interface Props {
//   bgColor?: "green" | "red";
//   initAsChecked?: boolean;
//   onChecked?: () => void;
//   onUnchecked?: () => void;
// }

const ColorMode = (/*{
  onChecked,
  onUnchecked,
  bgColor = "green",
  initAsChecked = false,
}: Props*/) => {
  // const [isChecked, setChecked] = useState(initAsChecked);
  // const [firstLoading, setFirstLoading] = useState(true);

  // useEffect(() => {
  //   if (firstLoading) {
  //     setFirstLoading(false);
  //     return;
  //   }

  //   if (isChecked && onChecked) onChecked();

  //   if (!isChecked && onUnchecked) onUnchecked();
  // }, [isChecked]);

  return (
    // <Switch
    //   checked={isChecked}
    //   onCheckedChange={() => setChecked(!isChecked)}
    //   colorPalette={bgColor}
    // >
    //   Dark mode
    // </Switch>
    <ColorModeButton />
  );
};

export default ColorMode;
