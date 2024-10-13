import DaisyUiTheme from "@/Components/DasiyUiTheme";
import React from "react";
import { Createthemefun } from "../utils/theme";
import { Usethemefunction } from "../utils/usetheme";

export default function Themegenerator() {
  return (
    <>
      <Createthemefun>
        <Usethemefunction>
          <DaisyUiTheme />
        </Usethemefunction>
      </Createthemefun>
    </>
  );
}
