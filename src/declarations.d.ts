declare module "html-react-parser" {
  import { ReactNode } from "react";
  export default function parse(htmlString: string): ReactNode;
}
