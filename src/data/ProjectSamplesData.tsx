import { ProjectSamplesStore } from "@/types/ProjectSamplesStore";

/**
 * A key for each sample project.
 */
export const ProjectSamplesProjectKeyValues = [
  "backtrack",
  "bookwurm",
  "clark",
  "cupanion",
  "dash",
  "hermes",
  "jasper",
  "laundr",
  "note",
  "pawsitive",
  "pilltender",
  "seek",
  "simpark",
  "sprout",
  "wastewizard",
  "wishingwell",
] as const;

/**
 * A key for each sample milestone.
 *
 * Each project will provide each of these sample milestones.
 */
export const ProjectSamplesMilestoneKeyValues = [
  "assignment1b",
  "assignment1c",
  "assignment2b",
  "assignment2c",
  "assignment2d",
  "assignment2e",
  "assignment2f",
  "assignment2g",
  "assignment2p",
  "assignment3a",
  "assignment3c",
  "assignment3d",
  "assignment3e",
  "assignment3p",
  "assignment4poster",
] as const;

/**
 * The actual ProjectSamplesStore.
 */
const PROJECT_SAMPLE_STORE: ProjectSamplesStore = {
};

export const getProjectSamplesStore: () => ProjectSamplesStore = () => {
  return PROJECT_SAMPLE_STORE;
};
