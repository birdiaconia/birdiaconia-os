import { WorkspaceShell } from "../components/WorkspaceShell";
import { bisAgents, bisSystem } from "../data/bisAgents";

export default function Home() {
  return <WorkspaceShell bisAgents={bisAgents} bisSystem={bisSystem} />;
}
