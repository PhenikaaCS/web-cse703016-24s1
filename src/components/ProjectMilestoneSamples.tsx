import * as React from "react";

import { AppLink } from "@/components/links/AppLink";
import {
  getProjectSamplesStore,
  ProjectSamplesProjectKeyValues,
} from "@/data/ProjectSamplesData";
import {
  assertProjectSampleMilestoneKey,
  ProjectSamplesMilestoneKey,
} from "@/types/ProjectSamplesStore";
import { Alert } from "@mui/material";

interface ProjectMilestoneSamplesProps {
  milestone: ProjectSamplesMilestoneKey;
}

export const ProjectMilestoneSamples: React.FunctionComponent<
  ProjectMilestoneSamplesProps
> = (props) => {
  // Validate props, TypeScript does not validate in MDX
  assertProjectSampleMilestoneKey(props.milestone);

  return (
    <React.Fragment>
      <p>
        Samples are intended to illustrate a variety of approaches, none of
        which is intended to be ideal or exemplary. Also note details of
        assignments may have changed since prior offerings, so these samples may
        not completely correspond to the current project. Be sure to understand
        and carefully consider project requirements and feedback from the course
        staff in the context of your own work.
      </p>
      <Alert severity="warning">
          See samples from Canvas for each milestone.
        </Alert>
    </React.Fragment>
  );
};
