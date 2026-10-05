import { WorkspaceShell } from "../../components/WorkspaceShell";
import { bisAgents, bisSystem } from "../../data/bisAgents";

export default function OperationsPage() {
  return <WorkspaceShell bisAgents={bisAgents} bisSystem={bisSystem} />;
}
