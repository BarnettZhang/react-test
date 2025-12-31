import React from "react";
import * as z from "zod";

export const layoutId = "general-intro-slide";
export const layoutName = "Intro Slide";
export const layoutDescription =
  "A clean slide layout with title, description text, presenter info, and a supporting image.";

const introSlideSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  description: z
    .string()
    .min(10)
    .max(150)
    .default(
      "Our product offers customizable dashboards for real-time reporting and data-driven decisions. It integrates with third-party tools to enhance operations and scales with business growth for improved efficiency."
    )
    .meta({
      description: "Main description text content",
    }),
  presenterName: z.string().min(2).max(50).default("John Doe").meta({
    description: "Name of the presenter",
  }),
  presentationDate: z.string().min(2).max(50).default("December 2025").meta({
    description:
      "Date of the presentation must be the latest date like today's date",
  }),
});
