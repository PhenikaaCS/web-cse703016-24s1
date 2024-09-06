import * as React from "react";

import { Sidebar } from "@/components/Sidebar";

import { SITE_LINKS } from "../sitelinks";

export default function Page(): React.ReactElement {
  return (
    <Sidebar
      siteLinks={SITE_LINKS}
      pageLinks={[
        {
          anchor: "Projects",
          href: "/projects#projects",
        },
        [
          {
            anchor: "Project 1",
            href: "/projects/project1",
          },
        ],
      ]}
    />
  );
}
