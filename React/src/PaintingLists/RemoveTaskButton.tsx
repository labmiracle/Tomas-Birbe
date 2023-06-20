import { SecondaryButton } from "../ui/SecondaryButton";

export function RemoveTaskButton({ handleClick }: { handleClick: () => void }) {
  return <SecondaryButton onClick={handleClick}>x</SecondaryButton>;
}
