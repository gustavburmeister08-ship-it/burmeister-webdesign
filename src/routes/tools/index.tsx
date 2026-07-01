import { createFileRoute } from "@tanstack/react-router";
import { ToolsIndex, toolsIndexHead } from "../-shared/tools";
export const Route = createFileRoute("/tools/")({ head: toolsIndexHead, component: ToolsIndex });
